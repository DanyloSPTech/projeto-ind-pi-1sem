USE portalesport;

INSERT INTO Jogo (nome, tipo, dataLancamento)
	VALUES ('Counter-Strike: Global Offensive', 'FPS', '2012-08-21'),
			('League of Legends', 'MOBA', '2009-10-27'),
            ('Rainbow Six Siege', 'FPS', '2015-11-26'),
            ('Age of Empires IV', 'RTS', '2021-10-28'),
            ('Valorant', 'FPS', '2020-06-02'),
            ('Rocket League', 'Futebol', '2015-07-07'),
            ('PUBG', 'Battle Royale', '2016-07-30'),
            ('Fortnite', 'Battle Royale', '2017-07-21'),
            ('Free Fire', 'Battle Royale', '2017-11-03');
            
INSERT INTO Usuario (username, nome, email, senha, dataNasc, organizacao, nivelAcesso, fkJogo)
	VALUES ('lUc4s', 'Lucas', 'lucas@gmail.com', '123', '2004-03-12', NULL, 1, 6),
			('Guib00s', 'Guilherme', 'guilherme@gmail.com', '123', '2005-05-12', NULL, 1, 8),
            ('brTT', 'Felipe', 'felipe@gmail.com', '123', '1991-02-19', 'paiN Gaming', 1, 2),
            ('Kami', 'Gabriel', 'gabriel@gmail.com', '123', '1996-04-02', 'paiN Gaming', 1, 2),
            ('Cariok', 'Marcos Santos', 'marcosss@gmail.com', '123', '2000-01-31', 'paiN Gaming', 1, 2),
            ('dyNquedo', 'Matheus Rossini', 'matherossi@gmail.com', '123', '1997-10-14', 'paiN Gaming', 1, 2),
            ('Trigo', 'Matheus Trigo', 'mathetrigo@gmail.com', '123', '1996-05-02', 'paiN Gaming', 1, 2),
            ('Damage', 'Yan Sales', 'yansales@gmail.com', '123', '1997-06-20', 'paiN Gaming', 1, 2),
            ('Mylon', 'Matheus Borges', 'matheborges@gmail.com', '123', '1992-08-03', 'paiN Gaming', 1, 2),
            ('jUc', 'César Barbosa', 'cesar@gmail.com', '123', '1995-10-21', 'paiN Gaming', 1, 2),
            ('Paada', 'Arthur Zarzur', 'paada@gmail.com', '123', '1985-11-05', 'paiN Gaming', 1, 2),
            ('raizen', 'Jaime Pádua', 'jaime@gmail.com', '123', '1987-05-21', 'Fúria', 1, 1),
            ('tacitus', 'Marcos Castilho', 'tacitus@gmail.com', '123', '1999-11-25', 'Fúria', 1, 1),
            ('ableJ', 'Rinaldo Moura', 'ablej@gmail.com', '123', '1998-11-05', 'Fúria', 1, 1),
            ('KSCERATO', 'Kaike Cerato', 'kscerato@gmail.com', '123', '1999-09-12', 'Fúria', 1, 1),
            ('arT', 'Andrei Piovezan', 'art@gmail.com', '123', '1996-03-27', 'Fúria', 1, 1),
            ('fNb', 'Francisco Braz', 'fnb@gmail.com', '123', '2000-02-03', 'Fúria', 1, 2),
            ('btt', 'Thiago Monteiro', 'btt@gmail.com', '123', '1986-04-15', 'mibr', 1, 1),
            ('cogu', 'Raphael Camargo', 'cogu@gmail.com', '123', '1985-04-19', 'mibr', 1, 1),
            ('gAuLeS', 'Alexandre Borba', 'gaules@gmail.com', '123', '1983-12-02', 'mibr', 1, 1),
            ('PlayHard', 'Bruno', 'phard@gmail.com', '123', '1994-05-02', 'LOUD', 1, 9),
            ('Robo', 'Leornardo Souza', 'robo@gmail.com', '123', '1998-04-22', 'LOUD', 1, 2),
            ('Cauan7', 'Cauan Santos', 'cauan@gmail.com', '123', '2004-04-02', 'LOUD', 1, 9),
            ('Bradoock', 'Samuel Borges', 'bradoock@gmail.com', '123', '2002-06-12', 'LOUD', 1, 9),
            ('Babi', 'Bárbara Passos', 'babi@gmail.com', '123', '2003-09-21', 'LOUD', 1, 9),
            ('Thurzin', 'Arthur Fernandes', 'thurzin@gmail.com', '123', '2006-08-29', 'LOUD', 1, 9),
            ('CORINGA', 'Victor Augusto', 'coringa@gmail.com', '123', '1998-03-18', 'LOUD', 1, 9),
            ('Kroonos', 'Ariano Ferreira', 'kroonos@gmail.com', '123', '2000-09-14', 'LOUD', 1, 9),
            ('Noda', 'Willian de Oliveira', 'noda@gmail.com', '123', '2005-06-12', 'LOUD', 1, 9),
            ('Will', 'William Moura', 'will@gmail.com', '123', '2001-09-21', 'LOUD', 1, 9),
            ('micaO', 'Mical Rodrigues', 'micao@gmail.com', '123', '1991-03-21', 'INTZ', 1, 2),
            ('Jockster', 'Luan Cardoso', 'jockster@gmail.com', '123', '1987-07-21', 'INTZ', 1, 2),
            ('Betão', 'Noberto Motta', 'betao@gmail.com', '123', '2002-11-10', 'RED Canids', 1, 2),
            ('TitaN', 'Alexandre Lima', 'titan@gmail.com', '123', '1997-03-15', 'RED Canids', 1, 2),
            ('Aegis', 'Gabriel Lemos', 'aegis@gmail.com', '123', '2001-01-18', 'RED Canids', 1, 2),
            ('YoDa', 'Felipe Noronha', 'yoda@gmail.com', '123', '1993-09-18', 'RED Canids', 1, 2),
            ('Coelho', 'Coelho Rabaiolli', 'coelho@gmail.com', '123', '1989-12-10', 'RED Canids', 1, 2),
            ('Cherrygumms', 'Nicolle Merchy', 'cherry@gmail.com', '123', '1995-10-05', 'Black Dragons', 1, 3),
            ('CEBOLINHA', 'Frederico Marlon', 'cebolinha@gmail.com', '123', '2005-10-01', 'LOS GRANDES', 1, 9),
            ('Dogblack', 'Daniel Lira', 'dogblack@gmail.com', '123', '2004-06-18', 'LOS GRANDES', 1, 9),
            ('EL GATO', 'Rodrigo Fernandes', 'elgato@gmail.com', '123', '1996-09-12', 'LOS GRANDES', 1, 9),
            ('mvR', 'Marllon Pereira', 'mvr@gmail.com', '123', '2001-04-03', 'LOS GRANDES', 1, 9),
            ('RafaX', 'Carlos Henrique', 'rafax@gmail.com', '123', '2002-02-21', 'LOS GRANDES', 1, 9),
            ('Nobru', 'Bruno Goes', 'nobru@gmail.com', '123', '1998-11-29', 'Fluxo', 1, 9),
            ('Syaz', 'Jonatha Pereira', 'syaz@gmail.com', '123', '2002-03-05', 'Fluxo', 1, 9),
            ('F4K', 'Felipe Bandeira', 'f4k@gmail.com', '123', '2000-08-11', 'Fluxo', 1, 9),
            ('OUSADO', 'Emanuel Costa', 'ousado@gmail.com', '123', '2006-02-11', 'Fluxo', 1, 9),
            ('Jairo Foxer', 'Jairo Foxer', 'jairo@gmail.com', '123', '1991-01-10', NULL, 2, 3),
            ('Roque Marques', 'Roque Marques', 'roque@gmail.com', '123', '1985-12-10', NULL, 2, 1),
            ('Luis Showtana', 'Luis Carlos', 'luis@gmail.com', '123', '1992-06-05', NULL, 2, 2);
            
