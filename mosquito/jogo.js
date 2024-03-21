let altura = 0
let largura = 0
let vida = 1 
let tempo = 15
let criarMosquitoTempo = 1500
let nivel = window.location.search
nivel = nivel.replace('?','')

if(nivel === 'normal'){
    criarMosquitoTempo = 1500
} else if(nivel === 'dificil'){
    criarMosquitoTempo = 1000
} else if(nivel === 'sociedade'){
    criarMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

let cronometro = setInterval(function(){

    tempo -= 1 
    
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
        } else {
            document.getElementById('cronometro').innerHTML = tempo
        }
},1000)

function posicaoRandomica(){
//remove o mosquito anterior caso exista
if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove()
    //controle das vida
    if(vida > 3){
        window.location.href = 'fim_de_jogo.html'
    } else {
        document.getElementById ('v' + vida).src = 'assets/imagens/coracao_cheio'
        vida++
    }
}
    //gerando randomicamente a posicao com base na altura e largura
    let posicaoX = Math.floor(Math.random()* largura) - 90
    let posicaoY = Math.floor(Math.random()* altura) - 90
    
    //para nao ter medidas negativas
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //Mostrar mosquito na tela
    let mosquito = document.createElement('img')
    mosquito.src = 'assets/imagens/mosquito.png'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.className = tamanhoAleatorio() + '' + ladoAleatorio()
    mosquito.id = 'mosquito' 
    mosquito.oneclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)

}

function tamanhoAleatorio(){
    //3 tamanhos de mosquito
    let classe = Math.floor(Math.random() * 3)
    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2: 
            return 'mosquito3'
    }
}
function ladoAleatorio(){
    let classe = Math.floor(Math.random() * 2)
    switch(classe){
        case 0:
            return 'ladoA'
        case 1: 
            return 'ladoB'
    }
}