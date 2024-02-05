// addThreeNums= (a,b,c) => a+b+c
// const add = memoize(addThreeNums)
// add(1,2,3)

const memoize =(fn)=>{
    const cache = {}  

    return(...args) => {
        const argsToString = JSON.stringify(args)    //It will convert it into string the whole array

        if(argsToString in cache){
            console.log(`fetching from cache for key ${argsToString}`)
        }
    }
}