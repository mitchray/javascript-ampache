import { createApi, mockJsonRequest } from "./helpers.js";

const api = createApi();

describe("Preferences", () => {
  it("systemPreferences()", async () => {
    const res = { preference: [] };
    mockJsonRequest("system_preferences", res);
    const result = await api.systemPreferences();
    expect(result).toEqual(res);
  });

  it("systemPreference()", async () => {
    const res = { name: "notify_email", value: "1" };
    mockJsonRequest("system_preference", res);
    const result = await api.systemPreference({ filter: "notify_email" });
    expect(result).toEqual(res);
  });

  it("userPreferences()", async () => {
    const res = { preference: [] };
    mockJsonRequest("user_preferences", res);
    const result = await api.userPreferences();
    expect(result).toEqual(res);
  });

  it("userPreference()", async () => {
    const res = { name: "theme", value: "dark" };
    mockJsonRequest("user_preference", res);
    const result = await api.userPreference({ filter: "theme" });
    expect(result).toEqual(res);
  });

  it("preferenceCreate()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("preference_create", res);
    const result = await api.preferenceCreate({
      filter: "new_pref",
      type: "string",
      default: "",
      category: "interface",
    });
    expect(result).toEqual(res);
  });

  it("preferenceEdit()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("preference_edit", res);
    const result = await api.preferenceEdit({
      filter: "theme",
      value: "light",
    });
    expect(result).toEqual(res);
  });

  it("preferenceDelete()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("preference_delete", res);
    const result = await api.preferenceDelete({ filter: "old_pref" });
    expect(result).toEqual(res);
  });
});
