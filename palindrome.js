const isPalindrome= function(x){

    if(x<0) return false;
    return x == +x.toString().split("").reverse().join("");
}

const ans = isPalindrome(-12);

console.log(ans);

//121=> "121" => ["1","2","1"] => ["1","2","1"]=>"121"
