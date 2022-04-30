//ROTACION TARJETA//
const card = document.querySelector("#card");
const btn = document.querySelector("#abrir_form");

card.addEventListener('click', ()=>{
    card.classList.toggle('active');
    console.log(card.classList.contains("active"));
});

//ABRIR FORM//
const pay_form = document.querySelector("#form_card");
btn.addEventListener("click", () =>{
    btn.classList.toggle("active");
    pay_form.classList.toggle("active");
})

//Vuelvo la tarjeta al frente//
function mostrarFrente(){
    if(card.classList.contains('active')) { 
        card.classList.remove("active");
    }
}

//Vuelvo la tarjeta Trasera//
function mostrarBack(){
    if(!card.classList.contains('active')) { 
        card.classList.add("active");
    }
}

//Creo opciones de mes//
let selectMonth= document.querySelector("#selectMes");
let mes = 0;
let card_month = document.querySelector("#month");

for(let i = 1; i<= 12; i++){
    let option = document.createElement("option");
    option.value = i;
    option.innerText=i;
    mes = i;
    selectMonth.appendChild(option);
}
selectMonth.addEventListener("change", () =>{
    mostrarFrente();
    selectMonth.value <= 9 ? card_month.innerText = "0 "+selectMonth.value :  card_month.innerText = selectMonth.value;
})

//Creo opciones de Año//
let selectYear = document.querySelector("#selectYear");
const actualYear = new Date().getFullYear();
let card_year = document.querySelector("#year");
for(let i = actualYear; i<= actualYear+10; i++){
    let option = document.createElement("option");
    option.value = i;
    option.innerText=i;
    selectYear.appendChild(option);
}
selectYear.addEventListener("change", ()=>{
    mostrarFrente();
    card_year.innerText = selectYear.value.slice(2); //Paso la seleccion de año a la tarjeta cortando los primeros 2 valores
})

//Input numero tarjeta//
let div_img = document.querySelector("#logo_marca");
let card_number = document.querySelector("#number");
let inputNum = document.querySelector("#inputNumero")
inputNum.addEventListener("keypress", (e)=>{
    mostrarFrente();
    e.preventDefault();
    let codigoinput = e.keyCode;
    console.log(codigoinput);
    let valorinput = String.fromCharCode(codigoinput);
    console.log(valorinput);
    valorParsed = parseInt(valorinput);
    if(valorParsed || codigoinput === 48){
        if(inputNum.value.length < 19){
            let i = inputNum.value.length+1;
            if(i%5!==0){
                console.log(i);
                inputNum.value += valorParsed;
            }
            else{
                inputNum.value += ' ' + valorParsed;
            }
        }
    }
    card_number.innerText = inputNum.value;

//Defino que imagen se muestra en la tarjeta//
    if(inputNum.value[0] ==4){
        div_img.innerHTML = '';
        const card_img = document.createElement("img");
        console.log("visa");
        card_img.src = "../assets/visa.png";
        div_img.appendChild(card_img);
    }
    else{
    if(inputNum.value[0] == 3){
        div_img.innerHTML = ''; 
        const card_img = document.createElement("img");
        console.log("MASTER");
        card_img.src = "../assets/master.png";
        div_img.appendChild(card_img);
    }
}
})

//Input Nombre//
let inputName = document.querySelector("#inputNombre")
inputName.addEventListener("keypress", (e)=>{
    mostrarFrente();
    e.preventDefault();
    let codigoinput = e.keyCode;
    console.log(codigoinput);
    let valorinput = String.fromCharCode(codigoinput);
    console.log(valorinput);
    valorParsed = parseInt(valorinput);  //Discrimino solo numeros
    valorParsed  || (inputName.value += valorinput); //OP OR, si no es un número lo tomo//
    let card_name = document.querySelector("#name");
    card_name.innerText = inputName.value;
})

//Input numero cvv//
let inputCvv = document.querySelector("#inputCvv");
let card_cvv = document.querySelector("#cvv");
inputCvv.addEventListener("keypress", (e)=>{
    mostrarBack();
    e.preventDefault();
    let codigoinput = e.keyCode;
    console.log(codigoinput);
    let valorinput = String.fromCharCode(codigoinput);
    console.log(valorinput);
    valorParsed = parseInt(valorinput);
    if(valorParsed){
        if(inputCvv.value.length <3){ //LIMITO A 3 DIGITOS
    inputCvv.value += valorParsed;
        }
    }
    card_cvv.innerHTML = inputCvv.value;     //Agrego a tarjeta el cvv
})

//Pulso enviar//
let container_all = document.querySelector("#contenedor")
let send = document.querySelector("#btn_enviar");
send.addEventListener("click", () => {
    container_all.innerHTML = `<h3> PRONTO TENDRA NOVEDADES </h3>`
})

//Muestro precio final//
let div_precio = document.querySelector("#precio");
let label = document.createElement("label");
label.innerText = preciofinal;
console.log(label);
console.log(preciofinal);
div_precio.appendChild(label);

//Funcion de boton de volver al carrito//
function volver(){
let container = document.querySelector("#back");
let back = document.createElement("button");
back.setAttribute("class", "comprar btn-primary btn agregar ")
back.innerText = "Volver"
    back.addEventListener("click", ()=>{
        location = "./carrito.html";
    })
container.appendChild(back)
}

volver();


