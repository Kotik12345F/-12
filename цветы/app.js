let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Букет белых роз',
        image: 'roz.jpg',
        price: 6300
    },
    {
        id: 2,
        name: 'Алые розы',
        image: 'roz1.jpeg',
        price: 7800
    },
    {
        id: 3,
        name: 'Карзинка пышных роз',
        image: 'karz.jpg',
        price: 22300 
    },
    {
        id: 4,
        name: 'Букет роз и одуванчиков',
        image: 'karz1.jpg',
        price: 17000
    },
    {
        id: 5,
        name: 'Ирис и розы',
        image: 'karz2.jpg',
        price: 13000
    },
    {
        id: 6,
        name: 'Пушистые розы и сирень',
        image: 'karz3.jpg',
        price: 10000
    },

    {
        id: 7,
        name: 'Алые тюльпаны',
        image: 'karz4.jpg',
        price: 18500
    },
    {
        id: 8,
        name: 'Подсолнух',
        image: 'roz2.jpeg',
        price: 40000
    },
    {
        id: 9,
        name: 'Сладкий букет',
        image: 'karz5.jpg',
        price: 33090
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Заказать</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

