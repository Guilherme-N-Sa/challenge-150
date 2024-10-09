/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let tank_t = 0;
  let tank_c = 0;
  let start = 0;

  for (let i = 0; i < gas.length; i++) {
    let diff = gas[i] - cost[i];
    tank_t += diff;
    tank_c += diff;

    if (tank_c < 0) {
      tank_c = 0;
      start = i + 1;
    }
  }
  return tank_t >= 0 ? start : -1;
};
