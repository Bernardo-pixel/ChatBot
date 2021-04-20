function Enviar() {
    let mensagem = document.getElementById("escrever").value;
    if (mensagem != "" || mensagem != " ") {
        let linhaNova = document.createElement("p");
        linhaNova.style.backgroundColor = 'greenyellow';
        linhaNova.style.borderRadius = '10px 0px 0px 10px';
        linhaNova.style.marginLeft = '600px';
        linhaNova.append("Você - ", mensagem);
        document.getElementById("mensagens").append(linhaNova);
        setTimeout(() => { Resposta(mensagem), beep(); }, 1000);
        beep();
    } else {
        alert("Escreva algo antes de enviar")
    }
    document.getElementById("escrever").value = "";
}

function Resposta(mensagem) {
    let linhaNova = document.createElement("p");
    linhaNova.style.backgroundColor = 'gray';
    linhaNova.style.borderRadius = '0px 10px 10px 0px';
    linhaNova.style.width = '600px';
    if (mensagem.toUpperCase() == "OI") {
        linhaNova.append("Bot - Olá");
        document.getElementById("mensagens").append(linhaNova);
    } else if (mensagem.toUpperCase() == "QUAL É O SEU NOME?" || mensagem.toUpperCase() == "QUAL O SEU NOME?") {
        linhaNova.append("Bot - Meu nome virtual é Bot, e fui criado pelo programador Bernardo.")
        document.getElementById("mensagens").append(linhaNova);
    } else if (mensagem.toUpperCase() == "FILMES PARA ASSISTIR" || mensagem.toUpperCase() == "FILMES") {
        linhaNova.append("Bot - Filmes legais: Os dois Irmãos, Sim senhor, Filmes da Marvel")
        document.getElementById("mensagens").append(linhaNova);
    } else if (mensagem.toUpperCase() == "QUE COR EU DEVO USAR HOJE?" || mensagem.toUpperCase() == "QUE COR DEVO USAR HOJE?" || mensagem.toUpperCase() == "QUE COR EU DEVO USAR HOJE" || mensagem.toUpperCase() == "QUE COR DEVO USAR HOJE" || mensagem.toUpperCase() == "QUE ROUPA EU DEVO USAR HOJE?" || mensagem.toUpperCase() == "QUE ROUPA DEVO USAR HOJE") {
        let random = Math.floor(Math.random() * 4);
        if (random == 0) {
            linhaNova.append("Bot - Na minha opinião você deve usar a cor vermelha hoje.")
            document.getElementById("mensagens").append(linhaNova);
        } else if (random == 1) {
            linhaNova.append("Bot - Na minha opinião você deve usar a cor verde hoje.")
            document.getElementById("mensagens").append(linhaNova);
        } else if (random == 2) {
            linhaNova.append("Bot - Na minha opinião você deve usar a cor azul hoje.")
            document.getElementById("mensagens").append(linhaNova);
        } else if (random == 3) {
            linhaNova.append("Bot - Na minha opinião você deve usar a cor branca hoje.")
            document.getElementById("mensagens").append(linhaNova);
        } else if (random == 4) {
            linhaNova.append("Bot - Na minha opinião você deve usar a cor preta hoje.")
            document.getElementById("mensagens").append(linhaNova);
        }
    } else if (mensagem.toUpperCase() == "ME CONTE UMA PIADA" || mensagem.toUpperCase() == "PIADA") {
        let random = Math.floor(Math.random() * 0);
        if (random == 0) {
            linhaNova.append("Bot - Por que o Napoleão era sempre chamado pras festas na França?")
            document.getElementById("mensagens").append(linhaNova);
            linhaNova.append("Resposta: Porque ele era bom na party.")
            document.getElementById("mensagens").append(linhaNova);
        } else if (random == 1) {
            linhaNova.append("Bot - O que aconteceu com os lápis quando descobriram que o dono da Faber Castell morreu?")
            document.getElementById("mensagens").append(linhaNova);
            linhaNova.append("Resposta: Eles ficaram desapontados.")
            document.getElementById("mensagens").append(linhaNova)
        } else if (random == 2) {
            linhaNova.append("Bot - Por que o jacaré deixou seu filho de castigo?")
            document.getElementById("mensagens").append(linhaNova);
            linhaNova.append("Resposta: Porque ele réptil de ano.")
            document.getElementById("mensagens").append(linhaNova)
        } else if (random == 3) {
            linhaNova.append("Bot - Por que o pato tem inveja do cavalo?")
            document.getElementById("mensagens").append(linhaNova,);
            linhaNova.append("Resposta: Porque o cavalo tem quatro patas")
            document.getElementById("mensagens").append(linhaNova)
        }
    } else if (mensagem.toUpperCase() == "FUNÇÕES" || mensagem.toUpperCase() == "O QUE VOCÊ PODE FAZER?") {
        linhaNova.append("Bot - Posso responder muitas perguntas, experimente dizer: Qual é o seu nome?, Que cor devo usar hoje?, Filmes para assistir, Me conte uma piada")
        document.getElementById("mensagens").append(linhaNova);
    } else if (mensagem.toUpperCase() == "OBRIGADO") {
        linhaNova.append("Bot - Não há de que, estou sempre pronto para ajudar!")
        document.getElementById("mensagens").append(linhaNova);
    } else {
        linhaNova.append("Bot - Essa frase não está listada. Para saber o que posso fazer, escreva funções.")
        document.getElementById("mensagens").append(linhaNova);
    }
}

let campoEscrever = document.getElementById("escrever");
campoEscrever.addEventListener('keyup', function (e) {
    var key = e.which || e.keyCode;
    if (key == 13) { // codigo da tecla enter
        Enviar();
    }
});


function beep() {
    var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");
    snd.play();
}