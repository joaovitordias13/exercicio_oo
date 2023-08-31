function Hero(nome) {
    this.nome = nome;
}

function Heros(nome,poderes,idade,editora) {
    Hero.call(this,nome);

    this.poderes = poderes
    this.idade = idade 
    this.editora = editora


}

const hero1= new Heros('Capitão America', "super força, super resistencia,sentidos sobre-humanos", 102,"Marvel");
const hero2= new Heros('Batmam', "Ter dinheiro",45, "DC");
const hero3= new Heros('Homem-Aranha', "super força,agilidade,lançar teias,sentidos sobre-humanos;capacidade de escalar paredes;", 20,"Marvel");


console.log(hero1);
console.log(hero2);
console.log(hero3);
