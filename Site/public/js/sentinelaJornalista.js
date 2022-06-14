var nivelacesso = sessionStorage.getItem('NIVEL_ACESSO');

if(nivelacesso != 2){
    sessionStorage.clear();
    window.location = '../index.html';
}