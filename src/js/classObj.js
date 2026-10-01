class obj{ // o ideal é manter classe num arquivo separado (boa prática né kk)
    constructor(posx, posy, largura, altura, cor){ // define as informações necessárias para criar objeto oriundo dessa classe
        this.posx = posx;
        this.posy = posy;
        this.largura = largura;
        this.altura = altura;
        this.cor = cor;
    }

    desenharObj(){ // dentro de classe não é necessário utilizar "fuction" para declarar, se torna um método
        let imagem = new Image(); // instância imagem
        imagem.src = this.cor;
        telaJogo.drawImage(imagem,this.posx,this.posy,this.largura,this.altura)
    }
}

class Abelha extends obj{ // vai herdar todas os atributos e propriedades da ob
    dir = 0
    mover(){
        this.posx += this.dir
    }
}

class Aranha extends obj{ // vai herdar todas os atributos e propriedades da ob
mover(){
    this.posy += 4
    if(this.posy > 945) {
        this.posy = -100
        this.posx = Math.random() * (500 - this.largura);
    }
}

}

class BG extends obj{
    mover(velocidade,limite,posI){
       this.posy += velocidade
       if(this.posy > limite)
        this.posy = posI
    }
}                          