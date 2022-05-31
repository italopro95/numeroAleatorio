let numAleat = parseInt(Math.random(1) * 10);
console.log("voce tem 4 tentativas!!");


for (var i = 1;  i <= 4; i++) {

    let numTentativas = parseInt(prompt("digite um numero: "));
  
    if (numTentativas == numAleat) {
       console.log("acertou!!");
       i = 4;
    }

    else {
       console.log("errou, tente de novo!!");
    }

}