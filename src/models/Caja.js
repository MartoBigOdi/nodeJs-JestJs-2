class Caja {

    constructor(codigo,importe,valores, comprobantes) {
        this.codigo = codigo;
        this.importe = importe;
        this.valores = valores;
        this.comprobantes = comprobantes;
    }

    calcularTotalesDeValores() {
        return this.valores.reduce((sum,valor) => sum+valor,0);
    }

    hayDiferencia() {
        return this.calcularTotalesDeValores() !== this.comprobantes[0].importe;
    }

    /*
    obtenerImporte(){
        return this.comprobantes.reduce((sum, comp) => comp.tipo === 'I'?sum+comp.importe:sum-comp.importe,0);
        //return suma;
    }
    */

}

export default Caja;