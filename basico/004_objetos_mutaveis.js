
let pessoa = { nome: "Lucas", idade: 28};
console.log(pessoa) // print no objeto

console.log(typeof pessoa); // tipo de dado

console.log( // Printando objeto organizado
    "nome: ", pessoa.nome,
    "\nidade", pessoa.idade    
)

// array
let numeros = [1, 2, 3, 4];
console.log(typeof numeros); // object (Arrays são um tipo especial de objeto)


// Funcao
function somar(a, b) {
    return a + b;
}

console.log(typeof somar); // vai retornar function

// usando a funcao

resultado = somar(2, 2)

console.log(resultado)

console.log(somar(3, 3))

console.log(somar(a=5, b=5))

console.log(result = somar(4, 4))