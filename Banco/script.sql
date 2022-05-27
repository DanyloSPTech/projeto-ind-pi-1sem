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

CREATE TABLE Materia (
	idMateria INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR (30) NOT NULL,
    corpo VARCHAR (400) NOT NULL,
    jogo VARCHAR (80) NOT NULL,
    fkJornalista INT,
    FOREIGN KEY (fkJornalista) REFERENCES Usuario (idUsuario)
);