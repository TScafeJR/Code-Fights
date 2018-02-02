function houseRobber(nums) {
    if (nums === null || nums.length < 1){
        return 0
    } else if (nums.length === 1){
        return nums[0]
    } else {
        var even = 0;
        var odd = 0;
        for (var i = 0; i < nums.length; i++){
            if (i % 2 === 0) {
                even += nums[i];
                even = even > odd ? even : odd;
            } else {
                odd += nums[i];
                odd = even > odd ? even : odd;
            }
        }
        
        return even > odd ? even : odd;
    }
}
