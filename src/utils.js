import JsSHA from "jssha/dist/sha256";

/**
 * @param {string} password
 * @param {number} time
 * @returns {string}
 */
export function encryptPassword(password, time) {
  let key = getSHA256(password);
  return getSHA256(time + key);

  /**
   * @param {string} text
   * @returns {string}
   */
  function getSHA256(text) {
    let shaObj = new JsSHA("SHA-256", "TEXT", { encoding: "UTF8" });
    shaObj.update(text);

    return shaObj.getHash("HEX");
  }
}

/**
 * @param {string} url
 * @param {{ useBearerToken?: boolean, sessionKey?: string|null }} config
 */
export function outputDebugURL(url, config) {
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
