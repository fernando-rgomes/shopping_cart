import createItem from "./services/item.js";

const cart = [];
const item1 = await createItem("Bermuda lacoste", 30.99, 1);
const item2 = await createItem("Camisa nike", 40.00, 2);

console.log(item2.subtotal());