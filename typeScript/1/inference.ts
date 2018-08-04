//TRABALHANDO COM INFERÊNCIA DE TIPO

function showLog(message: any){
    console.log(message);
}

showLog("teste");
showLog(10);


/*
Tipos
    String
    number
    boolean
    arrays
    Classe

    "any" -> refere-se a qualquer tipo (String, number, boolean e etc.)
*/


//Array  de String
let test1: Array<string> = ['testando', 'Array'];
console.log(test1);

let test2: [string] = ['Hello']; 
console.log(test2);

//boolean
let isEnable: boolean = true;
