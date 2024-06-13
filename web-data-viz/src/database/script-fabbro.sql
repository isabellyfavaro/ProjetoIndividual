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

INSERT INTO historicoTeste VALUES 
(11, 1, 1, 'Jaguar', '2024-06-09 10:00:00', 1),
(12, 1, 1, 'Chevrolet E-TYPE', '2024-06-09 10:00:00', 4),
(13, 1, 1, 'Ferrari 250 GTO', '2024-06-09 10:00:00', 2),
(14, 1, 1, 'Ford Mustang 69', '2024-06-09 10:00:00', 3),
(15, 1, 1, 'Jaguar', '2024-06-09 10:00:00', 1),
(16, 1, 1, 'Chevrolet E-TYPE', '2024-06-09 10:00:00', 4),
(17, 1, 1, 'Ferrari 250 GTO', '2024-06-09 10:00:00', 2),
(18, 1, 1, 'Ford Mustang 69', '2024-06-09 10:00:00', 3),
(19, 1, 1, 'Jaguar', '2024-06-09 10:00:00', 1),
(20, 1, 1, 'Chevrolet E-TYPE', '2024-06-09 10:00:00', 4),
(21, 1, 1, 'Ferrari 250 GTO', '2024-06-09 10:00:00', 2),
(22, 1, 1, 'Ford Mustang 69', '2024-06-09 10:00:00', 3),
(23, 1, 1, 'Jaguar', '2024-06-09 10:00:00', 1);

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