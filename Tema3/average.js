const nums = [3, 7, 10, 2, 45];

const average = (nums) => nums.reduce((prev, curr) => prev + curr, 0) / nums.length;

console.log(average(nums));