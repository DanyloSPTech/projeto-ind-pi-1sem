var nomeuser = sessionStorage.getItem('NOME_USUARIO');
var iduser = sessionStorage.getItem('ID_USUARIO');
var username = sessionStorage.getItem('USERNAME');
var nivelacesso = sessionStorage.getItem('NIVEL_ACESSO');

if(nomeuser != 'ADM' || iduser != 0 || username != 'The Boss' || nivelacesso != 3){
    window.location = '../index.html';
}