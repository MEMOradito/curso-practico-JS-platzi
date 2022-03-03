//Código del cuadrado

console.group("Cuadrado");
//const ladoCuadrado = 5; 
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm"); 
function perimetroCuadrado(lado){
    return lado * 4; 
}
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");
function areaCuadrado(lado){
   return lado * lado;
}
//console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

//Código del triángulo 

console.group("Triángulo");
//const ladoT1 = 6; 
//const ladoT2 = 6; 
//const baseT3 = 4; 
//const alturaT = 5.5;

//console.log("Los lados del triángulo miden: " 
  // + ladoT1 + "cm, " 
  // + ladoT2 + "cm, " 
  // + baseT3 + "cm "
//);
//console.log("Su altura es de: " + alturaT + " cm");

function perimetroTriangulo(lado1,lado2,baseT){
    return lado1 + lado2 + baseT; 
} 
// console.log("El perímetro del triángulo es de: " + perimetroTriangulo + " cm");

function areaTriangulo(baseT, altura){
    return (baseT * altura)/2; 
} 

//const areaTriangulo = (baseT3 * alturaT)/2 ; 
//console.log("El área del triángulo es de: " + areaTriangulo +" cm^2");

console.groupEnd();

// Código del circulo 

console.group("Círculo");

//const radio = 4; 
//const diametro = radio * 2; 
const PI = Math.PI;
function diametro(radio){
    return radio *2;
}
//const circunferencia = diametro * PI;
//const areaCirculo = PI * (radio * radio); 
function circunferencia(radio){
    const diametro = circunferencia(radio);
    return diametro * PI;
}
function areaCirculo (radio){
    return (radio * radio) * PI;
}
//console.log("El radio y el diametro consecutivamente del circulo son: " 
  //+ radio +"cm " 
  //+ diametro + "cm"
///);
//console.log("Pi es: " + PI)
//console.log("La circunferecnia del circulo mide: " + circunferencia + " cm");
//console.log("El área del circulo es de: " + areaCirculo + " cm^2"); 

console.groupEnd();

//Aquí interactuamos con el HTML 

//Cuadrado
function calcPerCuad(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcAreCuad(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Triángulo
function calcPerTri(){
    const input = document.getElementById("inputTriangulo","inputLadosT");
    const value = input,value;

    const perimetroT = perimetroTriangulo(value);
    alert(perimetroT);
}

//Circulo 
function calcPerCir(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetroC = perimetroCirculo(value);
    alert(perimetroC);
}

function calcAreCir(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const areaC = areaCirculo(value);
    alert(areaC);
}
