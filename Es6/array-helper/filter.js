/* 
        1.filter method
*/

let products = [
  { name: "cucumber", type: "vegetable", quantity: 0, price: 1 },
  { name: "banana", type: "fruits", quantity: 10, price: 15 },
  { name: "celery", type: "vegetable", quantity: 30, price: 9 },
  { name: "orange", type: "fruits", quantity: 3, price: 5 },
];

// let filterProduct = [];
// for (let i = 0; i < products.length; i++) {
//   if (products[i].type == "fruits") {
//     filterProduct.push(products[i]);
//   }
// }

filterProduct = products.filter((product) => {
  return product.type == "fruits";
});

console.log(filterProduct);

// type is "vegatable", quantity is greater than 0, price is less than 10;

let filterData = products.filter(function (product) {
  return (
    product.type === "vegetable" && product.quantity > 0 && product.price < 10
  );
});
console.log(filterData);
