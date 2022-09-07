import Caja from '../../src/models/Caja';


// caso de prueba, buscamos que haya diferencia entre la suma de los valores y el importe del comprobante
test('La suma de valores deberia dar el importe del comprobante',()=>{
    const caja = new Caja(1,100,[300, 500, 200],[{id:1,tipo:"I",importe:1000}]);
    expect(caja.hayDiferencia()).toBe(false);
})


