//let stockProductos =
let stockProductos =  fetch('../../stock.json')
    .then(res => res.json())
    .then(productos => productos)