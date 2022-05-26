var nivelAcesso = Number(sessionStorage.getItem('NIVEL_ACESSO'));

if(nivelAcesso > 0){
    var nomeUser = sessionStorage.getItem('NOME_USUARIO');

    btnDeslogado1.style.display = 'none';
    btnDeslogado2.style.display = 'none';
    nomeUserLogado.style.display = 'block';
    btnDeslogar.style.display = 'block';
    nomeUserLogado.innerHTML = `Olá ${nomeUser}`;
}