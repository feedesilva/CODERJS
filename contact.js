let form = document.querySelector("#my_form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let notification = document.createElement("h1");
    notification.innerText = "ENVIADO";
    notification.setAttribute("class", "title")
    form.innerHTML = "";
    form.appendChild(notification);
})