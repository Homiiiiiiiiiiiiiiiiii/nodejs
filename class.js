//생성자 함수
// const animals = ['dog', 'cat', 'lion', 'tiger']

const animals = new Array('개', '고양이', '토끼', '판다')
console.log(animals)
console.log(animals.length)

//스타벅스 메뉴출력
const starbucks = new Array('아메리카노', '라떼', '카푸치노')
Array.prototype.Menu = function(){
    console.log(this)
}

starbucks.Menu()

const mega = ['큐브라떼', '자몽에이드', '쿠키프라푸치노']
mega.Menu()

const americano = {
    name: '아메리카노',
    price: 3000,
    orderCoffee: function(){
        return `${this.name}는 ${this.price}원 입니다.`
    }
}

const latte = {
    name: '라떼',
    price: 4000
}

console.log(americano.orderCoffee())
console.log(americano.orderCoffee.call(latte))

function OrderCoffee(name, price){
    this.name = name
    this.price = price
}

OrderCoffee.prototype.order = function(){
    return `${this.name}는 ${this.price}원 입니다.`
}

const iceAmericano = new OrderCoffee('아이스아메리카노', 1500)
const iceLatte = new OrderCoffee('아이스라떼', 2000)

console.log(iceAmericano.order())
console.log(iceLatte.order())


//class 문법
class OrderIceCoffee{
    constructor(name, price){
        this.name = name
        this.price = price
    }

    _order(){
        return `${this.name}는 ${this.price}원 입니다.`
    }

    making(){
        return `${this.name}를 만드는 중...`
    }

    made(){
        return `${this.name}가 만들어졌습니다.`
    }
}

const iceTea = new OrderIceCoffee('히비스커스', 3000)
const iceGreenTea = new OrderIceCoffee('녹차라떼' , 4000)

console.log(iceTea._order())
console.log(iceTea.making())
console.log(iceTea.made())

console.log(iceGreenTea._order())
console.log(iceGreenTea.making())
console.log(iceGreenTea.made())

//상속
class SpecialCoffee extends OrderIceCoffee{
    constructor(name, price, size){
        super(name,price)
        this.size = size
    }

    calling(){
        return`스페셜 커피 ${this.name} ${this.size}사이즈는 ${this.price}원 입니다.`
    }
}

const vienaCoffee = new SpecialCoffee('아인슈페너', 5000 , 'tall')
const gingerCoffee = new SpecialCoffee('진저커피', 4500 , 'venti')

console.log(vienaCoffee.calling())
console.log(gingerCoffee.calling())

console.log(vienaCoffee.made())
console.log(gingerCoffee.made())