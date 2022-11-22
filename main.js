function tocaSom (seletorAudio) {
    let elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const teclasDaBateria = document.querySelectorAll(".tecla");

for (let i = 0; i < teclasDaBateria.length; i++) {
    let tecla = teclasDaBateria[i]
    let idAudio = `#som_${tecla.classList[1]}`

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.key === 'Space' || evento.key === "Enter") {
            tecla.classList.add('ativa');
        }
    }
    
    tecla.onkeyup = function (evento) {
        tecla.classList.remove('ativa');
    }
}