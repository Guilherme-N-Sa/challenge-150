/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let arr = path.split("/").filter((p) => p !== "." && p !== "");
  let resp = "";
  let skip = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === "..") {
      skip++;
    } else if (skip) {
      skip--;
    } else {
      resp = "/" + arr[i] + resp;
    }
  }
  return resp ? resp : "/";
};
