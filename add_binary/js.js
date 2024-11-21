/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let a_arr = a.split("");
  let b_arr = b.split("");

  let resp = "";
  let carry = 0;

  while (a_arr.length > 0 || b_arr.length > 0) {
    let a_val = a_arr.length > 0 ? a_arr.pop() : "0";
    let b_val = b_arr.length > 0 ? b_arr.pop() : "0";

    let sum = +a_val + +b_val + carry;

    val = sum % 2;
    carry = Math.floor(sum / 2);

    resp = val.toString() + resp;
  }

  if (carry) {
    resp = carry.toString() + resp;
  }

  return resp;
};
