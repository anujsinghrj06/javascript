const myNumers = [1,2,3,4,5,6,7,8]

// const nums = myNumers.map((num)=> {return  num+10})
//console.log(nums)


const mynum = [1,2,3,4,5,6,7,8,9];
const data = mynum.map((num)=> num*10)
             .map((num)=> num+1)
console.log(data)


//.............reduce

 const mydata = [1,2,3];
// const total= mydata.reduce(function(accumulator,currentvalue){ 
//      console.log(`acc is ${accumulator} and curr ${currentvalue}`)
//      return accumulator+currentvalue

//  },0)
//  console.log(total)
 
const mycheck = mydata.reduce((acc,cuval)=>acc+cuval,0)
console.log(mycheck)