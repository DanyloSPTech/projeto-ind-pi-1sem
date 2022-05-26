-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para workbench - local - desenvolvimento */
CREATE DATABASE PortalEsport;

USE PortalEsport;

CREATE TABLE Usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR (20) NOT NULL,
    nome VARCHAR (60) NOT NULL,
    email VARCHAR (25)  NOT NULL,
    senha VARCHAR (20) NOT NULL,
    dataNasc DATE NOT NULL,
    jogo VARCHAR (50) NOT NULL,
    nivelAcesso INT NOT NULL
);

CREATE TABLE Topico (
	idTopico INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR (75) NOT NULL,
    texto VARCHAR (255) NOT NULL
)AUTO_INCREMENT = 1337;

CREATE TABLE Mensagem (
	fkTopico INT NOT NULL,
    fkUsuario INT NOT NULL,
    idMensagem INT NOT NULL,
    titulo VARCHAR (75) NOT NULL,
    texto VARCHAR (255) NOT NULL,
    FOREIGN KEY (fkTopico) REFERENCES Topico (idTopico),
    FOREIGN KEY (fkUsuario) REFERENCES Usuario (idUsuario),
    PRIMARY KEY (idMensagem, fkTopico, fkUsuario)
);