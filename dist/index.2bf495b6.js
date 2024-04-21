//생성자 함수
// const animals = ['dog', 'cat', 'lion', 'tiger']
const animals = new Array("\uAC1C", "\uACE0\uC591\uC774", "\uD1A0\uB07C", "\uD310\uB2E4");
console.log(animals);
console.log(animals.length);
//스타벅스 메뉴출력
const starbucks = new Array("\uC544\uBA54\uB9AC\uCE74\uB178", "\uB77C\uB5BC", "\uCE74\uD478\uCE58\uB178");
Array.prototype.Menu = function() {
    console.log(this);
};
starbucks.Menu();
const mega = [
    "\uD050\uBE0C\uB77C\uB5BC",
    "\uC790\uBABD\uC5D0\uC774\uB4DC",
    "\uCFE0\uD0A4\uD504\uB77C\uD478\uCE58\uB178"
];
mega.Menu();
const americano = {
    name: "\uC544\uBA54\uB9AC\uCE74\uB178",
    price: 3000,
    orderCoffee: function() {
        return `${this.name}\u{B294} ${this.price}\u{C6D0} \u{C785}\u{B2C8}\u{B2E4}.`;
    }
};
const latte = {
    name: "\uB77C\uB5BC",
    price: 4000
};
console.log(americano.orderCoffee());
console.log(americano.orderCoffee.call(latte));
function OrderCoffee(name, price) {
    this.name = name;
    this.price = price;
}
OrderCoffee.prototype.order = function() {
    return `${this.name}\u{B294} ${this.price}\u{C6D0} \u{C785}\u{B2C8}\u{B2E4}.`;
};
const iceAmericano = new OrderCoffee("\uC544\uC774\uC2A4\uC544\uBA54\uB9AC\uCE74\uB178", 1500);
const iceLatte = new OrderCoffee("\uC544\uC774\uC2A4\uB77C\uB5BC", 2000);
console.log(iceAmericano.order());
console.log(iceLatte.order());
//class 문법
class OrderIceCoffee {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    _order() {
        return `${this.name}\u{B294} ${this.price}\u{C6D0} \u{C785}\u{B2C8}\u{B2E4}.`;
    }
    making() {
        return `${this.name}\u{B97C} \u{B9CC}\u{B4DC}\u{B294} \u{C911}...`;
    }
    made() {
        return `${this.name}\u{AC00} \u{B9CC}\u{B4E4}\u{C5B4}\u{C84C}\u{C2B5}\u{B2C8}\u{B2E4}.`;
    }
}
const iceTea = new OrderIceCoffee("\uD788\uBE44\uC2A4\uCEE4\uC2A4", 3000);
const iceGreenTea = new OrderIceCoffee("\uB179\uCC28\uB77C\uB5BC", 4000);
console.log(iceTea._order());
console.log(iceTea.making());
console.log(iceTea.made());
console.log(iceGreenTea._order());
console.log(iceGreenTea.making());
console.log(iceGreenTea.made());
//상속
class SpecialCoffee extends OrderIceCoffee {
    constructor(name, price, size){
        super(name, price);
        this.size = size;
    }
    calling() {
        return `\u{C2A4}\u{D398}\u{C15C} \u{CEE4}\u{D53C} ${this.name} ${this.size}\u{C0AC}\u{C774}\u{C988}\u{B294} ${this.price}\u{C6D0} \u{C785}\u{B2C8}\u{B2E4}.`;
    }
}
const vienaCoffee = new SpecialCoffee("\uC544\uC778\uC288\uD398\uB108", 5000, "tall");
const gingerCoffee = new SpecialCoffee("\uC9C4\uC800\uCEE4\uD53C", 4500, "venti");
console.log(vienaCoffee.calling());
console.log(gingerCoffee.calling());
console.log(vienaCoffee.made());
console.log(gingerCoffee.made());

//# sourceMappingURL=index.2bf495b6.js.map
