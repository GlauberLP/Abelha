const tela = document.getElementById("my-canvas");
const telaJogo = tela.getContext("2d");

let bg = new BG(0, 0, 645, 915, "src/assets/bg.png") 
let bg2 = new BG(0, -915, 645, 915, "src/assets/bg.png") 
let abelha = new Abelha(200, 500, 100, 100, "src/assets/bee1.png");
let aranha = new Aranha(100, 100, 100, 100, "src/assets/Spider1.png");

document.addEventListener('keydown', function(e){
    if(e.key == "a"){
        abelha.dir = -12
    }

    if(e.key == "d") {
        abelha.dir = 12
    }
} )

/*
document.addEventListener('keyup', function(e){
    if(e.key == "a"){
        abelha.dir = 0
    }

    if(e.key == "d") {
        abelha.dir = 0
    }
} )
*/

function draw() { // função responsável por desenhar elementos na tela
    bg.desenharObj();
    bg2.desenharObj();
    abelha.desenharObj();
    aranha.desenharObj();
   
}

function update() { // responsável por atualizar os frames na tela
 abelha.mover()
 aranha.mover()
 bg.mover(3,915,0)
 bg2.mover(3,0,-915)
}

function main() { // função principal, responsável por "chamar" todas as outras (apaga, atualiza e desenha elementos)
    telaJogo.clearRect(0, 0, 645, 945);// apaga o que está no canvas usandos os eixos como referência
    update();
    draw();
}

setInterval(main, 10); // determina o intervalo de tempo em que os elementos serão atualizados/modificados atráves da função main