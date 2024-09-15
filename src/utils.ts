import JsSHA from "jssha/dist/sha256";

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
