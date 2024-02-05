// function secondLargest(arr){

//     const unique = Array.from(new Set(arr));

//     unique.sort((a,b)=>{
//         return b-a;
//     })

//     if(unique.length > 1){
//         return unique[1];
//     }
//     else{
//         return -1;
//     }

//     //console.log(unique);
// }


function secondLargest(arr){

    let largest = -1;
    let slargest = -1;

    for( let i=0; i<arr.length;i++){
        if (arr[i]>largest){
            slargest=largest;
            largest= arr[i];
        }
        else if (arr[i]!= largest && arr[i]>slargest){
            slargest = arr[i];
        }
    }
    return slargest;
}

console.log(secondLargest([12,35,1,10,24,1]));