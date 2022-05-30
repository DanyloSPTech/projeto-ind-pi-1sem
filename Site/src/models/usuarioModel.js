var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(username, nome, email, senha, dataNasc, jogo) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, username, jogo, dataNasc);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Usuario (username, nome, email, senha, dataNasc, jogo, nivelAcesso) VALUES ('${username}', '${nome}', '${email}', '${senha}', '${dataNasc}', '${jogo}', 1);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarJornalista(username, nome, email, senha, dataNasc, jogo){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, username, jogo, dataNasc);

    var instrucao = `
        INSERT INTO Usuario (username, nome, email, senha, dataNasc, jogo, nivelAcesso) VALUES ('${username}', '${nome}', '${email}', '${senha}', '${dataNasc}', '${jogo}', 2);
    `;

    console.log("Executando a instrução SQL: \n " + instrucao);
    return database.executar(instrucao);
}

function contarJogo(){
    var instrucao = `
        SELECT jogo, COUNT(jogo) AS 'QtdePessoas' FROM usuario GROUP BY jogo;
    `;

    console.log("Executando a instrução SQL: \n " + instrucao);
    return database.executar(instrucao);
}

function jogoDestaque(){
    var instrucao = `
        SELECT jogo, COUNT(jogo) AS 'QtdeAparicoes' FROM usuario GROUP BY jogo;
    `;
    console.log("Executando a instrução SQL: \n " + instrucao);
    return database.executar(instrucao);
}

function contarUsuario(){
    var instrucao = `
        SELECT COUNT(idUsuario) AS 'QtdeUsuarios' FROM usuario WHERE nivelAcesso = 1;
    `;
    console.log("Executando a instrução SQL: \n " + instrucao);
    return database.executar(instrucao);
}

function contarJornalista(){
    var instrucao = `
        SELECT COUNT(idUsuario) AS 'QtdeJornalistas' FROM usuario WHERE nivelAcesso = 2;
    `;
    console.log("Executando a instrução SQL: \n " + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    cadastrarJornalista,
    listar,
    contarJogo,
    contarUsuario,
    contarJornalista,
    jogoDestaque
};