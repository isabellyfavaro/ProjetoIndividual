CREATE DATABASE Fabbro;  
USE Fabbro;  

CREATE TABLE usuario (  
idUsuario INT PRIMARY KEY AUTO_INCREMENT,   
nome VARCHAR (45),  
email VARCHAR (45),   
senha VARCHAR (20)  
);  

CREATE TABLE teste (  
idTeste INT PRIMARY KEY,  
resultado VARCHAR(45), 
descricao VARCHAR(45)
 ); 

INSERT INTO teste (idTeste) VALUES 
(1); 

CREATE TABLE historicoTeste (  
idHistorico INT auto_increment, 
fkUsuario INT,  
CONSTRAINT  FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario),  
fkTeste INT ,  
CONSTRAINT  FOREIGN KEY (fkTeste) REFERENCES teste (idTeste),  
carro VARCHAR(45),    
PRIMARY KEY (idHistorico, fkUsuario, fkTeste), 
dtTeste DATETIME, 
pontuacao INT 
);   

SELECT * FROM usuario;  
SELECT * FROM carros;  
SELECT * FROM teste;  
SELECT * FROM historicoTeste;  
  
SELECT carro FROM historicoTeste WHERE fkUsuario = 4;
SELECT COUNT(fkUsuario) FROM historicoTeste WHERE carro LIKE 'Ferrari 250 GTO';
SELECT COUNT(fkUsuario)  FROM historicoTeste WHERE carro LIKE 'Jaguar';

SELECT carro AS carro, COUNT(fkUsuario) AS total_usuarios 
	FROM historicoTeste
	GROUP BY carro;

SELECT u.nome AS nome_usuario, ht.carro AS carro_escolhido
FROM historicoTeste ht
JOIN usuario u ON ht.fkUsuario = u.idUsuario;


select COUNT(fkUsuario) from historicoTeste
where carro = 'Jaguar';

select *from usuario;