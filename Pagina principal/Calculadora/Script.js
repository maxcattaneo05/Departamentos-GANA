let expensas= 6000;
let servicios_extra= 0;
let opcion_precio= 0;
let precio_total= 0;
let opcion_nombre

let arrayOpciones = [];


let calcular_opciones = (checkeado, nombre, valor) =>{
    if(checkeado) {
        opcion_precio=Number(valor)
        opcion_nombre= (nombre)
    }
console.log(opcion_precio)
console.log(nombre)
}

let calcular_extras = (nombre, checkeado, valor) => {
    if(checkeado) {
        servicios_extra+=Number(valor)
        arrayOpciones.push(nombre)
    } else{
        servicios_extra-=Number(valor)
        arrayOpciones.pop(nombre)
    }
    console.log(servicios_extra)
    console.log(nombre)
}

function calcular_total (){
    if(opcion_precio == 0) {
        console.log("Debe elegir una opcion")
        document.getElementById("texto_error").innerHTML="⚠️ Debe elegir una opción de departamento ⚠️"
    } else{
        precio_total= opcion_precio + expensas + servicios_extra
        
        console.log("Opción elegida:"+opcion_nombre+":$"+opcion_precio);
        console.log("Extras elegidos:"+arrayOpciones+":$"+servicios_extra);
        console.log("Expensas:$"+expensas);
        console.log("Total:$"+precio_total);
        document.getElementById("texto_error").innerHTML=""
        document.getElementById("texto_opcion").innerHTML="Opción elegida: "
        document.getElementById("texto_expensas").innerHTML="Extras elegidos: "
        document.getElementById("texto_extras").innerHTML="Expensas: "
        document.getElementById("texto_").innerHTML="Total:"
        document.getElementById("total_opcion").innerHTML=opcion_nombre+": $"+opcion_precio;
        document.getElementById("total_expensas").innerHTML=arrayOpciones+": $"+servicios_extra;
        document.getElementById("total_extras").innerHTML="$"+expensas;
        document.getElementById("total_").innerHTML="$"+precio_total+" por mes"

    }
}

