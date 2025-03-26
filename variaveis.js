
// var (Desencorajado 🚫)

// VAR pode serredeclarado e atualizado
// ele nao respeita o bloco do escopo
var name = 'Joao';
var name = 'Maria';
console.log(name);

// let (Usado para valores mutáveis ✅)

// pode ser atualizado, mas nao pode ser redeclarado no mesmo escopo
// ele respeita o escopo do bloco
let idade = 25;
idade = 30;
console.log(idade);

//const (Usado para valores imutáveis 🔒)

// nao pode ser atualizado nem declarado.
// Requer inicializacao na declaracao

const PI = 3.14;
console.log(PI)
// PI = 3.15 Dessa forma nao funciona



