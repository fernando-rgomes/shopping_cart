import * as cartService from "./services/cart.js"
import createItem from "./services/item.js";

const myCart = [];
const myWishList = [];
const item1 = await createItem("Bermuda lacoste", 30.99, 1);
const item2 = await createItem("Camisa nike", 40.00, 2);

console.log("Welcome to Shopping Cart!\n")
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);
// await cartService.deleteItem(myCart, item1.name)
// await cartService.deleteItem(myCart, item)



await cartService.calculateTotal(myCart);