

// var fib = function(n){

//     const arr = [0,1];

//     for (let i=2;i<n;i++){

//         arr.push(arr[i-1]+arr[i-2]);
//     }

//     //console.log("fib arr",arr)
//     return arr[n];
// }

// fib(5)


//using recursion

var fib = function(n){

    if (n<=1) return n;

    return fib(n-1) + fib(n-2);
}

console.log("fibbo",fib(7));