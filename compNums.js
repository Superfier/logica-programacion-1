const prompt = require("prompt-sync")();

function pedirNumero(mensaje){
    while(true){
        let valor =parseInt(prompt(mensaje));
        if(!isNaN(valor))
            return valor;
    }
    console.log("Error: Entrada inválida. Sólo numeros")
}

let num1 = pedirNumero("Ingresa el num 1: ");
let num2 = pedirNumero("Ingresa el num 2: ");
let num3 = pedirNumero("Ingresa el num 3: ");

if (num1===num2 && num2===num3){
    console.log("Todos los números son iguales" +num1 );
}else {
    let mayor =Math.max(num1, num2, num3);
    console.log("el numero mayor es: "+ mayor);
}