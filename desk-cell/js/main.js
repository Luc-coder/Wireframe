var tempo = document.getElementById('tempo');
var nome = document.getElementById('nome');
var lidade = document.getElementById('lidade');
var resultado = 0;
var ler = document.write('Olá ' + nome + '<br>juntando R$ ' + lidade + ' todo mês, <br>você terá' + resultado);

for(var i = 1; i <= 10; i++){
    tempo.innerHTML+= '<option value="'+i+'">'+i+'</option>';
}

function soma(ler){
    if(tempo == 1){
        resultado = lidade * 12;
        ler;
    }else if(tempo == 2){
        resultado = lidade * 24;
    }


    
}

console.log(ler);

// switch(tempo){
//     case 1:
//       resultado = lidade * 12;
//     break;
//     case 2: 
//     resultado = lidade * 24;
//     break;
//     case 3: 
//     resultado = lidade * 36;
//     break;
//     case 4: 
//     resultado = lidade * 48;
//     break;
//     case 5: 
//     resultado = lidade * 60;
//     break;
//     case 6: 
//     resultado = lidade * 72;
//     break;
//     case 7: 
//     resultado = lidade * 84;
//     break;
//     case 8: 
//     resultado = lidade * 96;
//     break;
//     case 9: 
//     resultado = lidade * 108;
//     break;
//     case 10: 
//     resultado = lidade * 120;
//     break;
// }