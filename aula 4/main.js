// function soma(n1, n2) {
//     return n1+n2;
// }
// function setReplace(frase, nome, novoNove){
//     return frase.replace(nome, novoNove);
// }

// alert(soma(1,2  ))



// alert(setReplace("O japão venceu", "japão", "Brasil"))

function validarIdade(idade){
    if(idade>= 18){
        return true;
    } else {
        return false;
    }
}

var idade = Number(prompt('Digite sua idade: '));
alert(validarIdade(idade));