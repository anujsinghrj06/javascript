// for off loop
 const arr  = [1,2,3,4,5]

 for(const num of arr ){
    //console.log(num)
 }

 const  greeting = "bonjour"

 for(const num of greeting ){
   // console.log(`greeting is ${num}`)
 }

 //map...................


 const map = new Map()
 map.set('In', "India")
 map.set('USA',"United State America")
 map.set('Fr'," France")

 //console.log(map);
 for (const [key,value] of map) {
    //console.log(key, ':-' ,value)
 }

 //for in loops....
  const myObject ={
    js: "javascripst",
    cpp:"c++",
    rb : "ruby",
    swift: "swift by apple"


  }  
  for (const key in myObject) {
    //console.log(myObject[key])
    //console.log(`${key} shortcut key for ${myObject[key]}`)
    }
  const programing =[ "js ","cpp","java","py"]
  for (const key in programing){
    //console.log(key)
    //console.log(programing[key])
  }