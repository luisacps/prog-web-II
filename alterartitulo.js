let tamanho = 3;
function atualizarTam() {
    const h1 = document.querySelector('h1');
    h1.style.fontSize = `${tamanho}em`;
}

function diminuir() {
    if (tamanho > 1) {
        tamanho -= 0.5
        atualizarTam()
    }
}

function aumentar() {
    if (tamanho < 5) {
        tamanho += 0.5
        atualizarTam()
    }
}
