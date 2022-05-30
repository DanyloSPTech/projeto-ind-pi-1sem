fetch("/usuarios/jogoDestaque").then(function (resposta) {
    if(resposta.ok){
        if(resposta == 204){
            //CONSERTAR AQ
        }
        resposta.json().then(function (resposta) {
            console.log("Jogos e seus usuários recebidos: ", JSON.stringify(resposta));
  
            var jogoDestaque = '';
            var QtdeAparicoes = 0;
            for(i = 0; i < resposta.length; i++){
                var jogo = resposta[i];
                if(jogo.QtdeAparicoes > QtdeAparicoes){
                    jogoDestaque = jogo.jogo;
                    QtdeAparicoes = jogo.QtdeAparicoes;
                }
            }

            var kpiJogoDestaque = document.getElementById("txtKpiJogoDestaque");
            var kpiInteressadosJogo = document.getElementById("txtKpiInteressadosJogo");
            kpiJogoDestaque.innerHTML = `${jogoDestaque}`;
            kpiInteressadosJogo.innerHTML = `${QtdeAparicoes} Usuários`;
        });
    }else{
        throw ('Houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });

fetch("/usuarios/contarUsuario").then(function (resposta) {
    if(resposta.ok){
        if(resposta == 204){
            //CONSERTAR AQ
        }
        resposta.json().then(function (resposta) {
            console.log("Usuarios recebidos: ", JSON.stringify(resposta));
  
            for(var i = 0; i < resposta.length; i++){
                var usuario = resposta[i];

                var QtdeUsuarios = usuario.QtdeUsuarios;
            }

            var msgQtdeUsuarios = document.getElementById("txtQtdeUsuarios");
            msgQtdeUsuarios.innerHTML = `${QtdeUsuarios}`;
        });
    }else{
        throw ('Houve um erro na API!');
    }
}).catch(function (resposta) {
    console.error(resposta);
});

fetch("/usuarios/contarJornalista").then(function (resposta) {
    if(resposta.ok){
        if(resposta == 204){
            //CONSERTAR AQ
        }
        resposta.json().then(function (resposta) {
            console.log("Jornalistas recebidos: ", JSON.stringify(resposta));
  
            for(var i = 0; i < resposta.length; i++){
                var jornalista = resposta[i];

                var QtdeJornalista = jornalista.QtdeJornalistas;
            }

            var msgQtdeJornalistas = document.getElementById("txtQtdeJornalistas");
            msgQtdeJornalistas.innerHTML = `${QtdeJornalista}`;
        });
    }else{
        throw ('Houve um erro na API!');
    }
}).catch(function (resposta) {
    console.error(resposta);
});