fetch("/jogos/listarJogosAparicoes").then(function (resposta) {
    if (resposta.ok) {
        if (resposta.status == 204) {
            alert("NENHUM JOGO CADASTRADO!");
        }
        resposta.json().then(function (resposta) {
            console.log("Resultados Obtidos KPI 3 e 4: ", JSON.stringify(resposta));

            var jogoF = '';
            var qtdeAparicoesJogo = 0;

            for (var i = 0; i < resposta.length; i++) {

                var jogo = resposta[i];

                if (jogo.qtdeAparicoes > qtdeAparicoesJogo) {
                    jogoF = jogo.nome;
                    qtdeAparicoesJogo = jogo.qtdeAparicoes;
                }

            }

            txtKpiJogoDestaque.innerHTML = jogoF;
            txtKpiInteressadosJogo.innerHTML = `${qtdeAparicoesJogo} Usuários`;
        })
    }
})

fetch("/jogos/contarJogos").then(function (resposta) {
    if (resposta.ok) {
        if (resposta.status == 204) {
            alert("NENHUM JOGO CADASTRADO!");
        }
        resposta.json().then(function (resposta) {
            console.log("Resultados Obtidos KPI 2: ", JSON.stringify(resposta));

            for (var i = 0; i < resposta.length; i++) {

                var jogo = resposta[i];

                txtQtdeJogos.innerHTML = jogo.qtdeJogos;

            }

        })
    }
})

fetch("/usuarios/contarUsuario").then(function (resposta) {
    if (resposta.ok) {
        if (resposta == 204) {
            //CONSERTAR AQ
        }
        resposta.json().then(function (resposta) {
            console.log("Usuarios recebidos: ", JSON.stringify(resposta));

            for (var i = 0; i < resposta.length; i++) {
                var usuario = resposta[i];

                var QtdeUsuarios = usuario.QtdeUsuarios;
            }

            var msgQtdeUsuarios = document.getElementById("txtQtdeUsuarios");
            msgQtdeUsuarios.innerHTML = `${QtdeUsuarios}`;
        });
    } else {
        throw ('Houve um erro na API!');
    }
}).catch(function (resposta) {
    console.error(resposta);
});




// Função Antiga - Não é Usada na Nova Versão!
// fetch("/usuarios/contarJornalista").then(function (resposta) {
//     if (resposta.ok) {
//         if (resposta == 204) {
//             //CONSERTAR AQ
//         }
//         resposta.json().then(function (resposta) {
//             console.log("Jornalistas recebidos: ", JSON.stringify(resposta));

//             for (var i = 0; i < resposta.length; i++) {
//                 var jornalista = resposta[i];

//                 var QtdeJornalista = jornalista.QtdeJornalistas;
//             }

//             var msgQtdeJornalistas = document.getElementById("txtQtdeJornalistas");
//             msgQtdeJornalistas.innerHTML = `${QtdeJornalista}`;
//         });
//     } else {
//         throw ('Houve um erro na API!');
//     }
// }).catch(function (resposta) {
//     console.error(resposta);
// });