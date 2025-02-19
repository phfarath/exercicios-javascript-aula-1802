const dobro = x => x*2;
console.log(dobro(7));
console.log(dobro(15));

const dividir = (x,y) => x/y;
console.log(dividir(10, 2));
console.log(dividir(9, 3))

const mensagemDeBoasVindas = (nome) =>{
        return `Seja Bem-Vindo, ${nome}`;
}
console.log(mensagemDeBoasVindas("Carlos"));
console.log(mensagemDeBoasVindas("Ana"));

const executarOperacao = (a, b, operacao) => operacao(a,b);
console.log(executarOperacao(6, 3, (a, b) => a - b));
console.log(executarOperacao(4, 5, (a, b) => a * b));

const precos = [100, 200, 300, 400];
const precosComDesconto = precos.map(x => x-(x/10));
console.log(precosComDesconto);

const idades = [12, 17, 14, 18, 22, 65];
const menoresDeIdade = idades.filter(idade => idade < 18);
console.log(menoresDeIdade);

const numeros = [2, 3, 4, 5];
const produtos = numeros.reduce((total, x) => total * x, 1);
console.log(produtos);