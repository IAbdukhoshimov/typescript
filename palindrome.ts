function palindrome(str:string){
    const length = str.length;
    
    for(let i=0;i<length/2;i++){
        if(str[i]!==str[length-1-i]){
            return false;
        }
    }
    return true;
}
console.log(palindrome("madam"));
console.log(palindrome("mam"));
console.log(palindrome("mam"));
console.log(palindrome("mam"));
console.log(palindrome("121"));
console.log(palindrome("999"));
