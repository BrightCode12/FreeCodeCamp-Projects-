const cartContainer = document.getElementById("cart-container");
const productsContainer = document.getElementById("products-container");
const dessertCards = document.getElementById("dessert-card-container");

const cartBtn = document.getElementById("cart-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");

const totalNumberOfItems = document.getElementById("total-items");
const cartSubTotal = document.getElementById("subtotal");
const cartTaxes = document.getElementById("taxes");
const cartTotal = document.getElementById("total");

const showHideCartSpan = document.getElementById("show-hide-cart");
let isCartShowing = false;
const products = [];

class Dessert {
	constructor(id, name, price, category) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.category = category;
    }
    
}

products[
    new Dessert(1, "Vanilla Cupcakes (6 Pack)", 12.99, "Cupcake"),
    new Dessert(2, "French Macaron", 3.99, "Macaron"),
    new Dessert(3, "Pumpkin Cupcake", 3.99, "Cupcake"),
    new Dessert(4, "Chocolate Cupcake", 5.99, "Cupcake"),
    new Dessert(5, "Chocolate Pretzels (4 Pack)", 10.99, "Pretzel"),
    new Dessert(6, "Strawberry Ice Cream", 2.99, "Ice Cream"),
    new Dessert(7, "Chocolate Macarons (4 Pack)", 9.99, "Macaron"),
    new Dessert(8, "Strawberry Pretzel", 4.99, "Pretzel"),
    new Dessert(9, "Butter Pecan Ice Cream", 2.99, "Ice Cream"),
    new Dessert(10, "Rocky Road Ice Cream", 2.99, "Ice Cream"),
    new Dessert(11, "Vanilla Macarons (5 Pack)", 11.99, "Macaron"),
    new Dessert(12, "Lemon Cupcakes (4 Pack)", 12.99, "Cupcake")
];