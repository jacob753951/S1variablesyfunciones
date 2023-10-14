

// function addTwoNombers(fistNumber, secondNumber) {
//    let result = fistNumber + secondNumber;
//    return result;
// }

// let suma1 = addTwoNombers(6,9);

// console.log(suma1);

// function substracTwoNombers(fistNumber, secondNumber) {
//     let result = fistNumber - secondNumber;
//     return result;
//  } 
//  let resta1 = substracTwoNombers(8,20)
//  console.log(resta1) 

//  function dividedbyTwoNombers(fistNumber, secondNumber) {
//     let result = fistNumber / secondNumber;
//     return result;
//  } 
//  let divsion1 = dividedbyTwoNombers(520,20)

//  console.log(divsion1) 

//  function multiplyTwoNombers(fistNumber, secondNumber) {
//     let result = fistNumber / secondNumber;
//     return result;
//  } 
//  let multiplicacion1  = multiplyTwoNombers (2,20)

//  console.log(multiplicacion1) 


 function esParOImpar(numero) {
    if (numero % 2 === 0) {
      return "Par";
    } else {
      return "Impar";
    }
  }
  
  let numeroIngresado = prompt("Por favor, ingrese un número:");
  let numero = parseInt(numeroIngresado);
  
  if (!isNaN(numero))
   { 
    let resultado = esParOImpar(numero);
    console.log(`El número ${numero} es ${resultado}.`);
  } 
  else {
    console.log("Por favor, ingrese un número válido.");
  }