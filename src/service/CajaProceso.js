import Caja from '../models/Caja.js'

class CajaProceso {
    listaCajas = [];

    constructor(listaCajas) {
        this.listaCajas = listaCajas;
    }

    verificarCaja() {
        const rta = this.listaCajas.filter(
            caja => { 
                const ca = new Caja(caja.codigo,caja.importe,caja.valores,caja.comprobantes) ;
                return ca.hayDiferencia();
            }
        );
        return rta;
    }
}

export default CajaProceso;