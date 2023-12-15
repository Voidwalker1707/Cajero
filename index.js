
let datos = [
    { usuario: "david123", contraseña: 1234, saldo: 800 },
    { usuario: "esteban123", contraseña: 5555, saldo: 20 },
    { usuario: "luffy123", contraseña: 1111, saldo: 50 }
];

let botonDeSesion = document.getElementById("Iniciar");
let saldoActual = 0; // Variable para llevar un seguimiento del saldo actual del usuario

function validarCampos(user, contraseña) {
    if (!user || !contraseña) {
        return false;
    } else {
        return true;
    }
}

function mostrarAlerta(alerta) {
    alert(alerta);
}

function inicioDeSesion() {
    botonDeSesion.addEventListener("click", function () {
        let valorDeUsuario = document.getElementById("Usuario").value;
        let valorDeContraseña = document.getElementById("Contraseña").value;

        if (!validarCampos(valorDeUsuario, valorDeContraseña)) {
            return;
        }

        let usuarioEncontrado = datos.find(function (usuario) {
            return usuario.usuario === valorDeUsuario && usuario.contraseña === parseInt(valorDeContraseña);
        });

        if (usuarioEncontrado) {
            mostrarAlerta("Inicio de sesión exitoso");
            const selector = document.getElementById("login-sect");
            const ejecucion = document.getElementById("ejecucion-section");
            selector.style = "display: none";
            ejecucion.style = "display: block";
            saldoActual = usuarioEncontrado.saldo; // Actualizar el saldo actual con el saldo del usuario
            consultarSaldo();
            retirarDinero();
            consignarDinero();
        } else {
            mostrarAlerta("Usuario y/o contraseña incorrectos");
        }
    });
}

function consultarSaldo() {
    const bconsulta = document.getElementById("bconsulta")
    bconsulta.addEventListener("click", () => {
        const parrafoSaldo = document.getElementById("saldoActual");
    parrafoSaldo.textContent = "Su saldo actual es de: " + saldoActual
    alert("Su saldo actual es de: " + saldoActual)
})
}

function retirarDinero() {
    const bRetirarDinero = document.getElementById("bretiro");
    bRetirarDinero.addEventListener("click", () => {
        const parrafoSaldo = document.getElementById("saldoActual");
        const input = parseInt(document.getElementById("input").value);

        if (isNaN(input) || input <= 0) {
            alert("Ingrese una cantidad válida");
            return;
        }

        const nuevoSaldo = saldoActual - input;

        if (nuevoSaldo >= 10 && nuevoSaldo <= 990) {
            parrafoSaldo.textContent = `Su nuevo saldo es de: ${nuevoSaldo}`;
            saldoActual = nuevoSaldo; // Actualizar el saldo actual con el nuevo saldo
        } else {
            alert("Su saldo no puede ser superior a 990 o inferior a 10");
        }
    });
}

function consignarDinero() {
    const bConsignarDinero = document.getElementById("bconsignacion");
    bConsignarDinero.addEventListener("click", () => {
        const parrafoSaldo = document.getElementById("saldoActual");
        const input = parseInt(document.getElementById("input").value);

        if (isNaN(input) || input <= 0) {
            alert("Ingrese una cantidad válida");
            return;
        }

        const nuevoSaldo = saldoActual + input;

        if (nuevoSaldo >= 10 && nuevoSaldo <= 990) {
            parrafoSaldo.textContent = `Su nuevo saldo es de: ${nuevoSaldo}`;
            saldoActual = nuevoSaldo; // Actualizar el saldo actual con el nuevo saldo
        } else {
            alert("Su saldo no puede ser superior a 990 o inferior a 10");
        }
    });
}

inicioDeSesion();
