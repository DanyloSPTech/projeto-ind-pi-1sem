// const Chart = require('chart.js');

const jogos = [
  'Counter-Strike: Global Offensive',
  'Valorant',
  'League of Legends',
  'Rainbow Six',
  'Rocket League'
];

var pessoasCs = 0;
var pessoasVal = 0;
var pessoasLol = 0;
var pessoasR6 = 0;
var pessoasRl = 0;

fetch("/usuarios/contarJogo").then(function (resposta) {
  if(resposta.ok){
      if(resposta == 204){
          //CONSERTAR AQ
      }
      resposta.json().then(function (resposta) {
          console.log("Jogos e seus usuários recebidos: ", JSON.stringify(resposta));

          for(var i = 0; i < resposta.length; i++){
              var jogo = resposta[i];

              if(jogo.jogo == 'Counter-Strike: Global Offensive'){
                  pessoasCs = jogo.QtdePessoas;
              }else if(jogo.jogo == 'Valorant'){
                  pessoasVal = jogo.QtdePessoas;
              }else if(jogo.jogo == 'League of Legends'){
                  pessoasLol = jogo.QtdePessoas;
              }else if(jogo.jogo == 'Rainbow Six'){
                  pessoasR6 = jogo.QtdePessoas;
              }else if(jogo.jogo == 'Rocket League'){
                  pessoasRl = jogo.QtdePessoas;
              }

          }

          const dadosGrafico = [
            pessoasCs,
            pessoasVal,
            pessoasLol,
            pessoasR6,
            pessoasRl
          ];
          
          const data = {
              labels: jogos,
              datasets: [{
                data: dadosGrafico,
                backgroundColor: [
                  '#0028F0',
                  '#F0BB18',
                  '#0CF039',
                  '#F01838',
                  '#D200F0'
                ],
                hoverOffset: 4
              }]
            };
          
            const config = {
              type: 'doughnut',
              data: data,
              options: {
                  aspectRatio: 1,
                  maintainAspectRatio: true,
                  responsive: true,
              }
            };          

          const graficoDash = new Chart(
            document.getElementById('canvasGrafico'),
            config
          );

      });
  }else{
      throw ('Houve um erro na API!');
  }
}).catch(function (resposta) {
  console.error(resposta);
});