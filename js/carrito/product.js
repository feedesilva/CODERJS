//let stockProductos =
fetch (`stock.json`, {
    method: 'GET'
  })
.then((result) =>result.json())
.then((json) => {
    if(json.success){
        alert("GENIAL");
    }
    else{
        alert("MAL");
    }
})
.catch(()=>{
    alert("ERROR PROMIS");
});