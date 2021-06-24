function checker(number:number){
    if(number % 2 == 0 || number %3 == 0||number % 5 == 0|| number % 7 == 0){
        console.log(number ,"is even");
    }
    else {
        console.log(number,"number is odd");
    }
}
checker(2);
checker(3);
checker(19);
checker(20);