//factorial of a number
function fact(n:number):number{
    let result:number =1;
    for(let i=1;i<=n;i++){
        result = result * i;
    }
    return result;
}
console.log(fact(5));

//sum of numbers
function sum(number:number):number{
    let res:number = 0;
    for(let i = 0;i<=number;i++){
        res= res+i;
    }
    return res;
}
console.log(sum(5));