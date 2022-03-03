
function calculoMediaAri(lista){
    const sumaLista = lista.reduce(    
        function(valorAcumulado = 0, newElement){
            return valorAcumulado + newElement;
        }
    );
     const promedioLista = sumaLista/lista.length;
     return promedioLista;
 }


const lista1 = [
    100,200,600,2000,
];
const mitadLista1 = parseInt(lista1.length / 2); 

function esPar(numerito){

    if(numerito % 2 === 0) {
        return true;
    }else{
        return false;
    
    }
}

let mediana;

if (esPar(lista1.length)){

    const element1 = lista1[mitadLista1 - 1];
    const element2 = lista1[mitadLista1];
    const promedioElements = calculoMediaAri([element1, element2]);
    mediana = promedioElements;

} else{
    mediana = lista1[mitadLista1];
}