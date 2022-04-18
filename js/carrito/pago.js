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
    if(card.classList.contains('active'))   
    
        card.classList.remove("active")
    
}
//Creo opciones de mes//
let selectMonth= document.querySelector("#selectMes");
let mes = 0;
for(let i = 1; i<= 12; i++){
    let option = document.createElement("option");
    option.value = i;
    option.innerText=i;
    mes = i;
    selectMonth.appendChild(option);
}
let month = document.querySelector("#month");
month.addEventListener('change', () => {
    month.textContent = mes;
})


//Creo opciones de Año//
let selectYear = document.querySelector("#selectYear");
const actualYear = new Date().getFullYear();
for(let i = actualYear; i<= actualYear+10; i++){
    let option = document.createElement("option");
    option.value = i;
    option.innerText=i;
    selectYear.appendChild(option);
}

//Input numero tarjeta//
let div_img = document.querySelector("#logo_marca");
let inputNum = document.querySelector("#inputNumero")
inputNum.addEventListener("keypress", (e)=>{
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
})




//Input Nombre//
let inputName = document.querySelector("#inputNombre")
inputName.addEventListener("keypress", (e)=>{
    e.preventDefault();
    let codigoinput = e.keyCode;
    console.log(codigoinput);
    let valorinput = String.fromCharCode(codigoinput);
    console.log(valorinput);
    valorParsed = parseInt(valorinput);
    if(!valorParsed){
    inputName.value += valorinput;
        }
})

//Input numero cvv//
let inputCvv = document.querySelector("#inputCvv")
inputCvv.addEventListener("keypress", (e)=>{
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
})

//Pulso enviar//
let container_all = document.querySelector("#contenedor")
let send = document.querySelector("#btn_enviar");
send.addEventListener("click", () => {
    container_all.innerHTML = `<h3> PRONTO TENDRA NOVEDADES </h3>`
})
    


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


