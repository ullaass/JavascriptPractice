

// function maxProfit(prices){

//     let globalProfit = 0;

//     for (let i=0;i<prices.length-1;i++){
//         for(let j=i+1;j<prices.length;j++){

//             const currProfit = prices[j]-prices[i];

//             if(currProfit> globalProfit){
//                 globalProfit = currProfit;
//             }
//         }
//     }
//     return globalProfit;

// }

function maxProfit(prices){

    let minimumStock = prices[0] || 0;
    let profit =0;

    for(let i=0 ; i < prices.length ; i++){
        if(prices[i]< minimumStock){
            minimumStock = prices[i];
        }

        profit = Math.max(profit, prices[i]-minimumStock);
    }
    return profit;
}

console.log(maxProfit([7,1,5,3,6,4]));