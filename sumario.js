document.addEventListener("DOMContentLoaded", inserirSumario)

function inserirSumario() {
    const ol = document.createElement('ol')
    ol.id = 'sumario'
    document.body.prepend(ol)
    const secoes = document.querySelectorAll ('h2')
    for(let i=0; i<secoes.length; i++) {
        const li = criarItem(`#sec${i+1}`, secoes[i].textContent) 
        ol.appendChild(li)
        alterarh2(secoes[i], i+1)
    }
}

function alterarh2(elem, secnum) {
    insereNumero(elem, secnum)
    elem.id = `sec${secnum}`
    const retornar = criarLink('#', 'voltar')
    inserirDps(elem, retornar)
}

function criarItem(href, texto) {
    const li = document.createElement('li')
    const link = criarLink(href, texto)
    li.appendChild(link)
    return li
}

function inserirNumero(elem, numero) {
    elem.textContent = `${numero}. ${elem.textContent}`
}

function criarLink(href, texto) {
    const link = document.createElement('a')
    link.setAttribute('href', href)
    link.textContent = texto
    return link
}

function inserirDps(de, elem) {
    const proximo = de.nextElementSibling;
    de.parentElement.insertBefore(elem, proximo)
}
