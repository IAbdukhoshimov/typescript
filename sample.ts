let obj = {
    fname:"Samandar",
    sname:"Obidov",

    fullNames():string{
        return this.fname + this.sname
    },

    get fullName():string{
         return this.fname + this.sname
    },

    set fullNamePerson(v:string){
        let myname = v.split(' ')
        this.fname= myname[0]
        this.sname = myname[1]
    }
}

console.log(obj.fullName)
obj.fullNamePerson = "Ixtiyor Karimov"
console.log(obj.fullName)