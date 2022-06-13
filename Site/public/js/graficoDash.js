// // const Chart = require('chart.js');

// const jogos = [
//   'Counter-Strike: Global Offensive',
//   'Valorant',
//   'League of Legends',
//   'Rainbow Six',
//   'Rocket League'
// ];

// var pessoasCs = 0;
// var pessoasVal = 0;
// var pessoasLol = 0;
// var pessoasR6 = 0;
// var pessoasRl = 0;

// fetch("/usuarios/contarJogo").then(function (resposta) {
//   if(resposta.ok){
//       if(resposta == 204){
//           //CONSERTAR AQ
//       }
//       resposta.json().then(function (resposta) {
//           console.log("Jogos e seus usuários recebidos: ", JSON.stringify(resposta));

//           for(var i = 0; i < resposta.length; i++){
//               var jogo = resposta[i];

//               if(jogo.jogo == 'Counter-Strike: Global Offensive'){
//                   pessoasCs = jogo.QtdePessoas;
//               }else if(jogo.jogo == 'Valorant'){
//                   pessoasVal = jogo.QtdePessoas;
//               }else if(jogo.jogo == 'League of Legends'){
//                   pessoasLol = jogo.QtdePessoas;
//               }else if(jogo.jogo == 'Rainbow Six'){
//                   pessoasR6 = jogo.QtdePessoas;
//               }else if(jogo.jogo == 'Rocket League'){
//                   pessoasRl = jogo.QtdePessoas;
//               }

//           }

//           const dadosGrafico = [
//             pessoasCs,
//             pessoasVal,
//             pessoasLol,
//             pessoasR6,
//             pessoasRl
//           ];

//           const data = {
//               labels: jogos,
//               datasets: [{
//                 data: dadosGrafico,
//                 backgroundColor: [
//                   '#0028F0',
//                   '#F0BB18',
//                   '#0CF039',
//                   '#F01838',
//                   '#D200F0'
//                 ],
//                 hoverOffset: 4
//               }]
//             };

//             const config = {
//               type: 'doughnut',
//               data: data,
//               options: {
//                   aspectRatio: 1,
//                   maintainAspectRatio: true,
//                   responsive: true,
//               }
//             };          

//           const graficoDash = new Chart(
//             document.getElementById('canvasGrafico'),
//             config
//           );

//       });
//   }else{
//       throw ('Houve um erro na API!');
//   }
// }).catch(function (resposta) {
//   console.error(resposta);
// });

const orgs = [
  'Fúria',
  'mibr',
  'paiN Gaming',
  'LOUD',
  'INTZ',
  'RED Canids',
  'Black Dragons',
  'LOS GRANDES',
  'Fluxo',
  'Users sem Org'
];

var fanFuria = 0;
var fanMibr = 0;
var fanPain = 0;
var fanLoud = 0;
var fanIntz = 0;
var fanRed = 0;
var fanBlack = 0;
var fanLos = 0;
var fanFluxo = 0;
var usersnull = 0;

fetch("/usuarios/contarFansOrg").then(function (resposta) {
  if (resposta.ok) {
    if (resposta == 204) {
      alert("RESULTADO VAZIO!");
    }
    resposta.json().then(function (resposta) {
      console.log("Dados Recebidos: ", JSON.stringify(resposta));
      for(var i = 0; i < resposta.length; i++){
        var dadosOrg = resposta[i];

        if(dadosOrg.organizacao == 'Fúria'){
          fanFuria = dadosOrg.qtdeFans;
        }else if(dadosOrg.organizacao == 'mibr'){
          fanMibr = dadosOrg.qtdeFans;
        }else if(dadosOrg.organizacao == 'paiN Gaming'){
          fanPain = dadosOrg.qtdeFans;
        }else if(dadosOrg.organizacao == 'LOUD'){
          fanLoud = dadosOrg.qtdeFans;
        }else if(dadosOrg.organizacao == 'INTZ'){
          fanIntz = dadosOrg.qtdeFans;
        }else if(dadosOrg.organizacao == 'RED Canids'){
          fanRed = dadosOrg.qtdeFans;
        }else if(dadosOrg.organizacao == 'Black Dragons'){
          fanBlack = dadosOrg.qtdeFans;
        }else if(dadosOrg.organizacao == 'LOS GRANDES'){
          fanLos = dadosOrg.qtdeFans;
        }else if(dadosOrg.organizacao == 'Fluxo'){
          fanFluxo = dadosOrg.qtdeFans;
        }else{
          usersnull = dadosOrg.qtdeFans;
        }

      }
      const dadosGrafico = [
        fanFuria,
        fanMibr,
        fanPain,
        fanLoud,
        fanIntz,
        fanRed,
        fanBlack,
        fanLos,
        fanFluxo,
        usersnull
      ];

      const data = {
        labels: labels,
        datasets: [{
          label: 'Fãs da Organização',
          data: dadosGrafico,
          backgroundColor: [
            '#222526',
            '#305FB3',
            '#B3312C',
            '#37F043',
            '#D6F4FB',
            '#FA2F29',
            '#666461',
            '#D9572B',
            '#9A50B3',
            '#AD9E44'
          ],
          borderColor: [
            '#101112',
            '#1F3E73',
            '#641E1A',
            '#2A7335',
            '#829599',
            '#C8221D',
            '#42413F',
            '#B86013',
            '#462552',
            '#73682D'
          ],
          borderWidth: 1
        }]
      };
      
      const config = {
        type: 'bar',
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: true,
          aspectRatio: 3,
          scales: {
            y: {
              min: 0,
            }
          },
          layout: {
            padding: 20
          }
        },
      };
      
      const graficoDash = new Chart(
        document.getElementById('canvasGrafico'),
        config
      );
    })
  }
})

const labels = orgs;