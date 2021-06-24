function FizzBuzz(n:number){
    if(n%15==0){
        console.log("FizzBuzz");
    }
    else if(n%5==0){
        console.log("Fizz");
    }
    else if(n%3==0){
        console.log("Buzz")
    }
    else{
        console.log(n);
    }
}
FizzBuzz(15);
FizzBuzz(5);
FizzBuzz(3);
FizzBuzz(21);
FizzBuzz(43);
