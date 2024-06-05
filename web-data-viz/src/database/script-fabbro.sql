CREATE DATABASE Fabbro;  

USE Fabbro;  

  

 

CREATE TABLE usuario (  

idUsuario INT PRIMARY KEY AUTO_INCREMENT,   

nome VARCHAR (45),  

email VARCHAR (45),   

senha VARCHAR (20)  

);  

  

CREATE TABLE carros (   

idCarro INT PRIMARY KEY AUTO_INCREMENT,  

nome VARCHAR (45),  

descricao VARCHAR (100)  

);   

  

INSERT INTO carros (nome, descricao) VALUES  

('FERRARI 250 GTO', 'Uma das Ferraris mais icônicas e valiosas já produzidas'),  

('FORD MUSTANG 69', 'Um clássico muscle car americano de 1969'),  

('FORD MUSTANG FIRST GENERATION', 'O primeiro modelo de produção do famoso Mustang'),  

('LAMBORGHINI MIURA', 'Considerado o primeiro supercarro do mundo, fabricado pela Lamborghini'),  

('JAGUAR E-TYPE', 'Um dos carros esportivos mais bonitos e famosos da Jaguar'),  

('CHEVROLET CORVETTE', 'O clássico esportivo americano da Chevrolet'),  

('ASTON MARTIN', 'Luxuosos e potentes carros esportivos britânicos'),  

('BMW 507', 'Um raro e elegante roadster alemão produzido pela BMW'),  

('CHEVROLET BEL AIR (TRI FIVE)', 'Um icônico carro americano dos ano 1950'),  

('JAGUAR XK 120', 'Um dos primeiros carros esportivos pós-guerra da Jaguar, conhecido por sua velocidade');   

  

CREATE TABLE teste (  

idTeste INT PRIMARY KEY,  

resultado VARCHAR(45), 

descricao VARCHAR(45) 

 ); 

 

INSERT INTO teste (idTeste) VALUES 

(1); 

  

CREATE TABLE historicoTestes (  

idHistorico INT auto_increment, 

fkUsuario INT,  

CONSTRAINT  FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario),  

fkTeste INT ,  

CONSTRAINT  FOREIGN KEY (fkTeste) REFERENCES teste (idTeste),  

fkCarro INT,  

CONSTRAINT  FOREIGN KEY (fkCarro) REFERENCES carros (idCarro),   

PRIMARY KEY (idHistorico, fkUsuario, fkTeste), 

dtTeste DATETIME, 

pontuacao INT 

);   

  

SELECT * FROM usuario;  

SELECT * FROM carros;  

SELECT * FROM teste;  

SELECT * FROM historicoTestes;  

  

  

  

SELECT COUNT(DISTINCT fkUsuario) AS total_pessoas_teste  

FROM historicoTestes;  

 

SELECT c.nome AS carro, COUNT(ht.fkUsuario) AS total_pessoas  

FROM historicoTestes ht  

JOIN carros c ON ht.fkCarro = c.idCarro  

WHERE c.idCarro = X  

GROUP BY c.nome;  

  

  

  

SELECT u.nome, COUNT(ht.idHistorico) AS total_testes  

FROM usuario u  

JOIN historicoTestes ht ON u.idUsuario = ht.fkUsuario  

GROUP BY u.nome;  

  

  

  

SELECT AVG(total_testes) AS media_testes_por_usuario  

FROM ( SELECT COUNT(ht.idHistorico) AS total_testes  

    FROM historicoTestes ht  

    GROUP BY ht.fkUsuario  

) AS subquery;  

  

SELECT u.nome AS usuario, c.nome AS carro, ht.dtTeste  

FROM historicoTestes ht  

JOIN usuario u ON ht.fkUsuario = u.idUsuario  

JOIN carros c ON ht.fkCarro = c.idCarro  

ORDER BY ht.dtTeste;  

  

  

 

 