import FileUtil from '../../src/service/FileUtil.js'
import CajaProceso from '../../src/service/CajaProceso'

test('El metodo leer deberia retornar el contenido del archivo', () => {
    const fileUtil = new FileUtil('./resource/texto.txt');
    expect(fileUtil.leer()).toBe('prueba');
});


test('el metodo leer deberia lanzar una excepcion si no existe el archivo', () => {
    try {
        const fileUtil = new FileUtil('./resource/noexiste.txt');
        fileUtil.leer();
    } catch(e) {
        console.log(e);
        expect(e).toBe('No se encontro el archivo');
    }
});


//Test case que valida que escriba el json correctamente 
test('El metodo leer deberia retornar el contenido del archivo', () => {
    const lista = [
        {"codigo": 1, "importe": 100, "valores": [500,300,200], "comprobantes": [{"id":1,"tipo":"I","importe":1000}] },
        {"codigo": 2, "importe": 200, "valores": [500,300,200],"comprobantes": [{"id":1,"tipo":"I","importe":1000}] },
        {"codigo": 3, "importe": 1000, "valores": [500,300,200], "comprobantes": [{"id":1,"tipo":"I","importe":1000}] },
        {"codigo": 4, "importe": 500, "valores": [500,300,100],"comprobantes": [{"id":1,"tipo":"I","importe":1000}] }
    ]
    
    try{
        const fileUtil = new FileUtil();
        const cajaProceso = new CajaProceso(lista);
        const prueba = cajaProceso.verificarCaja();
        fileUtil.escribir(prueba, './resource/resultadoTest.json')
        expect(prueba).toEqual([
            {
                "codigo": 4,
                "importe": 500,
                "valores": [
                    500,
                    300,
                    100
                ],
                "comprobantes": [
                    {
                        "id": 1,
                        "tipo": "I",
                        "importe": 1000
                    }
                ]
            }
        ]);
    } catch(e) {
        console.log(e);
        expect(e).toBe('No se encontro el archivo');
    }
});


//Test case que valida que escriba el json correctamente 
test('El metodo leer deberia retornar el mensaje de error', () => {
    const lista = [
        {"codigo": 1, "importe": 100, "valores": [500,300,200], "comprobantes": [{"id":1,"tipo":"I","importe":1000}] },
        {"codigo": 2, "importe": 200, "valores": [500,300,200],"comprobantes": [{"id":1,"tipo":"I","importe":1000}] },
        {"codigo": 3, "importe": 1000, "valores": [500,300,200], "comprobantes": [{"id":1,"tipo":"I","importe":1000}] },
        {"codigo": 4, "importe": 500, "valores": [500,300,100],"comprobantes": [{"id":1,"tipo":"I","importe":1000}] }
    ]
    
    try{
        const fileUtil = new FileUtil();
        const cajaProceso = new CajaProceso(lista);
        const prueba = cajaProceso.verificarCaja();
        fileUtil.escribir(prueba, '')
        expect(prueba).toEqual([
            {
                "codigo": 4,
                "importe": 500,
                "valores": [
                    500,
                    300,
                    100
                ],
                "comprobantes": [
                    {
                        "id": 1,
                        "tipo": "I",
                        "importe": 1000
                    }
                ]
            }
        ]);
    } catch(e) {
        console.log(e);
        expect(e).toBe('No se encontro el archivo');
    }
});