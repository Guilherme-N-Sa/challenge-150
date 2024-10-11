/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let symbol_list = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  let resp = "";
  for (let i = 0; i < symbol_list.length; i++) {
    if (symbol_list[i][0] <= num) {
      resp += symbol_list[i][1].repeat(Math.floor(num / symbol_list[i][0]));
      num = num % symbol_list[i][0];
    }
  }
  return resp;
};
