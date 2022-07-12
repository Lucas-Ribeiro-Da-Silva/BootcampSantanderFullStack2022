// Como podemos melhorar o esse código usando TS? 

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }



//solução
type pessoa = {
    nome: string,
    idade: number,
    profissao?: string
}

let pessoa1: pessoa = {
    nome: "maria",
    idade: 29,
    profissao: "atriz"
};


let pessoa2: pessoa = {
    nome: "roberto",
    idade: 19,
    profissao: "Padeiro"
}


let pessoa3: pessoa = {
    nome: "laura",
    idade: 32,
    profissao: "Atriz"
};

let pessoa4: pessoa = {
    nome: "carlos",
    idade: 19
}