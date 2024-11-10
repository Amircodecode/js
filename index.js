// const myCity = {
// city: 'New York',
// popular: true,
// country: 'USA'
// }

// delete myCity.country

// console.log(myCity)

// const myCity = {
// /city: 'New York'
// }
// myCity['popular'] = true
// console.log(myCity) 

// const popular = 'country'
// myCity[popular] = true
// console.log(myCity)

// const name = 'amir'
// const surname = 'nazarov'

// const portfolio = {
// name: name,
// surname: surname,
// fucke: true
// }

// console.log(portfolio)

// const myCity = {
//     city: 'New York',
//     cityGreeeting: function (){
//         console.log('Greating!!')
//     }
// }

// myCity.cityGreeeting()


// const myCity = {
//     city: 'New York',
//     cityGreeeting(){
//         console.log('Greating!!')
//     }
// }

// myCity.cityGreeeting()

// let a =
// [
//     {
//         "usetId": 1,
//         "id": 1,
//         "title": "Test title",
//         "status": {
//             "completed": false
//         }

//     }
// ]

// JSON.parse()
// JSON.stringify()

// const a = 10
// let b = a
// b = 30
// console.log(a)
// console.log(b)
// console.log(typeof(a))

// const person = {
// name: "bob",
// age: 21
// }

// const person2 = person 
// const person2 = Object.assign({}, person)
// this is made in order to not to change the main into i mean the object person 
// person2.name = "amir"
// person2.age = 18
// person2.isMarried = false
// console.log(person2)
// console.log(person)

// const person = {
// name: 'Amir',
// age: 18
// }

// const person2 = {...person}
// person2.age = 19

// console.log(person)
// console.log(person2)
// this method is also do not change the original one but there is also the problem that if there is an nested file it will change


// const person = {
// name: 'Amir',
// age: 18,
//     finance: {
//         inDollar: 0,
//         inSum: 0
//     }
// }

// const person2 = JSON.parse(JSON.stringify(person))
// person2.finance.inDollar = 100

// console.log(person)
// console.log(person2)
// the best version of the copying the data since only this one will not change the data 

// let a = 1
// let b = 2
// let c 
// c = a + b
// console.log(c)

// a = 8 
// b = 8
// c = a + b
// console.log(c)


// let a = 5
// let b = 4

// function sum(a, b){
//     const c = a +b 
//     console.log(c)
// }

// sum(a, b)
// a = 3
// b= 7
// sum(a, b)

// function myFn(a, b){
//     let c 
//     a = a + 1
//     c = a + b
//     return c
// }

//  let c = myFn(10, 12)
// // console.dir(myFn)
// console.log(c)

// const person1 = {
//     name: 'Amir',
//     age: 18
// }

// function increasePersonAge(person){
//     person.age += 1
//     return person
// }

// let b = increasePersonAge(person1)
// console.log(person1.age)
// console.log(b)

// const personOne = {
//     name: 'Amir',
//     age: 18
// }

// function increasePersonAge(person) {
//     const updatedPerson = Object.assign({}, person)
//     updatedPerson.age += 1
//     return updatedPerson
// }

// const updatedPerson = increasePersonAge(personOne)
// console.log(personOne.age)
// console.log(updatedPerson.age)

// function printMyName() {
//     console.log('Amir')
// }

// setTimeout(printMyName, 1000)
// let a = 5
// function myFn() {
// function innerFn() {
// console.log(a)
// }
// innerFn()
// }
// myFn()

// const button = { 
//     width: 200,
//     text: 'amir'
// }

// const redButton = {
//     ...button,
//     color: 'red'
// }

// console.table(redButton)

// const buttonInfo = {
//     text: 'buy'
// }
// const buttonStyle = {
//     color: 'black',
//     width: 200,
//     height: 399
// }

// const button = {
//     ...buttonInfo,
//     ...buttonStyle
// }
// console.table(button)
// this is to connect two object to one of them 

// const name = 'Amir'
// const surname = 'Nazarov'
// const country = 'uzbekistan'
// const age = 18
// const isMarried = false

// console.log(`my name is ${name} and my surname is ${surname} also I am from ${country} i am ${age} years old`)

// function multiplayer(value, multiplier = 1) {
//     return value * multiplier
// }

// const a = multiplayer(10, 2)
// const b = multiplayer(10)

// console.log(a, b)

// const newPost = (post, addedAt = Date()) => ({
//     ...post,
// get the object post and add to them addedAt
//     addedAt: addedAt
// })

// const firstPost = {
//     id: 1,
//     author: 'amir'
// }

// const a = newPost(firstPost)
// console.log(a)

// const myFn = (a, b) => {
//     let c
//     a = a + 1
//     d = a + b
//     return d
// }       

// let a = myFn(5, 3)
// console.log(a)

// const fnWidth = () => {
//     throw new Error('Some error')
// }
// try {

//     fnWidth()
// } catch (error) {
//     console.error(error);
//     console.log(error.message);
// }

// console.log('Continue...')

// const myArray = [1, 2, 3]
// console.log(myArray)

// const myArray2 = new Array(1,2,3)
// console.log(myArray2)

// const array = [1, true, 'amir', 'abc', NaN]

// console.log(array[0])
// console.log(array[1])
// console.log(array[2])

// array[1] = false
// array.push(5)
// array.push(false)
// // array push is needed to push to the end the item that you want to add 
// array.pop()
// // pop delete the last item in the array 
// array.shift()
// // delete the first item in the array 
// array.unshift('amir')
// // add to start of the array 
// const removedElement = array.shift()
// console.log(removedElement)  
// console.log(array)

// const array = [1, 2, 3,]
// array.forEach(el => console.table(el * 2))
// // console.log(array)

// const a = array.map(el => el * 2)
// // this method is creating the new massive while the original one is not changed
// console.log(a)

// a.trim()
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const fruits = ['apple', 'banana']
// const [fruitOne, fruitTwo] = fruits
// console.log(fruitOne)
// console.log(fruitTwo)

// const userProfile = {
//     name: 'amir',
//     commentsQuantity: 23,
//     hasAssigned: false,
// }

// const userInfo = ({name, commentsQuantity}) =>{
//     if (!commentsQuantity){
//         return `User ${name} has no comments`
//     }
//     return `User ${name} has ${commentsQuantity} comments`
// }



// userInfo(userProfile)


// let val = 10

// if (val > 5) {
//     val += 20
// }

// console.log(val)

// console.log(!undefined)

// const person = {
//     age: 20
// }

// if (!person.name){
//     console.log("Your name is not entered")
// }

// let val = 10

// if (val < 5) {
//     val += 20
// } else {
//     val -= 20
// }

// console.log(val)

// const age = 4

// if (age >= 18) {
//     console.log('is adult')
// } else if (age >= 12 && age < 18) {
//     console.log('is the teenager')
// }else{
//     console.log('is child')
// }

// const sumPositiveNumbers = (a, b) => {
//     if (typeof a !== 'number' || typeof b !== 'number')
//         return 'one of the integers in not a number'

//     if (a <= 0 || b <= 0)
//         return 'numbers are positive'

//     return a + b
// }

// setTimeout(sumPositiveNumbers(2,4), 1000)

const month = 2

switch (month) {
    case 1:
        console.log('January')
        break
    case 2:
        console.log('February')
        break
}