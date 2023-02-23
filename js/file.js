// Створити класс Сar який буде містити поля brand,model,price. додати до класу
// метод який повертає ціну та метод який може дозволити змінювати ціну.
// додати приватну властивість engine
// додати до неї гетери та сетери (переглянути класс Worker який ми писали на уроці)

class Car {
    #engine;

    constructor({brand, model, price, engine}){
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.#engine = engine;
    }
    getFullPrice(){
        return `${this.price} ${this.price}`;
    }
    changePrice(newPrice){
        this.price = newPrice;
    }
}
const mercedes = new Car({
    brand: 'Mercedes',
    model: 'c63',
    price: 100000,
    engine: 'v12',
});
mercedes.changePrice(150000);

console.log(mercedes.price);

// задача яку обіцяв

const arr = [1, 2, 3, 4, 5];

Array.prototype.mnoz = function (n) {
  return this.map(function (number) {
    return number * n;
  });
};

console.log(arr.mnoz(2));

// спробуйте тепер використовувати в інших файлах функцію mnoz якби ви зазвичай використовували якийсь метод масиву
// вказуючи параметром на яке число множити елементи
// const arr = [1, 2, 3, 4, 5].mnoz(2);
