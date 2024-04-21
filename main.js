//함수 선언문
function hello1(){
  console.log('Hello1')
}
hello1()

//함수  표현식
const hello2 = function(){
  console.log('Hello2')
  return 'Hello2'
  console.log('hello3')
}

hello2()

function sum(a,b){
  return a+b
}

const a = sum(1,2)
console.log(a)

//객체 구조 분해 할당
const user = {
  name:'jessie',
  age:'29',
  email:'aaa@naver.com'
}

function getName({name,age}){
  return name
}

console.log(getName(user))

function getEmail({email}){
  return email
}

console.log(getEmail(user))

//나머지 매개변수
function sum1(...rest){
  return rest
}

console.log(sum1(1,2,3))

//setTimeout
const hello = () => {
  console.log('Hello React')
}

const timeOut = setTimeout(hello, 3000)

//clearTimeout
clearTimeout(timeOut)

//setInterval
const interval = () => {
  console.log('setInterval')
}
const timerOut = setInterval(interval,3000)

const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
  alert('STOP')
  clearInterval(timerOut)
})

//콜백함수
function aa(callback){
  callback()
  console.log('aa')
}

function bb(){
  console.log('bb')
}

aa(bb)

//콜백함수 예제
const sum2 = (a,b,c) => {
  setTimeout(() => {
    return c(a+b)
  }, 3000);
}

sum2(1, 2, (value) => {
  console.log(value)
})

//this
//일반 함수의 this
function userName(){
  this.firstName = '다롱이'
  this.lastName = '감'
  return {
    firstName:'다롱',
    lastName:'김',
    getFullName : () => {
      return `${this.lastName}${this.firstName}`
    }
  }
}

const u = userName()
console.log(u.getFullName())