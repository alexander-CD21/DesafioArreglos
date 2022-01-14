//Siempre hambriento
function siempreHambrientos(arr) {
    let comida=[];
    for(let i=0; i<arr.length; i++){
        if(arr[i]==="comida"){
            comida.push(arr[i]);
        }
    }
    if(comida.length>0){
        console.log("Delicioso");
    }
    else{
        console.log("Tengo hambre");
    }

}
siempreHambrientos([3,12,1,5,5,5,5]);

//Filtro paso alto 
function highPass(arr,custoff) {
    let filteredArr=[]; 
    for(let i=0; i<arr.length;i++){
        if(arr[i]>custoff){
            filteredArr.push(arr[i]);
        }
    }  
    return  filteredArr;
}
let alto=highPass([2,4,6,34,8],5);
console.log(alto);
//Mejor que un Promedio
function betterThanAverage(arr) {
    let sum = 0;
    let promedio;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    promedio=sum/arr.length;
    let count = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>promedio){
            count++;
        }
    }
    return count;
}
let result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta
//Arreglo invertido 
function reverse(arr) {
    
    let numero=0;
    let longitud=arr.length-1;

    while(numero<longitud){

        arbitraria=arr[numero];
        arr[numero]=arr[longitud];
        arr[longitud]=arbitraria;
        numero++;
        longitud--;
    }
    return arr;
}
let dato=reverse(["a","b","c","d","e"]);
console.log(dato);

function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    let fibArr = [0, 1];
    while(fibArr.length<n){
        let previo=fibArr[fibArr.length-1];
        let previo1=fibArr[fibArr.length-2];
        fibArr.push(previo + previo1);
    }
    return fibArr;
}
   
let res = fibonacciArray(10);
console.log(res); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

