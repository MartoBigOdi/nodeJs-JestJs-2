import FileUtil from './service/FileUtil.js';
import CajaProceso from './service/CajaProceso.js'


const fileUtil = new FileUtil('./resource/cajas.json');
//Probamos filUtil
console.log(fileUtil.leer());

const lista = JSON.parse(fileUtil.leer());

const cajaProceso = new CajaProceso(lista);

const prueba = cajaProceso.verificarCaja();

fileUtil.escribir(prueba, './resource/resultado.json')


console.log("*********************** Caja con diferencia ***********************")

prueba.forEach( caja =>{
    console.log(caja)
})

/*
prueba.forEach( caja =>{
    console.log("Caja con diferencia " + caja.codigo)
})
*/

console.log("*********************** Fin del proceso ***************************")




