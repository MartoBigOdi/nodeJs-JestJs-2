import CajaProceso from '../../src/service/CajaProceso'

test('Lista de cajas deberia devolver las que tienen diferencias entre sus valores y los importes de los comprobantes ', () => {
    const lista = [
        {"codigo": 1, "importe": 100, "valores": [500,300,200], "comprobantes": [{"id":1,"tipo":"I","importe":1000}] },
        {"codigo": 2, "importe": 200, "valores": [500,300,200],"comprobantes": [{"id":1,"tipo":"I","importe":1000}] },
        {"codigo": 3, "importe": 1000, "valores": [500,300,200], "comprobantes": [{"id":1,"tipo":"I","importe":1000}] },
        {"codigo": 4, "importe": 500, "valores": [500,300,100],"comprobantes": [{"id":1,"tipo":"I","importe":1000}] }
    ]
    const cajaProceso = new CajaProceso(lista);
    //Validamos que el length de la lista que tiene las cajas con diferencia sea 1
    expect(cajaProceso.verificarCaja().length).toBe(1);
});