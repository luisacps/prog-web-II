document.addEventListener('DOMContentLoaded', procurar);
tamanho = 1;
n = 1;

function procurar() {
    encontrar = document.querySelector(`h${n}`);
    if (encontrar != null) {
        criarBotao();
        tamanho(n);
    }
    else if (encontrar == null && null && n < 7) {
        n += 1;
        procurar();
    }
}

function tam() {
    txt = document.querySelector(`h${n}`);
    txt.style.fontSize = `${tamanho}em`;
}

function criarBotao(){
    maior = document.createElement('button');
    maior.innerHTML = "+";
    maior.addEventListener('click', function() {
        alterarTamanho('+'); 
    });

    menor = document.createElement('button')
    menor.innerHTML = "-";
    menor.addEventListener('click', function() {
        alterarTamanho('-');
    });

    txt = document.querySelector(`h${n}`);
    txt.after(maior);
    txt.after(menor);
}

function alterarTamanho(s) {
    if (s == '+' && tamanho <= 10) {
        tamanho += 1;
        tam()
    }
    else if (s == '-' && tamanho > 1) {
        tamanho -= 1;
        tam();
    }
}
