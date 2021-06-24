let h:number =3;
function triangle(n:number):number {
    let s:number = h*n*(1/2);
    return s;
}
console.log(triangle(15));