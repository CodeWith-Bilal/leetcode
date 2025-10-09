function removeDuplicates(nums: number[]): number {
  let k = 0; // index for placing valid elements

  for (let num of nums) {
    // Allow an element if we’ve seen less than 2 of it
    // OR if it's different from the element 2 places before
    if (k < 2 || num !== nums[k - 2]) {
      nums[k] = num;
      k++;
    }
  }

  return k;
}
