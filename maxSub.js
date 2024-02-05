
// function maxSubArray(nums){

//     let maxSum = nums[0];
//     let startidx = 0;
//     let endidx = 0;

//     for (let i=0; i<nums.length; i++){
//         let currSum=0;
//         for (let j=i;j<nums.length;j++){
//             currSum = currSum + nums[j];

//             if (currSum > maxSum){
//                 maxSum = currSum;
//                 startidx = i;
//                 endidx = j;
//             }
//         }
//     }
//     return {
//         sum: maxSum,
//         subArray : nums.slice(startidx,endidx+1)
//     };
// }


//kadane

function maxSubArray(nums){
    let sum =0;
    let max=nums[0];

    for (let i=0;i<nums.length;i++){
        sum = sum+nums[i];

        if(sum> max){
            max= sum;
        }

        if(sum<0){
            sum = 0;

        }
    }
    return max; 
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));