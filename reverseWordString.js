// Ques 1 : Given an input string s, reverse the order of the words

// Input: "the sky is blue"     ----->>>>>     Output: "blue is sky the"
// Input: "  hello world  "     ----->>>>>     Output: "world hello"
// Input: "a good   example"    ----->>>>>     Output: "example good a"

// "the sky is blue" => [the,sky,is,blue]
// [] => [the,sky,is,blue] => blue is sky the

const reversewords = function (s){

    const splitS = s.split(" ")
    const stack = []

    for (let i of splitS){
        stack.push(i)                        //copy element of string in stacvk
    }

    let finalS = "";

    while(stack.length){
        const current = stack.pop();

        if(current){
            finalS += " " + current;
        }
    }

    return finalS.trim();
}

console.log(reversewords("the sky is blue"));