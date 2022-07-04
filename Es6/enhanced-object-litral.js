// function createBookShop(inventory) {
//   return {
//     inventory: inventory,
//     inventoryValue: function () {
//       return this.inventory.reduce((total, book) => total + book.price, 0);
//     },
//     priceForTitle: function (tital) {
//       return this.inventory.find((book) => book.tital === tital).price;
//     },
//   };
// }

function createBookShop(inventory) {
  return {
    inventory, // 1
    inventoryValue() {
      //2
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(tital) {
      return this.inventory.find((book) => book.tital === tital).price;
    },
  };
}
const inventory = [
  { tital: "ramayan", price: 1000 },
  { tital: "gita", price: 500 },
];

const bookShop = createBookShop(inventory);
console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle("ramayan"));
