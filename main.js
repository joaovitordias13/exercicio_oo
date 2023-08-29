function Marvel(nome) {
    this.nome = nome;
}
function Hero(nome,poderes,idade) {
    Marvel.call(this,nome);

    this.poderes = poderes
    this.idade = idade 


}

const hero1= new Hero('Capitão America', "super força, super resistencia", 102);
const hero2= new Funcionario('Maria', "dev front-end", 5000);
const hero3= new Funcionario('Maria', "dev front-end", 5000);
