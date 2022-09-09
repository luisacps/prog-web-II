const tamanho = 40;
let idPeca = 0;
let posicaoInicial = 80;
let posicaoFinal = 81;
let classe = '';
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
			celula.setAttribute('id',i + 99);
            linha.append(celula);
            celula.style.width = `${tamanho}px`;
            celula.style.height = `${tamanho}px`;
			idPeca += 1;
            if (i % 2 == j % 2) {
                celula.style.backgroundColor = 'black';
				celula.setAttribute("class","droptarget");
                if (i * 8 + j <= 24) {
                    celula.append(criarPeca('black', idPeca));
                } else if (i * 8 + j >= 40) {
                    celula.append(criarPeca('blue', idPeca));
                }
            } else {
                celula.style.backgroundColor = 'white';
            }
        }
    };
	
    return tabela;	
}

function criarPeca(cor,ide) {
		let imagem = document.createElement('img');
		imagem.setAttribute('src', `img/${color}.png`);
		imagem.setAttribute('width', `${tamanho-4}px`);
		imagem.setAttribute('height', `${tamanho-4}px`);
		imagem.setAttribute('draggable','true');
		imagem.setAttribute('id', ide);
		imagem.setAttribute('class', color);
		
    return imagem;
}

function dragstart(){
	document.addEventListener("dragstart", function(event) {
	  event.dataTransfer.setData("Text", event.target.id);
	  posicaoInicial = event.path[1].id;
	  classe = (event.path[0].className);
	});
}

function dragend() {
	document.addEventListener("dragend", function(event) {
    event.preventDefault()
	});
}

function dragover() {
	document.addEventListener("dragover", function(event) {
	  event.preventDefault();
	});
}

function drop(){
	document.addEventListener("drop", function(event) {
	event.preventDefault();
	if ( event.target.className == "droptarget") {
		const data = event.dataTransfer.getData("Text");
		let c = event.path[0];
		let t = c.childElementCount;
		posicaoFinal = event.target.id;
		if(t == '0' && posicaoInicial != posicaoFinal){
			if(classe =='blue' && posicaoInicial > posicaoFinal && posicaoInicial - posicaoFinal == 1|| classe == 'black' && posicaoInicial < posicaoFinal && posicaoFinal - posicaoInicial == 1) {
				event.target.appendChild(document.getElementById(data));
			}
		}
	}
	});
}
dragstart();
dragend();
dragover();
drop();
