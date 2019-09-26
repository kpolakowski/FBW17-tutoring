// PREREQUISITES
const basket = [];

const shopProducts = [
  {
    productName: "Bread",
    price: 1,
    quantity: 50
  },
  {
    productName: "Beer",
    price: 1.25,
    quantity: 100
  },
  {
    productName: "Champagne",
    price: 25,
    quantity: 10
  },
  {
    productName: "Broccoli",
    price: 2,
    quantity: 20
  },
  {
    productName: "Milk",
    price: 1.1,
    quantity: 50
  },
  {
    productName: "Eggs",
    price: 1.5,
    quantity: 100
  },
  {
    productName: "Blueberries",
    price: 3,
    quantity: 50
  }
];

// PLEASE TRY TO USE ONLY ARRAY METHODS

// DISPLAY THE NAME OF MOST EXPENSIVE PRODUCT IN SHOP
let mostExpensive = shopProducts.sort(function(productA, productB) {
  return productB.price - productA.price;
});
console.log(mostExpensive[0].productName);

// DISPLAY PRODUCTS THAT PRICE IS HIGHER THAN 1 AND SMALLER THAN 2
let filteredProducts = shopProducts.filter(function(product) {
  return product.price >= 1 && product.price <= 2;
});
console.log(filteredProducts);

// DISPLAY THE PRODUCTS THAT HAVE IN THEIR NAMES 2 LETTERS 'E'
let productsWithEE = shopProducts.filter(function(product) {
  return (
    product.productName.indexOf("e") !== -1 &&
    product.productName.indexOf("e") !== product.productName.lastIndexOf("e")
  );
});
console.log(productsWithEE);

// DISPLAY THE VALUE OF ALL PRODUCTS AVAILABLE IN SHOP, CONSIDER THEIR QUANTITY
let totalValue = shopProducts.reduce(function(total, product) {
  return total + product.price * product.quantity;
}, 0);
console.log(totalValue);

// DISPLAY THE AVERAGE PRICE OF PRODUCTS IN SHOP
let averagePrice =
  shopProducts.reduce(function(total, product) {
    return total + product.price;
  }, 0) / shopProducts.length;
console.log(Number(averagePrice).toFixed(2));