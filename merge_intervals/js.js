/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let current = intervals[0];
  let resp = [];

  for (let i = 1; i < intervals.length; i++) {
    let next_interval = intervals[i];
    if (current[1] >= next_interval[0]) {
      current = [current[0], Math.max(next_interval[1], current[1])];
    } else {
      resp.push(current);
      current = next_interval;
    }
  }
  resp.push(current);

  return resp;
};
