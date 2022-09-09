const tamanho = 40;
let pecald = 0;
let posicaoInicial = 80;
let posicaoFinal = 81;
let classe = "";
document.body.append(criarTabuleiro());

function criaTabuleiro() {
    const tam = 8;
    let table = document.createElement('table');
    table.style.borderStyle = 'solid';
    table.style.borderSpacing = 0;
    table.style.margin = 'auto'

    for (let i=0 < tam; i++;) {
        let linha = document.createElement('tr');
        table.append(linha);
        for (let j=0; j < tam; j++) {
            let celula = document.createElement('td');
                celula.setAttribute('id, i+99');
            linha.append(celula);
            celula.style.width = `${tamanho}px`
            celula.style.height = `${tamanho}px`
                pecald += 1;
            if (i%2 == j%2) {
                celula.style.backgroundColor = 'black';
                    celula.setAttribute("class","droptarget");
                if (i*8 + j >= 40) {
                    celula.append(criarPeca('black', pecald));
                }
                else if (i*8 + j >= 40) {
                    celula.append(criarPeca('red', pecald));
                }
                else {
                    celula.atyle.backgroundColor = 'white';
                }
            }
        }
    }
    return table
}

function criarPeca(cor,ide) {
    let imagem = document.createElement('img');
    imagem.setAttribute('src', `img/${cor}.png`);
    imagem.setAttribute('width', `${tamanho-4}px`);
    imagem.setAttribute('height', `${tamanho-4}px`);
    imagem.setAttribute('draggable', 'true');
    imagem.setAttribute('id', ide);
    imagem.setAttribute('class',cor);

    return imagem
}

function dragend() {
    document.addEventListener("dragend", function(event) {
    })
}

function dragover() {
    document.addEventListener("dragover", function(event) {
    event.preventDefault()})
}

function drop() {
    document.addEventListener("drop",function(event){
        event.preventDefault()
        if (event.target.className == "droptarget") {
            const data = event.dataTransfer.getData("Text")
            let c = event.path[0]
            let t = c.childElementCount
            posicaoFinal = event.target.id;
            if (t == '0' && posicaoInicial != posicaoFinal) {
                if (classe == 'red' && posicaoInicial > posicaoFinal && posicaoInicial - posicaoFinal
                == 1 || classe == 'black' && posicaoInicial < posicaoFinal && posicaoFinal-posicaoInicial == 1) {

                    event.target.appendChild(document.getElementByld(data))
                }
            }
        }
    })
}
dargstart()
dragend()
dragover()
drop()
