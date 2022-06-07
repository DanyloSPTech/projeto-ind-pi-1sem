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

CREATE TABLE Materia (
	idMateria INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR (30) NOT NULL,
    corpo VARCHAR (2726) NOT NULL,
    jogo VARCHAR (80) NOT NULL,
    fkJornalista INT,
    FOREIGN KEY (fkJornalista) REFERENCES Usuario (idUsuario)
);

CREATE TABLE Mensagem (
	idMensagem INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    texto VARCHAR (255) NOT NULL,
	fkMateria INT NOT NULL,
    fkUsuario INT NOT NULL,
    FOREIGN KEY (fkMateria) REFERENCES Materia (idMateria),
    FOREIGN KEY (fkUsuario) REFERENCES Usuario (idUsuario)
);