CREATE DATABASE PortalEsport;

USE PortalEsport;

CREATE TABLE Jogo (
	idJogo INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (100) NOT NULL,
    tipo VARCHAR (40) NOT NULL,
    dataLancamento DATE NOT NULL
);

CREATE TABLE Usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR (20) NOT NULL,
    nome VARCHAR (60) NOT NULL,
    email VARCHAR (75)  NOT NULL,
    senha VARCHAR (20) NOT NULL,
    dataNasc DATE NOT NULL,
    organizacao VARCHAR (85),
    nivelAcesso INT NOT NULL,
    fkJogo INT,
    FOREIGN KEY (fkJogo) REFERENCES Jogo (idJogo)
);

CREATE TABLE Materia (
	idMateria INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR (90) NOT NULL,
    corpo VARCHAR (2726) NOT NULL,
    fkJornalista INT,
    fkJogo INT,
    FOREIGN KEY (fkJornalista) REFERENCES Usuario (idUsuario),
    FOREIGN KEY (fkJogo) REFERENCES Jogo (idJogo)
);

CREATE TABLE Comentario (
	idComentario INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    texto VARCHAR (255) NOT NULL,
	fkMateria INT NOT NULL,
    fkUsuario INT NOT NULL,
    FOREIGN KEY (fkMateria) REFERENCES Materia (idMateria),
    FOREIGN KEY (fkUsuario) REFERENCES Usuario (idUsuario)
);

CREATE TABLE Evento (
	idEvento INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (100) NOT NULL,
    dataInicio DATE NOT NULL,
    dataFim DATE NOT NULL,
    qtdeEquipes INT,
    premiacao DECIMAL (12,2),
    fkJogo INT,
    FOREIGN KEY (fkJogo) REFERENCES Jogo (idJogo)
);