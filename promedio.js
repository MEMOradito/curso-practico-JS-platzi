//const lista1= [
 //   100, 200, 300, 500,
//];

function calculoMediaAri(lista){
   //let sumaLista = 0;                        // promedio con for
   //for(let i =0; i < lista.length; i++){
   //    sumaLista = sumaLista + lista[i];
   //}
   const sumaLista = lista.reduce(              //promedio con reduce
       function(valorAcumulado = 0, newElement){
           return valorAcumulado + newElement;
       }
   );
    const promedioLista = sumaLista/lista.length;
    return promedioLista;
}