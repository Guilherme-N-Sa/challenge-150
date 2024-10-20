/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge = function (nums1, m, nums2, n) {
  let k = nums1.length - 1;

  while (m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[k] = nums1[m - 1];
      m--;
    } else {
      nums1[k] = nums2[n - 1];
      n--;
    }
    k--;
  }

  while (n > 0) {
    nums1[k] = nums2[n - 1];
    k--;
    n--;
  }
};
