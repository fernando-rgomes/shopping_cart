//quais acoes meu carrinho deve fazer

// -> adicionaritem no carrinho
async function addItem(userCart, item){
    userCart.push(item);
}
// -> deletar item do carrinho 
async function deleteItem(userCart, name){

}
// -> remover um item - diminui um item
async function removeItem(userCart, index){

}

// -> calcular o total
async function calculateTotal(userCart){
    return userCart.reduce((total, item)=> total + item.subtotal(), 0);
}


export {
    addItem, 
    deleteItem,
    removeItem,
    calculateTotal
}