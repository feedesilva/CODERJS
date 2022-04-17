let preciofinal = 0 ;
//Saludo al usuario
function saludo(){
let ask_name = document.querySelector("#knoww_user");
const form = document.querySelector("#user_form");    
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let name_U = document.querySelector("#nombre");
    const surname_U = document.querySelector("#apellido");
    document.querySelector("#send").value="Enviado";
    if (name_U.value.trim()!=="" && surname_U.value.trim()!==""){
        const hello = document.createElement("h1");
        hello.innerHTML =`<h1>Hola ${name_U.value} ${surname_U.value}! Bienvenido al carrito de compras.</h1>`;
        hello.setAttribute ("class", "title");
        form.appendChild(hello);  
    }
    document.querySelector("#send").setAttribute("id", "disabled"); //Deshabilito el botón//
})
}
saludo();
show_cat();

const data = JSON.parse(localStorage.getItem("Shop"));
const tienda = new Tienda ([]);
if(tienda){
  tienda= new Tienda(data);
}
else{
  tienda = new Tienda([])
}

//mostrar botones de categorías//
function show_cat (){
  let container = document.querySelector("#show");
  categorias.forEach((cat)=>{
    const btn = document.createElement("button");
    btn.setAttribute("class", "comprar btn-primary btn agregar");  
    btn.innerHTML=cat.nombre;
    btn.addEventListener("click", ()=>
     show_element (cat))
    container.appendChild(btn);

})

}

function show_element(group){
  //filtro los productos por categoria//
  const choose = product_filter(group.id);
  //tomo el div para asignar posicion especifica al espacio para los productos/
  let posicion = document.querySelector("#big_space");
  //creo el espacio para los productos a comprar//
  let contenedor = document.getElementById("mainContainer");
  if(contenedor===null)
  {
    contenedor = document.createElement("div");
    contenedor.setAttribute("id", "mainContainer");
    posicion.appendChild(contenedor);
  }
  
  //Agrego los productos al espacio creado//
  let nodoProductos = document.getElementById("productos");
  if(nodoProductos===null)
  {
    nodoProductos = document.createElement("div");
    nodoProductos.setAttribute("id", "productos");
    contenedor.appendChild(nodoProductos);
  }
  else 
  {
    nodoProductos.innerHTML="";
  }
 //a cada producto de la categoria elegida le asigno su informacion//
 let cadena ='';
 choose.forEach((element)=>{
   cadena+=product_information(element);
   nodoProductos.innerHTML=cadena;
 });
  actual_shop();
}

function actual_shop(){
  let container = document.querySelector("#mainContainer");
  let myShopp = document.querySelector("#shopp");
  if(!myShopp){
    myShopp = document.createElement("div");
    myShopp.setAttribute("id", "shopp");
      container.appendChild(myShopp);
  }
 
}
 


function product_information(product){
  return `
        <div class= "group">
        <div class="productWrapper">
        <div class="mainProductInfo">
          <div class="productImage">
            <img class ="imagen" src="${product.img}">
          </div>
          <div class="productInfo">
            ${product.nombre}<br>
            ${product.precio}
          </div>
          </div>
          <div class="productBtn">
            ${btn_prod(product)}
          </div>
          </div>
          </div>`
}

function btn_prod(prod){
  return `<button class="comprar btn-primary btn" onclick="addtoShopp (${prod.id})">Agregar al Carrito</button>`
}

function addtoShopp(idProduct){
  let products = stockProductos.map(el=>el.id);
  let index = products.findIndex(el=>el===idProduct);
  let product = stockProductos[index];
  tienda.addProducto(product);
  refreshShopp();
}

function refreshShopp(){
  let container = document.querySelector("#shopp");
  container.innerHTML="";
  let prods = tienda.productos;
  let newContainer = document.createElement("div");
  newContainer.setAttribute("style", "display:flex; flex-flow: column wrap");
  prods.forEach(product => {
    let nodoLi = document.createElement("div");
    nodoLi.innerHTML = `${product.nombre} - ${product.precio} <br>` ;
    newContainer.appendChild(nodoLi);
  })
  container.appendChild(newContainer);
  tienda.save();
  let final_price = document.createElement("h3");
  final_price.innerHTML = `Precio final: ${preciofinal} <br>`;
  newContainer.appendChild(final_price)
  let buy_btn = document.createElement("button");
  buy_btn.innerText = "Finalizar compra"
  buy_btn.setAttribute("class", "comprar btn-primary btn");
  buy_btn.style = ("margin-top:20px")
  newContainer.appendChild(buy_btn);
}

function product_filter(idgroup){
  return  stockProductos.filter(stockProductos=>stockProductos.categoria_producto===idgroup);
}

