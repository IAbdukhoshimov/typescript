function fibonaci(num:number):number {
    let first = 0;
    let second =1;
    let result = 0;
    for(let i = 1; i < num;i++){
        result = first+second;
        first = second;
        second = result;
    }
    return result;
}

console.log(fibonaci(10));
