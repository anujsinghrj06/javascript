// // function introduceme (username,profession,age){
// //     console.log('hi')
// //     console.log(`I am ${username}`)
// //     console.log(`I am ${profession}`) 
// //     console.log(`my age is ${age}`)
// // }

// //   introduceme("anuj","developer","24")

// //setTimeout(`console.log("hi")`,4000)

// // const fruit = ['banana','apple','peach','mango']
// // for(let i = 0;i<=fruit.length;i++){
// //     console.log(fruit[i])
// // }

// // const person = {

// //     firstName : "anuj",
// //     lastName : "rajput",
// //     age: 54,
// //     eyescolour : "brown",
// // }
// // for(const key in person){
// // console.log(key,": ",person[key])}
// //fruit.forEach(function(fruit) {
//     //console.log(fruit);
// //})

// const months = ["january","febuary","march","april"]
// // months.map((index,month) => {
// // //console.log(index,month)
// // return month
// // })

// const filtered = months.filter((value) => {
// console.log()
// return value.includes('m')
// })
// //console.log(filtered)

// const student = [
// {
//     name: 'akash',
//     age: 21,
// },

// {

//     name:'anuj',
//     age : 16,
// },
// {

//     name: 'alice',
//     age: 21,
// },
// {

//     name: 'annie',
//     age: 20,
// },
// ]



// const filteredAge = student.filter((value) => {
// console.log (value)
// return value.age >=20
// return value.age >=20
//  }).map((value) => {
// return value.name
// })
// console.log("filtered",filteredAge)

// const num  = [1,2,3,4]
// const reduces = num.reduce((accumulater,current )=>{
//     //console.log(accumulater)
//     debugger
//     return accumulater + current 
// },0)

// console.log(reduces)


// const intro = {
// name: "anuj",
// age : "22",
// color: "brown"

// }

// function user ({name,age}){
//     console.log(age,name)
// }

//  user(intro)

// const paragrph  = document.querySelector('p')



// const h1 = document.querySelector('h1')
// const container = document.querySelector(".container")
// const firstImage = document.querySelector("img")
// container.append(p)
// p.innerText() = "hello"

// for (let i = 2; i<=100; i++){
//     const newImg = firstImage.cloneNode()
//     container.append(newImg)
// }
// const container = document.querySelector('.container')
// const card = document.querySelector('.card')
// function sayhii (){
//     console.log('hiiiiiii');
// }

// h1.addEventListeners('click',sayhii)


// let count = 1
// card.addEventListener('click', () => {
//     const newcard = document.createElement('div')
//     newcard.classList.add('card')
//     newcard.innerText = count
//     count++
//     container.append(newcard)
//     console.log(newcard);
// })
 

// const usernameInput = document.querySelector('#username')
// const paragraph = document.querySelector('p')
// const form = document.querySelector('form')

// usernameInput.addEventListener('click', () => {
//     console.log('input clicked');
// })

// usernameInput.addEventListener('dblclick', () => {
//     console.log('input double clicked');
// })

 

// usernameInput.addEventListener('input',(e)=>{
//     console.log(e.target.value)
//     inputvalue = e.target.value
//     paragraph.innerText = e.target.value
// })

// usernameInput.addEventListener('change', (e)=>{
// console.log(e.target.value)
// inputvalue = e.target.value
// paragraph.innerText = e.target.value
// })


// usernameInput.addEventListener('focus',(e) =>{
//     console.log(e.target.value)
//     inputvalue = e.target.value
//     paragraph.innerText = e.target.value


// // })


// form.addEventListener('submit',(e)=>{
//     console.log(e)

// })


// window.addEventListener('keypress',(e)=>{
//     console.log('key code',e.code)
//     console.log('key value',e.key)
// }) 
// const addCardBtn = document.querySelector('.card')
// const container = document.querySelector('.container')
// const input = document.querySelector('input')
// const form = document.querySelector('form')

// let count = 1

// addCardBtn.addEventListener('click', () => {
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// setTimeout(() => {
//     input.focus()
//     console.log('Input Focused');
// }, 1000)

// setTimeout(() => {
//     input.blur()
//     console.log('Input Blurred');
// }, 3000)

// setTimeout(() => {
//     form.submit()
//     console.log('Form Submitted');
// }, 3000)

// form.reset()

// const intervalId = setInterval(() => {
//   if (count > 999) {
//     clearInterval(intervalId)
//   }
//   addCardBtn.click()
// }, 5)


// const green = document.querySelector('.green')
// const pink = document.querySelector('.pink')
// const blue = document.querySelector('.blue')


// green.addEventListener('click',(e)=>{
//     e.stopPropagation()
//     console.log('green Event listenr')
// })
// pink.addEventListener('click',(e)=>{
//     e.stopPropagation()
//     console.log('pink Event listenr')
// })
// blue.addEventListener('click',(e)=>{
//     console.log('blue event listner')
// })



// const addCardBtn = document.querySelector('.add-card')
// const container = document.querySelector('.container')

// const cardsList = document.querySelectorAll('.card')


// let count =1
// addcardbtn.addEventListener('click',(e)=>{
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

