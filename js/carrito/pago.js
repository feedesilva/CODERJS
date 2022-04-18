const card = document.querySelector("#card");
const btn = document.querySelector("#abrir_form");
card.addEventListener('click', ()=>{
    card.classList.toggle('active');
    console.log(card.classList.contains("active"));
});
btn.addEventListener("click", () =>{
    btn.classList.toggle("active");
})

/*
function volver(){
let container = document.querySelector("#back");
let back = document.createElement("button");
back.innerText = "Volver"
    back.addEventListener("click", ()=>{
        location = "./carrito.html";
    })
container.appendChild(back)
}
*/

/*//Declaro variables
let banco;
let cantidad_cuotas;
let subtotal;
let despacho = ' ';
let precioFinal = 0;
let precio_resta = 0;
let precioBuscado = 0;

//Elijo con que tarjeta pago
function tarjeta (){
    banco = prompt("Elegir tarjeta (Visa, Master)").toLowerCase();
    console.log ("Tarjeta elegida " + banco);
    if (banco === "Visa" || banco==="Master"){
       return banco;
    }
}
//Selecciono cantidad de cuotas y visualizo intereses
function cuotas (medio){
    if (medio == "visa"){
        alert("1 Cuota sin interés, 3 con 10%, 6 con 20%");
        while (isNaN(cantidad_cuotas)){
            cantidad_cuotas = parseInt(prompt("Elija cantidad de cuotas"));
            if(!isNaN(cantidad_cuotas)){
                if (cantidad_cuotas === 1){
                    subtotal = precioFinal;
                    alert("El precio final es $" + subtotal);
                    console.log("1 cuota");
                }
                if (cantidad_cuotas === 3){
                    subtotal = precioFinal*1.1;
                    alert("El precio final es $" + subtotal);
                    console.log("3 cuotas");
                }
                if (cantidad_cuotas === 6){
                    subtotal = precioFinal*1.2;
                    alert("El precio final es $" + subtotal);
                    console.log("6 cuotas");
                }
            }
            
        }
    }
    else if (medio == "master"){
        alert ("Hasta 3 cuotas sin interés. 6 con 15% y 12 con 30%");
        while (isNaN(cantidad_cuotas)){
            cantidad_cuotas = parseInt(prompt("Elija cantidad de cuotas"));
            if(!isNaN(cantidad_cuotas)){
                if (cantidad_cuotas <= 3){
                    subtotal = precioFinal;
                    alert("El precio final es $" + subtotal);
                    console.log("1 a 3 cuotas");
                }
                if (cantidad_cuotas === 6){
                    subtotal = precio*1.15;
                    alert("El precio final es $" + subtotal);
                    console.log("6 cuotas");
                }
                if (cantidad_cuotas === 12){
                    subtotal = precioFinal * 1.3;
                    alert("El precio final es $" + subtotal);
                    console.log("12 cuotas");
                }
            }
            
        }
    }
    return subtotal;
}
//selección de entrega
function envio (entrega){
    alert ("Seleccione tipo de entrega");
    alert ("El costo de envío es $300");
    despacho = prompt("Envío a domicilio (ingrese 'envio') o Retiro en tienda (ingrese 'retiro')");
    console.log ("seleccionó " + despacho);
    if (despacho === "envio"){
        entrega+=300;
        alert("El costo total es: $"+entrega);
    }
    if(despacho==="retiro"){
        alert("El costo total es: $"+entrega);
    }
}


menu();
console.log ("precio Final "+precioFinal);
tarjeta();
cuotas(banco);
envio(subtotal);
*/




