

const botonNombre = document.createElement("button");
botonNombre.innerText = "Nombre";
botonNombre.addEventListener("click",()=>{
let entrada = document.getElementById ("name");
let valorEntrada = entrada.value;

if(valorEntrada.trim().length==0){
    alert("No has escrito nada");
}else{
    alert("Hola->",valorEntrada)
}
document.body.appendChild(botonNombre);
})
