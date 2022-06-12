fanFuria = 0;
fanMibr = 0;
fanPain = 0;
fanLoud = 0;
fanIntz = 0;
fanRed = 0;
fanBlack = 0;
fanLos = 0;
fanFluxo = 0;

var fans1 = 0;
var fans2 = 0;
var fans3 = 0;
var fans4 = 0;
var fans5 = 0;
var fans6 = 0;
var fans7 = 0;
var fans8 = 0;
var fans9 = 0;

var org1 = '';
var org2 = '';
var org3 = '';
var org4 = '';
var org5 = '';
var org6 = '';
var org7 = '';
var org8 = '';
var org9 = '';

fetch("/usuarios/contarFansOrg").then(function (resposta) {
    if (resposta.ok) {
        if (resposta == 204) {
            alert("RESULTADO VAZIO!");
        }
        resposta.json().then(function (resposta) {
            console.log("Dados Recebidos: ", JSON.stringify(resposta));
            for (var i = 0; i < resposta.length; i++) {
                var dadosOrg = resposta[i];

                if (dadosOrg.organizacao == 'Fúria') {
                    fanFuria = dadosOrg.qtdeFans;
                } else if (dadosOrg.organizacao == 'mibr') {
                    fanMibr = dadosOrg.qtdeFans;
                } else if (dadosOrg.organizacao == 'paiN Gaming') {
                    fanPain = dadosOrg.qtdeFans;
                } else if (dadosOrg.organizacao == 'LOUD') {
                    fanLoud = dadosOrg.qtdeFans;
                } else if (dadosOrg.organizacao == 'INTZ') {
                    fanIntz = dadosOrg.qtdeFans;
                } else if (dadosOrg.organizacao == 'RED Canids') {
                    fanRed = dadosOrg.qtdeFans;
                } else if (dadosOrg.organizacao == 'Black Dragons') {
                    fanBlack = dadosOrg.qtdeFans;
                } else if (dadosOrg.organizacao == 'LOS GRANDES') {
                    fanLos = dadosOrg.qtdeFans;
                } else if (dadosOrg.organizacao == 'Fluxo') {
                    fanFluxo = dadosOrg.qtdeFans;
                }

                if(dadosOrg.qtdeFans > fans1){
                    org1 = dadosOrg.organizacao;
                    fans1 = dadosOrg.qtdeFans;
                }else if(dadosOrg.qtdeFans > fans2){
                    org2 = dadosOrg.organizacao;
                    fans2 = dadosOrg.qtdeFans;
                }else if(dadosOrg.qtdeFans > fans3){
                    org3 = dadosOrg.organizacao;
                    fans3 = dadosOrg.qtdeFans;
                }else if(dadosOrg.qtdeFans > fans4){
                    org4 = dadosOrg.organizacao;
                    fans4 = dadosOrg.qtdeFans;
                }else if(dadosOrg.qtdeFans > fans5){
                    org5 = dadosOrg.organizacao;
                    fans5 = dadosOrg.qtdeFans;
                }else if(dadosOrg.qtdeFans > fans6){
                    org6 = dadosOrg.organizacao;
                    fans6 = dadosOrg.qtdeFans;
                }else if(dadosOrg.qtdeFans > fans7){
                    org7 = dadosOrg.organizacao;
                    fans7 = dadosOrg.qtdeFans;
                }else if(dadosOrg.qtdeFans > fans8){
                    org8 = dadosOrg.organizacao;
                    fans8 = dadosOrg.qtdeFans;
                }else if(dadosOrg.qtdeFans > fans9){
                    org9 = dadosOrg.organizacao;
                    fans9 = dadosOrg.qtdeFans;
                }

            }

            if(org1 == 'Fúria'){
                imgOrg1.src = 'images/logoFuria.png';
                nomeOrg1.innerHTML = 'Fúria';
            }else if(org2 == 'Fúria'){
                imgOrg2.src = 'images/logoFuria.png';
                nomeOrg2.innerHTML = 'Fúria';
            }else if(org3 == 'Fúria'){
                imgOrg3.src = 'images/logoFuria.png';
                nomeOrg3.innerHTML = 'Fúria';
            }else if(org4 == 'Fúria'){
                imgOrg4.src = 'images/logoFuria.png';
                nomeOrg4.innerHTML = 'Fúria';
            }else if(org5 == 'Fúria'){
                imgOrg5.src = 'images/logoFuria.png';
                nomeOrg5.innerHTML = 'Fúria';
            }else if(org6 == 'Fúria'){
                imgOrg6.src = 'images/logoFuria.png';
                nomeOrg6.innerHTML = 'Fúria';
            }else if(org7 == 'Fúria'){
                imgOrg7.src = 'images/logoFuria.png';
                nomeOrg7.innerHTML = 'Fúria';
            }else if(org8 == 'Fúria'){
                imgOrg8.src = 'images/logoFuria.png';
                nomeOrg8.innerHTML = 'Fúria';
            }else if(org9 == 'Fúria'){
                imgOrg9.src = 'images/logoFuria.png';
                nomeOrg9.innerHTML = 'Fúria';
            }

            if(org1 == 'paiN Gaming'){
                imgOrg1.src = 'images/logoPain.png';
                nomeOrg1.innerHTML = 'paiN Gaming';
            }else if(org2 == 'paiN Gaming'){
                imgOrg2.src = 'images/logoPain.png';
                nomeOrg2.innerHTML = 'paiN Gaming';
            }else if(org3 == 'paiN Gaming'){
                imgOrg3.src = 'images/logoPain.png';
                nomeOrg3.innerHTML = 'paiN Gaming';
            }else if(org4 == 'paiN Gaming'){
                imgOrg4.src = 'images/logoPain.png';
                nomeOrg4.innerHTML = 'paiN Gaming';
            }else if(org5 == 'paiN Gaming'){
                imgOrg5.src = 'images/logoPain.png';
                nomeOrg5.innerHTML = 'paiN Gaming';
            }else if(org6 == 'paiN Gaming'){
                imgOrg6.src = 'images/logoPain.png';
                nomeOrg6.innerHTML = 'paiN Gaming';
            }else if(org7 == 'paiN Gaming'){
                imgOrg7.src = 'images/logoPain.png';
                nomeOrg7.innerHTML = 'paiN Gaming';
            }else if(org8 == 'paiN Gaming'){
                imgOrg8.src = 'images/logoPain.png';
                nomeOrg8.innerHTML = 'paiN Gaming';
            }else if(org9 == 'paiN Gaming'){
                imgOrg9.src = 'images/logoPain.png';
                nomeOrg9.innerHTML = 'paiN Gaming';
            }

            if(org1 == 'INTZ'){
                imgOrg1.src = 'images/logoIntz.png';
                nomeOrg1.innerHTML = 'INTZ';
            }else if(org2 == 'INTZ'){
                imgOrg2.src = 'images/logoIntz.png';
                nomeOrg2.innerHTML = 'INTZ';
            }else if(org3 == 'INTZ'){
                imgOrg3.src = 'images/logoIntz.png';
                nomeOrg3.innerHTML = 'INTZ';
            }else if(org4 == 'INTZ'){
                imgOrg4.src = 'images/logoIntz.png';
                nomeOrg4.innerHTML = 'INTZ';
            }else if(org5 == 'INTZ'){
                imgOrg5.src = 'images/logoIntz.png';
                nomeOrg5.innerHTML = 'INTZ';
            }else if(org6 == 'INTZ'){
                imgOrg6.src = 'images/logoIntz.png';
                nomeOrg6.innerHTML = 'INTZ';
            }else if(org7 == 'INTZ'){
                imgOrg7.src = 'images/logoIntz.png';
                nomeOrg7.innerHTML = 'INTZ';
            }else if(org8 == 'INTZ'){
                imgOrg8.src = 'images/logoIntz.png';
                nomeOrg8.innerHTML = 'INTZ';
            }else if(org9 == 'INTZ'){
                imgOrg9.src = 'images/logoIntz.png';
                nomeOrg9.innerHTML = 'INTZ';
            }

            if(org1 == 'LOUD'){
                imgOrg1.src = 'images/logoLoud.png';
                nomeOrg1.innerHTML = 'LOUD';
            }else if(org2 == 'LOUD'){
                imgOrg2.src = 'images/logoLoud.png';
                nomeOrg2.innerHTML = 'LOUD';
            }else if(org3 == 'LOUD'){
                imgOrg3.src = 'images/logoLoud.png';
                nomeOrg3.innerHTML = 'LOUD';
            }else if(org4 == 'LOUD'){
                imgOrg4.src = 'images/logoLoud.png';
                nomeOrg4.innerHTML = 'LOUD';
            }else if(org5 == 'LOUD'){
                imgOrg5.src = 'images/logoLoud.png';
                nomeOrg5.innerHTML = 'LOUD';
            }else if(org6 == 'LOUD'){
                imgOrg6.src = 'images/logoLoud.png';
                nomeOrg6.innerHTML = 'LOUD';
            }else if(org7 == 'LOUD'){
                imgOrg7.src = 'images/logoLoud.png';
                nomeOrg7.innerHTML = 'LOUD';
            }else if(org8 == 'LOUD'){
                imgOrg8.src = 'images/logoLoud.png';
                nomeOrg8.innerHTML = 'LOUD';
            }else if(org9 == 'LOUD'){
                imgOrg9.src = 'images/logoLoud.png';
                nomeOrg9.innerHTML = 'LOUD';
            }

            if(org1 == 'mibr'){
                imgOrg1.src = 'images/logoMibr.png';
                nomeOrg1.innerHTML = 'mibr';
            }else if(org2 == 'mibr'){
                imgOrg2.src = 'images/logoMibr.png';
                nomeOrg2.innerHTML = 'mibr';
            }else if(org3 == 'mibr'){
                imgOrg3.src = 'images/logoMibr.png';
                nomeOrg3.innerHTML = 'mibr';
            }else if(org4 == 'mibr'){
                imgOrg4.src = 'images/logoMibr.png';
                nomeOrg4.innerHTML = 'mibr';
            }else if(org5 == 'mibr'){
                imgOrg5.src = 'images/logoMibr.png';
                nomeOrg5.innerHTML = 'mibr';
            }else if(org6 == 'mibr'){
                imgOrg6.src = 'images/logoMibr.png';
                nomeOrg6.innerHTML = 'mibr';
            }else if(org7 == 'mibr'){
                imgOrg7.src = 'images/logoMibr.png';
                nomeOrg7.innerHTML = 'mibr';
            }else if(org8 == 'mibr'){
                imgOrg8.src = 'images/logoMibr.png';
                nomeOrg8.innerHTML = 'mibr';
            }else if(org9 == 'mibr'){
                imgOrg9.src = 'images/logoMibr.png';
                nomeOrg9.innerHTML = 'mibr';
            }

            if(org1 == 'RED Canids'){
                imgOrg1.src = 'images/logoRed.png';
                nomeOrg1.innerHTML = 'RED Canids';
            }else if(org2 == 'RED Canids'){
                imgOrg2.src = 'images/logoRed.png';
                nomeOrg2.innerHTML = 'RED Canids';
            }else if(org3 == 'RED Canids'){
                imgOrg3.src = 'images/logoRed.png';
                nomeOrg3.innerHTML = 'RED Canids';
            }else if(org4 == 'RED Canids'){
                imgOrg4.src = 'images/logoRed.png';
                nomeOrg4.innerHTML = 'RED Canids';
            }else if(org5 == 'RED Canids'){
                imgOrg5.src = 'images/logoRed.png';
                nomeOrg5.innerHTML = 'RED Canids';
            }else if(org6 == 'RED Canids'){
                imgOrg6.src = 'images/logoRed.png';
                nomeOrg6.innerHTML = 'RED Canids';
            }else if(org7 == 'RED Canids'){
                imgOrg7.src = 'images/logoRed.png';
                nomeOrg7.innerHTML = 'RED Canids';
            }else if(org8 == 'RED Canids'){
                imgOrg8.src = 'images/logoRed.png';
                nomeOrg8.innerHTML = 'RED Canids';
            }else if(org9 == 'RED Canids'){
                imgOrg9.src = 'images/logoRed.png';
                nomeOrg9.innerHTML = 'RED Canids';
            }

            if(org1 == 'Black Dragons'){
                imgOrg1.src = 'images/logoBlack.png';
                nomeOrg1.innerHTML = 'Black Dragons';
            }else if(org2 == 'Black Dragons'){
                imgOrg2.src = 'images/logoBlack.png';
                nomeOrg2.innerHTML = 'Black Dragons';
            }else if(org3 == 'Black Dragons'){
                imgOrg3.src = 'images/logoBlack.png';
                nomeOrg3.innerHTML = 'Black Dragons';
            }else if(org4 == 'Black Dragons'){
                imgOrg4.src = 'images/logoBlack.png';
                nomeOrg4.innerHTML = 'Black Dragons';
            }else if(org5 == 'Black Dragons'){
                imgOrg5.src = 'images/logoBlack.png';
                nomeOrg5.innerHTML = 'Black Dragons';
            }else if(org6 == 'Black Dragons'){
                imgOrg6.src = 'images/logoBlack.png';
                nomeOrg6.innerHTML = 'Black Dragons';
            }else if(org7 == 'Black Dragons'){
                imgOrg7.src = 'images/logoBlack.png';
                nomeOrg7.innerHTML = 'Black Dragons';
            }else if(org8 == 'Black Dragons'){
                imgOrg8.src = 'images/logoBlack.png';
                nomeOrg8.innerHTML = 'Black Dragons';
            }else if(org9 == 'Black Dragons'){
                imgOrg9.src = 'images/logoBlack.png';
                nomeOrg9.innerHTML = 'Black Dragons';
            }

            if(org1 == 'LOS GRANDES'){
                imgOrg1.src = 'images/logoLos.png';
                nomeOrg1.innerHTML = 'LOS GRANDES';
            }else if(org2 == 'LOS GRANDES'){
                imgOrg2.src = 'images/logoLos.png';
                nomeOrg2.innerHTML = 'LOS GRANDES';
            }else if(org3 == 'LOS GRANDES'){
                imgOrg3.src = 'images/logoLos.png';
                nomeOrg3.innerHTML = 'LOS GRANDES';
            }else if(org4 == 'LOS GRANDES'){
                imgOrg4.src = 'images/logoLos.png';
                nomeOrg4.innerHTML = 'LOS GRANDES';
            }else if(org5 == 'LOS GRANDES'){
                imgOrg5.src = 'images/logoLos.png';
                nomeOrg5.innerHTML = 'LOS GRANDES';
            }else if(org6 == 'LOS GRANDES'){
                imgOrg6.src = 'images/logoLos.png';
                nomeOrg6.innerHTML = 'LOS GRANDES';
            }else if(org7 == 'LOS GRANDES'){
                imgOrg7.src = 'images/logoLos.png';
                nomeOrg7.innerHTML = 'LOS GRANDES';
            }else if(org8 == 'LOS GRANDES'){
                imgOrg8.src = 'images/logoLos.png';
                nomeOrg8.innerHTML = 'LOS GRANDES';
            }else if(org9 == 'LOS GRANDES'){
                imgOrg9.src = 'images/logoLos.png';
                nomeOrg9.innerHTML = 'LOS GRANDES';
            }

            if(org1 == 'Fluxo'){
                imgOrg1.src = 'images/logoFluxo.png';
                nomeOrg1.innerHTML = 'Fluxo';
            }else if(org2 == 'Fluxo'){
                imgOrg2.src = 'images/logoFluxo.png';
                nomeOrg2.innerHTML = 'Fluxo';
            }else if(org3 == 'Fluxo'){
                imgOrg3.src = 'images/logoFluxo.png';
                nomeOrg3.innerHTML = 'Fluxo';
            }else if(org4 == 'Fluxo'){
                imgOrg4.src = 'images/logoFluxo.png';
                nomeOrg4.innerHTML = 'Fluxo';
            }else if(org5 == 'Fluxo'){
                imgOrg5.src = 'images/logoFluxo.png';
                nomeOrg5.innerHTML = 'Fluxo';
            }else if(org6 == 'Fluxo'){
                imgOrg6.src = 'images/logoFluxo.png';
                nomeOrg6.innerHTML = 'Fluxo';
            }else if(org7 == 'Fluxo'){
                imgOrg7.src = 'images/logoFluxo.png';
                nomeOrg7.innerHTML = 'Fluxo';
            }else if(org8 == 'Fluxo'){
                imgOrg8.src = 'images/logoFluxo.png';
                nomeOrg8.innerHTML = 'Fluxo';
            }else if(org9 == 'Fluxo'){
                imgOrg9.src = 'images/logoFluxo.png';
                nomeOrg9.innerHTML = 'Fluxo';
            }

            console.log(`Org: ${org1} Fans: ${fans1}`);
            console.log(`Org: ${org2} Fans: ${fans2}`);
            console.log(`Org: ${org3} Fans: ${fans3}`);
            console.log(`Org: ${org4} Fans: ${fans4}`);
            console.log(`Org: ${org5} Fans: ${fans5}`);
            console.log(`Org: ${org6} Fans: ${fans6}`);
            console.log(`Org: ${org7} Fans: ${fans7}`);
            console.log(`Org: ${org8} Fans: ${fans8}`);
            console.log(`Org: ${org9} Fans: ${fans9}`);

        })
    }
});