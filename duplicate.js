function duplicate(nums){

    nums = Array.from(new Set(nums));

    return nums;

}

console.log(duplicate([0,0,1,1,1,2,2,2,3,3,3]))