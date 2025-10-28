const tinderuser =new  Object()
tinderuser.id = '123abc'
tinderuser.name = "anuj"
tinderuser.email = "anuj@gmail.com"
tinderuser.isloggedin = "false"

console.log(tinderuser)

const regularuser = {
    email:"anuj@gmail.com",
fullname:{
         userfullname: { 
                   firstname: "anuj",
                   lastname: "singh"
               }
            }
        }
        // console.log(regularuser.fullname)
        // console.log(regularuser.fullname.userfullname)
    
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
 
//const obj3 = Object.assign({},obj1,obj2)
const obj3= {...obj1, ...obj2}
//  console.log(obj3);

 const detail = [{

    name:"anuj",
    email:"anuj@mail.com"

 },
 {

    name:"anuj",
    email:"anuj@mail.com"

 },{

    name:"anuj",
    email:"anuj@mail.com"

 },


]
detail[1].email
// console.log(tinderuser)
// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
//console.log(Object.entries(tinderuser))
//console.log(tinderuser.hasOwnProperty('isloggedin'));
