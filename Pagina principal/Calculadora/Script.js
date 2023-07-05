let precio= 6000;

let arrayOpciones = [];

const ptotal = document.getElementById("total")
let calcular_opciones = (nombre, checkeado, valor) =>{
    if(checkeado) {
        precio+=Number(valor)
        arrayOpciones.push(nombre)
    }
    if (false) {
        precio
}
console.log(precio)
console.log(nombre)
}
let calcular_extras = (nombre, checkeado, valor) => {
    if(checkeado) {
        precio+=Number(valor)
        arrayOpciones.push(nombre)
    } else{
        precio-=Number(valor)
        arrayOpciones.pop(nombre)
    }
    console.log(precio)
    console.log(nombre)
}
function calcular_total (){
    console.log(precio)
}
