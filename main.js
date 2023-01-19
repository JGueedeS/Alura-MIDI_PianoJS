function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const lista_de_teclas = document.querySelectorAll('.tecla');


//estrutura de repetição
for(let contagem = 0; contagem < lista_de_teclas.length; contagem++){ //variavel para contar os botões
    const tecla = lista_de_teclas[contagem];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    //função anoninma
    tecla.onclick = function () {
        tocaSom(idAudio);
    };
    
        tecla.onkeydown = function (event) {
            
        if(event.code === 'Space' || event.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }
        tecla.onkeyup = function () {
            tecla.classList.remove('ativa');
        }
    }

