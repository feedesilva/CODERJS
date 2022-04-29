//let stockProductos =
fetch('../../stock.json')
    .then(res => res.json())
    .then(respuesta => console.log(respuesta))