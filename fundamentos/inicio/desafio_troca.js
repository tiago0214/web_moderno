let a = 7;
let b = 94;

let temp =a //utilizo isso, para guarda a informação da variavel, para que ela 
//não seja alterada quando eu mudar novamente. para evitar isso b=a. da erro
//porque 'a'esta com o valor alterado.
a=b
b=temp

console.log(a);
console.log(b);
