function removeDuplicate(arr){
    let uniqueArray = arr.filter(function(item,pos){
        return arr.indexOf(item)==pos;
    });

    return uniqueArray;
}
let myarray = [1,2,3,4,56,3,1,2,3,4,56,3];
console.log(removeDuplicate(myarray));