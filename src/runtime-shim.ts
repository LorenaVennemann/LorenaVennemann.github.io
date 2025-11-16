// runtime-shim.ts
// Defensive runtime shim to avoid runtime crashes where code assumes
// RegExp.prototype.exec or String.prototype.match never return null.
// Some minified bundles (or libraries) index into match/exec results
// without checking for null (e.g. result[1]). Returning an empty array
// instead of null prevents "Cannot read properties of null (reading '1')".

try {
  const _origMatch = (String.prototype as any).match;
  (String.prototype as any).match = function (re: any) {
    const res = _origMatch.call(this, re);
    return res === null ? [] : res;
  };

  const _origExec = (RegExp.prototype as any).exec;
  (RegExp.prototype as any).exec = function (str: any) {
    const res = _origExec.call(this, str);
    return res === null ? [] : res;
  };
} catch (e) {
  // If the environment doesn't allow patching prototypes, ignore silently.
}

export {};
