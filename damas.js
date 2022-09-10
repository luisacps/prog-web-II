const tamanho = 40;
let pecaId = 0;
document.body.append(criarTabuleiro());

function criarTabuleiro() {
    const tam = 8;
    let tabela = document.createElement('table');

    tabela.style.borderStyle = 'solid';
    tabela.style.borderSpacing = 0;
    tabela.style.margin = 'auto';

    for (let i = 0; i < tam; i++) {
        let linha = document.createElement('tr');
        tabela.append(linha);
        for (let j = 0; j < tam; j++) {
            let celula = document.createElement('td');
            linha.append(celula);

            celula.style.width = `${tamanho}px`;
            celula.style.height = `${tamanho}px`;
            if (i % 2 == j % 2) {
                celula.style.backgroundColor = 'black';
                if (i * 8 + j <= 24) {
                    celula.append(criarPeca('black'));
                } else if (i * 8 + j >= 40) {
                    celula.append(criarPeca('blue'));
                }
            } else {
                celula.style.backgroundColor = 'white';
            }
        }
    };
    return tabela;
}

function criarPeca(cor) {
    let imagem = document.createElement('img');
    imagem.setAttribute('src', `img/${cor}.png`);
    imagem.setAttribute('width', `${tamanho-4}px`);
    imagem.setAttribute('height', `${tamanho-4}px`);
    return imagem;
}
