import JsSHA from "jssha/dist/sha256";
import { Base } from "./base";

export function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name),
      );
    });
  });
}

export function encryptPassword(password: string, time: number) {
  let key = getSHA256(password);
  return getSHA256(time + key);

  function getSHA256(text) {
    let shaObj = new JsSHA("SHA-256", "TEXT", { encoding: "UTF8" });
    shaObj.update(text);

    return shaObj.getHash("HEX");
  }
}

export function outputDebugURL(url: string, config: Base) {
  let label = "javascript-ampache query URL";

  if (config.useBearerToken) {
    label = "(Using Bearer token, auth added for debugging) - " + label;
    url += "&auth=" + config.sessionKey;
  }

  console.debug(
      label + " %c" + url,
      "color: black; font-style: italic; background-color: orange;padding: 2px",
  );
}