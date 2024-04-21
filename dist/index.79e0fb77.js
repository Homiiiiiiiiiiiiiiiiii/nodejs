// // 콜백 함수를 사용하여 비동기 처리하기
// function orderCoffee(coffee, callback) {
//     console.log(`${coffee}를 만드는 중...`)
//     setTimeout(() => {
//         console.log(`${coffee}가 만들어졌습니다.`)
//         callback()
//     }, 3000)
// }
// // 콜백 함수
// function drinkCoffee() {
//     console.log('커피를 마신다.')
// }
// // orderCoffee 함수를 호출하고 콜백 함수를 전달
// // 콜백 함수는 orderCoffee 함수에서 커피가 만들어진 후에 실행된다.
// orderCoffee('아메리카노', drinkCoffee)
//promise
const coffeeOrder = new Promise((resolve, reject)=>{
    console.log("\uCEE4\uD53C \uC81C\uC870 \uC911......");
    setTimeout(()=>{
        if (Math.random() > 0.5) resolve("\uC544\uBA54\uB9AC\uCE74\uB178");
        else reject("sold out");
    }, 3000);
});
coffeeOrder//resolve 함수가 호출되면 then 메소드 실행
.then((item)=>{
    console.log(`${item}\u{AC00} \u{B9CC}\u{B4E4}\u{C5B4}\u{C84C}\u{C2B5}\u{B2C8}\u{B2E4}.`);
})//reject 함수가 호출되면 catch 메소드 실행
.catch((error)=>{
    console.error(error);
});

//# sourceMappingURL=index.79e0fb77.js.map
