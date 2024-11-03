/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let set_viewed = new Set();
  function rec(num) {
    let arr_num = num.toString().split("");

    let curr_sum = 0;
    for (n of arr_num) {
      curr_sum += n * n;
    }

    if (curr_sum === 1) {
      return true;
    } else if (set_viewed.has(curr_sum)) {
      return false;
    }

    set_viewed.add(curr_sum);
    return rec(curr_sum);
  }

  return rec(n);
};
