function it(n1:number,n2:number,n3:number){
    if(n1>n2 && n1>n3){
        console.log(n1,"is greatest number");
    }
    else if(n2>n1 && n2>n3){
        console.log(n2,"is greatest number");
    }
    else if(n3>n1 && n3>n2){
        console.log(n3,"is greatest number");
    }
    else{
        console.log("they are equal");
    }
}
it(2,3,4);