SELECT * FROM Usuario;
            
INSERT INTO Materia (titulo, corpo, fkJornalista, fKJogo)
	VALUES ('Mix vence "paiN Academy" e fatura Cash Cup', 'A ESEA Cash Cup voltou a agitar o cenário sul-americano neste sábado. 0001 conquistou a 9ª edição do torneio semanal após vencer a MEGAZORD, time que representará a paiN Academy, por 2 a 0 na grande final.

Pelo título, a equipe formada por jogadores de Meta, SWS e The Union receberá o prêmio de US$ 750 (pouco mais de R$ 3,8 mil, na cotação atual), enquanto os vice-campeões terão direito a premiação de US$ 250 (pouco mais de R$ 1,2 mil). A grande final começou na Dust2, que começou bastante equilibrado. Mas, com o CT arrumado, a 0001 conseguiu vencer o 1º half por 10-5. De TR, o mix aumentou a vantagem e não deu chance para adversária, fechando o jogo em 16-5.

As equipes seguiram para a Inferno. 0001 começou abrindo 4-0, mas viu a MEGAZORD virando para 5-4. O mix voltou a ficar a frente no placar e venceu o 1º half por 10-5. Assim como no mapa anterior, na metade final a 0001 foi dominante e conseguiu o triunfar por 16-5.

A ESEA Cash Cup Spring #6 sul-americana contou com a participação de seis equipes e disputada em eliminação simples. A próxima edição acontecerá de 25 a 2 deste mês.', 49, 1),
('Audiência de brasileiros ofusca playoffs da Pinnacle Cup', 'Normalmente, a fase final dos campeonatos é a que mais atrai a audiência. No entanto, na Pinnacle Cup Championship, foi a fase de grupos que teve mais espectadores, principalmente por conta dos brasileiros. Quatro dos cinco jogos mais assistidos da competição têm times do Brasil no servidor.

De acordo com a Esports Charts, os três jogos mais assistidos foram os da Imperial. A partida com o maior pico de audiência foi Astralis x Imperial, que teve 188 mil e 401 espectadores. Além do time de Lincoln "fnx" Lau, o MIBR também aparece na lista, com mais de 123 mil espectadores no duelo com a Heroic.', 48, 1),
('Mari: "Sou a prova viva que você pode chegar onde sonha"', 'Com a velha guarda ou migrando para o VALORANT, ou decidindo por se aposentar, o cenário brasileiro feminino de Counter-Strike: Global Offensive vai assistindo novos nomes surgindo e se tornando peças importantes. É o caso de Mariana "Mari" Prestes, que, com apenas um ano de profissional, já conseguiu realizar um dos próprios sonhos e levar o Brasil a uma final de campeonato mundial.

Em entrevista ao Portal e+sport, a integrante da FURIA falou não só sobre a campanha da equipe nas finais da ESL Impact Season 1, mas como a própria carreira decolou de forma exponencial ao passar de promessa quando defendia o Cruzeiro a uma realidade já vestindo a camisa alvinegra. Sincera, Mari disse que "não estava preparada" para essa evolução tão rápida pela qual passou nos últimos 12 meses. "Vai fazer um ano que eu assinei meu primeiro contrato profissional. Um ano depois eu estou na FURIA. Foi muito difícil para mim aceitar tudo isso. Por mais que seja uma coisa incrível, chegar em final de torneio, disputar campeonato internacional, jogar com as meninas que eu sempre fui fã, foi uma coisa muito difícil para eu digerir como profissional".', 49, 1),
('FURIA vence e avança na WePlay Academy League', 'A FURIA segue vivae na 4ª temporada da WePlay Academy League. A equipe brasileira venceu nas quartas de final do play-in a Prospects, equipe de base da 00Nation, por 2 a 1, com 19-17 na Overpass, 14-16 na Vertigo e 19-17 na Nuke.

Na Overpass, primeira mapa da série, as equipes fizeram um duelo acirrado. Como terrorista, a FURIA encontrou muita dificuldade no início da partida, mas conseguiu diminuir a vantagem dos europeus em 8-7. Os brasileiros conseguiram a virada logo após o pistol, mas Olle "spooke" Grundström e companhia buscaram o resultado e chegaram ao match point em 15-13, mas a FURIA forçou o empate.

No tempo extra, o time de Kaue "kauez" Kaschuk conseguiu um TR forte para fechar o jogo em 19-17.

Para a Vertigo, a Prospects substituiu Ersin "ERSIN" Chiriac com Steffen "SLY" Amundsen, e o mapa também foi equilibrado. Começando como CT, a FURIA mais uma vez teve dificuldade e saiu atrás por 6-1 antes de conseguir somar alguns pontos valiosos, que colocaram o placar em 10-5 para a Prospects. Mesmo perdendo o pistol, a FURIA conseguiu se recuperar no segundo tempo, encaixando boas sequências e virando o jogo em 14-12. Os brasileiros, porém, pararam por aí e não alcançaram o match point, perdendo por 16-14.

Na Nuke, a equipe europeia não encontrou dificuldades. A FURIA teve um novo início ruim de mapa, e, como terrorista, só conseguiu marcar quatro pontos na primeira etapa, perdendo por 11-4. A Prospects aumentou a vantagem no início da segunda etapa, mas viu os brasileiros reagirem e encaixarem uma sequência positiva para diminuir a vantagem em 14-11. A FURIA não se deu por vencida e, com Bruno "Bruninho" Rodrigues como grande destaque, conseguiu levar o jogo para a prorrogação com 15-15 - lá, a FURIA conseguiu concluir a virada com 19-17.', 48, 1),
('ARCTIC anuncia novo jogador e completa elenco', 'A escalação da ARCTIC está completa novamente após a organização anunciar nesta sexta-feira o quinto jogador. A ARCTIC revelou a contratação de Allan "history" Lawrenz.

O jogador de 18 anos já vinha atuando pela ARCTIC como substituto. Agora, history foi oficializado como um participante da lineup da equipe. Desde o dia 6 de junho, history estava defendendo a ARCTIC na Aorus League Invitational 2022. O time caiu na semifinal para a Sharks por 2 a 1, mas venceu a Stars Horizon por 16 a 6 para ficar com a terceira colocação do torneio. A ARCTIC receberá US$ 1 mil (mais de R$ 4,9 mil) em premiação.', 48, 1),
('Sharks vence UNO MILLE para conquistar a Aorus League Invitational', 'A Sharks conquistou o título da Aorus League Invitational 2022 depois de derrotar a UNO MILLE na decisão. Os Tubarões venceram a final por 2 a 0 para ficar com a primeira colocação. A Sharks começou bem na série ao abrir 12-3 no final da primeira metade na Ancient. Com a vitória encaminhada, a equipe de Rodrigo "drg" Ausenka fechou o mapa em 16-11.

Na Dust2, a UNO MILLE começou na frente da Dust2 por 8-7, porém a vantagem mínima não se manteve por muito tempo. De CT, a Sharks virou o placar para 16-9 para finalizar a série.

Com a vitória, a Sharks recebe US$ 3 mil (mais de R$ 14 mil) em premiação. Já a vice-campeã UNO MILLE ficou com US$ 2 mil (cerca de R$ 9,9 mil).', 48, 1),
('Quatro últimos classificados do CBCS Elite League são definidos', 'Competição começa no dia 22 de junho e terá 16 times
Os quatro últimos classificados para o CBCS Elite League foram definidos. Depois da primeira leva ter chegado ao campeonato na sexta-feira, Players, MIBR Academy, B4 e Redragon também garantiram suas vagas na competição.

Os jogos foram disputados neste domingo. No Grupo A, a Players venceu o Boca Jrs por 2 a 1, com 10-16 na Inferno, 16-5 na Nukle e 16-13 na Overpass. No Grupo B, a MIBR Academy fez 2 a 1 na Holkattes, com 16-10 na Inferno, 20-22 na Dust2 e 16-9 na Nuke. No Grupo C, a B4 atropelou a Liberty, com 16-6 na Mirage e 16-4 na Vertigo. Encerrando os classificados no Grupo D, a Redragon venceu a Furious por 2 a 0, com 16-10 na Mirage e 16-7 na Vertigo.

A competição já contava com outros 12 times. SWS, Rehl, Stone e Isurus se classificaram pelo play-in, enquanto UNO MILLE, Meta, INTZ Arctic, Stars Horizon, The Union, FURIA Academy, Daotsu e Los Grandes entraram diretamente no evento principal por ocuparem as oito primeiras colocações do ranking do CBCS.

O evento principal do 1º CBCS Elite League 2022 está marcado para ser disputado de 22 deste mês a 9 de julho, com a participação de 16 equipes e premiação total de R$ 100 mil.', 48, 1),
('Tinowns sobre o clássico entre LOUD e paiN: “É uma loucura”', 'A LOUD saiu derrotada do clássico contra a paiN Gaming neste domingo (12), pela segunda rodada do 2º split do CBLOL 2022. O mid laner da Tropa, Tinowns, participou da coletiva de imprensa depois do jogo e comentou que vê com bons olhos a rivalidade cada vez maior entre as duas equipes, mas principalmente entre as torcidas. Falando em jogar presencialmente, e agora com público, Tinowns afirma que leva os gritos de apoio e também cobrança de forma “engraçada”, no sentido de leve. “Não levo para o pessoal, quando entramos no palco e a galera gritou ‘que sorte a nossa’, eu acho engraçado e não vejo com maldade, tanto que passei lá e até torcedores da paiN pedindo para tirar foto.”

“Eu fico feliz, porque eu sei que tem pessoas que não entenderam minha saída e eu compreendo, são torcedores fanáticos pela paiN, então entendo o lado deles, de não gostar, mas acho legal de quem gosta, que vem conversar e pedir para tirar foto”, conta.', 50, 2),
('paiN vence a LOUD; RED e FURIA terminam 2-0 na 1° semana', 'A primeira semana do CBLOL 2022 2° split chegou ao fim neste domingo e temos dois times invictos: RED Canids e FURIA. Ambas tiveram que jogar com reservas devido a casos de COVID entre seus jogadores, mas isso não atrapalhou o ótimo desempenho que elas mostraram.

A rodada também teve um clássico entre paiN Gaming e LOUD. A partida foi disputada, mas com direito a Quadrakill do Trigo, os tradicionais garantiram a virada e venceram o embate. No momento, apenas o Flamengo LOS Grandes e RENSGA ainda não venceram. Veja os resultados completos da 2° rodada:

FURIA 1 x 0 Liberty
KaBuM 1 x 0 Flamengo LOS Grandes
Miners 1 x 0 INTZ
LOUD 0 x 1 paiN Gaming
RENSGA 0 x 1 RED Canids', 50, 2),
('VCT BR 2022: Confira os confrontos dos playoffs', 'O VCT BR 2022 está caminhando para a sua conclusão! Depois de uma fase de grupos finalizada no último sábado (12), o principal campeonato de VALORANT no país agora segue para os playoffs entre os dias 21 a 26 de julho. E já temos os confrontos definidos na fase de eliminação.

Confira quais serão os times que se enfrentarão nessa fase inicial do torneio, que conta com eliminação dupla: Primeira rodada da Winners Bracket

MIBR vs. Los Grandes
FURIA vs. Keyd Stars
Semifinal da Winners Bracket

LOUD vs. vencedor (MIBR vs. Los Grandes)
Ninjas in Pyjamas vs. vencedor (FURIA vs. Keyd Stars)', 50, 5),
('Netuno cita amadurecimento da FURIA e foca na RED', 'A FURIA encerrou seu primeiro fim de semana do 2o split do CBLOL 2022 com duas vitórias, sobre KaBuM! e Liberty. O AD Carry dos Panteras, Netuno, participou da coletiva de imprensa e conta que a equipe amadureceu desde a primeira etapa deste ano, com destaque para ele e RedBert. Principalmente eu e o RedBert, nós mudamos bastante para esse split, nossa mentalidade… Claro que todos amadureceram muito, as vitórias não têm a ver com a saída do ranger, o Goot entrou muito bem, sendo o ranger ou o goot, nós teríamos vencido os dois jogos.

Netuno também reforçou que os dois bons resultados da FURIA neste começo de 2o split são creditados ao esforço coletivo: o bom trabalho de preparação dos jogadores e também da staff da organização.

Ainda sobre sua evolução pessoal, Netuno conta os méritos devem ficar com a comissão técnica da organização, formada por Maestro, Onmeta e companhia. “Eles veem trabalhando muito bem, temos um positional coach, tivemos o bootcamp e todos jogaram muito bem.”

“Mesmo eu me destacando nesses dois jogos, com certeza o trabalho é conjunto, já que todos melhoraram bastante”, completa.

Diante do resultado positivo do fim de semana, o AD Carry admite que não esperava sair já com um 2-0 na tabela de classificação. Mesmo a equipe não conversando sobre expectativas, nem mesmo a comissão técnica, Netuno conta que não esperava um começo já com duas vitórias. “Estamos focados no processo.”

Com duas vitórias no primeiro fim de semana, num total de nove, a FURIA busca manter o ritmo para já se firmar como uma das grandes forças desta Fase Regular. Vale lembrar, apesar de seis times se classificarem aos playoffs, o Top4 ganha uma sobrevida no mata-mata, no Upper Bracket.', 50, 2);

INSERT INTO Evento (nome, dataInicio, dataFim, qtdeEquipes, premiacao, fkJogo)
	VALUES ('IEM Cologne', '2022-07-05', '2022-07-17', 24, 1000000, 1),
			('CBLOL 2º Split', '2022-06-04', '2022-09-03', 10, 25000, 2),
            ('VCT Challengers Brasil', '2022-03-07', '2022-06-26', 10, 100000, 5);