function mascara(t, mask) {
    var i = t.value.length;
    var saida = mask.substring(1, 0);
    var texto = mask.substring(i)
    if (texto.substring(0, 1) != saida) {
        t.value += texto.substring(0, 1);
    }
}


function validarRg() {
    var rg = document.getElementById("rgInput");

    if (rg.value.length == 12) {
        alert("RG Válido!")
    } else {
        alert("RG Inválido!")
    }
}

function validarCPF() {
    var cpf = document.getElementById("cpfInput");

    if (cpf.value.length == 14) {
        alert("RG Válido!")
    } else {
        alert("RG Inválido!")
    }
}