class CuentaBancaria {
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    calcularITF(monto) {
        return monto * 0.00005;  
    }

    depositar(monto) {
        const itf = this.calcularITF(monto);
        this.saldo += (monto - itf);
        return `Depósito: $${monto}<br>ITF (0.005%): $${itf}<br>Nuevo saldo: $${this.saldo}`;
    }

    retirar(monto) {
        const itf = this.calcularITF(monto);
        if (monto + itf <= this.saldo) {
            this.saldo -= (monto + itf);
            return `Retiro: $${monto}<br>ITF (0.005%): $${itf}<br>Nuevo saldo: $${this.saldo}`;
        } else {
            return 'Fondos insuficientes para realizar esta operación.';
        }
    }

    verSaldo() {
        return `Saldo actual de ${this.titular}: $${this.saldo}`;
    }
}

const cuenta1 = new CuentaBancaria('Carlos', 500);

function depositar() {
    const monto = parseFloat(document.getElementById('monto').value);
    if (!isNaN(monto) && monto > 0) {
        const resultado = cuenta1.depositar(monto);
        document.getElementById('resultado').innerHTML = resultado;
    } else {
        alert('Por favor, ingresa un monto válido.');
    }
}

function retirar() {
    const monto = parseFloat(document.getElementById('monto').value);
    if (!isNaN(monto) && monto > 0) {
        const resultado = cuenta1.retirar(monto);
        document.getElementById('resultado').innerHTML = resultado;
    } else {
        alert('Por favor, ingresa un monto válido.');
    }
}

function verSaldo() {
    const resultado = cuenta1.verSaldo();
    document.getElementById('resultado').innerHTML = resultado;
}