import FileUtil from '../../src/service/FileUtil.js'

test('el metodo leer deberia retornar el contenido del archivo', () => {
    const fileUtil = new FileUtil('./resource/texto.txt');
    expect(fileUtil.leer()).toBe('prueba');
});


test('el metodo leer deberia lanzar una excepcion si no existe el archivo', () => {
    try {
        const fileUtil = new FileUtil('./resource/noexiste.txt');
        fileUtil.leer();
    } catch(e) {
        console.log(e);
        expect(e).toBe('no se encontro el archivo');
    }
});

