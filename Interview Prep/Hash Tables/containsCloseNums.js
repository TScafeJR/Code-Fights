function containsCloseNums(nums, k){
    let m = new Map()
    for(i in nums) {
        if(m.has(nums[i]) && i-m.get(nums[i]) <= k) return true;
        m.set(nums[i], i);
    }
    return false;
}
