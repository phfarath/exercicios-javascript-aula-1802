let mensagem: string = "Olá, TypeScript, que legal!";
console.log(mensagem);

// EXERCICIO 1
let valores: number[] = [60, 50, 10];
let somaValores: number = valores.reduce((acc, val) => acc + val, 0);
console.log("Soma dos valores:", somaValores);

// EXERCICIO 2
function mensagemPersonalizada(nome: string): string {
    return `Olá, ${nome}! Bem-vindo ao TypeScript.`;
}
console.log(mensagemPersonalizada("Pedro"));

// EXERCICIO 3
class Carro {
    constructor(public marca: string, public modelo: string, public ano: number) { }
    detalhes(): string {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}
const carro1 = new Carro("Peugeot", "208", 2024);
console.log(carro1.detalhes());

//EXERCICIO 1 - EVOLUINDO COM O TYPESCRIPT
interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor: string;
}

const meuCarro: Partial<Carro> = {
    marca: "Ferrari",
    modelo: "F50",
    ano: 2022,
    motor: "V12"
}
console.log(meuCarro);

//EXERCICIO 2 - EVOLUINDO COM O TYPESCRIPT

interface Multiplicacao {
    (a: number, b: number): number;
}

const multiplicar: Multiplicacao = (a, b) => a * b;

console.log(multiplicar(5, 6));
console.log(multiplicar(2, 3));

//EXERCICIO 3 - EVOLUINDO COM O TYPESCRIPT
function inverterArray<T>(array: T[]): T[] {
    return array.reverse();
}

console.log(inverterArray([1, 2, 3, 4, 5]));
console.log(inverterArray(["a", "b", "c", "d", "e"]));

//EXERCICIO 4 - EVOLUINDO COM O TYPESCRIPT
//Crie uma interface genérica chamada Repositorio<T>, que tenha um método salvar(dado: T): void e um método obterTodos(): T[].
//Depois, crie uma implementação dessa interface para armazenar uma lista de usuários (com nome e email).

interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}

class usuarioRepositorio implements Repositorio<{ nome: string, email: string }> {
    private usuarios: { nome: string, email: string }[] = [];

    salvar(usuario: { nome: string, email: string }): void {
        this.usuarios.push(usuario);
    }

    obterTodos(): { nome: string, email: string }[] {
        return this.usuarios;
    }
}

const usuarioRepo = new usuarioRepositorio();
usuarioRepo.salvar({ nome: "Pedro", email: "ph@gmail.com" });
usuarioRepo.salvar({ nome: "Maria", email: "maria2gmail.com" });
console.log(usuarioRepo.obterTodos());

//EXERCICIO 5 - EVOLUINDO COM O TYPESCRIPT
//Crie um Type Alias chamado RespostaServidor, que pode ser uma string ou um boolean.
// Depois, crie uma função chamada processarResposta que recebe um valor desse tipo e imprime uma mensagem no console dependendo do valor passado.

type RespostaServidor = string | boolean;

function processarResposta(resposta: RespostaServidor) {
    if (typeof resposta === "string") {
        console.log(`A resposta é: ${resposta}`);
    } else {
        console.log(`O valor é: ${resposta}`);
    }
}

processarResposta("Olá, servidor!");
processarResposta(true);

//EXERCICIO 6 - EVOLUINDO COM O TYPESCRIPT
// Utilizando Intersection Types, crie um tipo EstudanteTrabalhador, que una as propriedades de um Estudante (nome e curso) e de um Trabalhador (empresa e cargo).
// Depois, crie um objeto que represente um estudante que também trabalha e exiba os dados no console.

type Estudante = {
    nome: string;
    curso: string;
};

type Trabalhador = {
    empresa: string;
    cargo: string;
};

type EstudanteTrabalhador = Estudante & Trabalhador;
const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "Pedro",
    curso: "Ciência da Computação",
    empresa: "Google",
    cargo: "Desenvolvedor"
};
console.log(estudanteTrabalhador);
