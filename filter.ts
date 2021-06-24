function filter(arr){
    return arr.filter((item)=>{
        if(item%2==0){
            return true;
        }
        return false;
    });
}
const myaray = [1,2,3,4,5,6];
console.log(filter(myaray));