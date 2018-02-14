function kthLargestElement(nums, k) {
    function sortNumber(a,b) {
        return b - a;
    }

    nums.sort(sortNumber);
    console.log(nums);
    return nums[k - 1]
}
