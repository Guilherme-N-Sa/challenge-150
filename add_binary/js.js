/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let aArr = a.split("");
  let bArr = b.split("");

  let resp = "";
  let carry = 0;

  while (aArr.length > 0 || bArr.length > 0) {
    let aVal = aArr.length > 0 ? aArr.pop() : "0";
    let bVal = bArr.length > 0 ? bArr.pop() : "0";

    let sum = +aVal + +bVal + carry;

    val = sum % 2;
    carry = Math.floor(sum / 2);

    resp = val.toString() + resp;
  }

  if (carry) {
    resp = carry.toString() + resp;
  }

  return resp;
};
