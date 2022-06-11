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
  'Fluxo'
];

var fanFuria = 30;
var fanMibr = 17;
var fanPain = 59;
var fanLoud = 74;
var fanIntz = 4;
var fanRed = 21;
var fanBlack = 8;
var fanLos = 33;
var fanFluxo = 28;

const dadosGrafico = [
  fanFuria,
  fanMibr,
  fanPain,
  fanLoud,
  fanIntz,
  fanRed,
  fanBlack,
  fanLos,
  fanFluxo
];

const labels = orgs;
const data = {
  labels: labels,
  datasets: [{
    label: 'Fãs Por Organização',
    data: dadosGrafico,
    backgroundColor: [
      '#222526',
      '#305FB3',
      '#B3312C',
      '#43B353',
      '#D6F4FB',
      '#FA2F29',
      '#666461',
      '#B36643',
      '#9A50B3'
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
      '#462552'
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
    scales: {
      y:{
        min: 0
      }
    }
  },
};

const graficoDash = new Chart(
  document.getElementById('canvasGrafico'),
  config
);