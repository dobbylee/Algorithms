function solution(nums) {
    const numSet = new Set(nums);
    return Math.min(nums.length / 2, numSet.size);
}