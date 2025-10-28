//object

const mysym = Symbol("key1")

const jsuser = {
           name: "anuj",
           age : 22,
           location: "Noida",
           [mysym] : "key1",
           email: "anuj@gmail.com",
           isloggedin: "false",
           logindays :["monday","tuesday"],


}
jsuser.email ="yogesh@gmail.com"
Object.freeze(jsuser)
jsuser.age = 55
            //  console.log(jsuser.age)
            //  console.log(jsuser["name"])
            //  console.log(jsuser["email"])
            //  console.log(jsuser[mysym])

           // console.log(jsuser)
//  jsuser.greeting = function(){
//     console.log("Hello JS user");
// }
function greetingTwo(test){
    console.log(`Hello JS user, ${test.name}`);
}

//console.log(jsuser. ());
greetingTwo(jsuser)