-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           8.0.31 - MySQL Community Server - GPL
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.2.0.6576
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para allan
CREATE DATABASE IF NOT EXISTS `allan` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `allan`;

-- Copiando estrutura para tabela allan.agendamentos
CREATE TABLE IF NOT EXISTS `agendamentos` (
  `id` int(2) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `dados_agendamentos` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `data_agendamento` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `pesquisador_id` int(2) unsigned zerofill NOT NULL,
  `experimento_id` int(2) unsigned zerofill NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `fk_agendamentos_pesquisador1_idx` (`pesquisador_id`),
  KEY `fk_agendamentos_experimento1_idx` (`experimento_id`),
  CONSTRAINT `fk_agendamentos_experimento1` FOREIGN KEY (`experimento_id`) REFERENCES `experimento` (`id`),
  CONSTRAINT `fk_agendamentos_pesquisador1` FOREIGN KEY (`pesquisador_id`) REFERENCES `pesquisador` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para tabela allan.equipamento
CREATE TABLE IF NOT EXISTS `equipamento` (
  `id` int(2) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `dados_equipamento` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para tabela allan.experimento
CREATE TABLE IF NOT EXISTS `experimento` (
  `id` int(2) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `data_experimento` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `dados_experimento` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `classe_experimentos` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `problemas` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `tecnico_id` int(2) unsigned zerofill NOT NULL,
  `pesquisador_id` int(2) unsigned zerofill NOT NULL,
  `reagente_id` int(2) unsigned zerofill NOT NULL,
  `equipamento_id` int(2) unsigned zerofill NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_experimento_tecnico1_idx` (`tecnico_id`),
  KEY `fk_experimento_pesquisador1_idx` (`pesquisador_id`),
  KEY `fk_experimento_reagente1_idx` (`reagente_id`),
  KEY `fk_experimento_equipamento1_idx` (`equipamento_id`),
  CONSTRAINT `fk_experimento_equipamento1` FOREIGN KEY (`equipamento_id`) REFERENCES `equipamento` (`id`),
  CONSTRAINT `fk_experimento_pesquisador1` FOREIGN KEY (`pesquisador_id`) REFERENCES `pesquisador` (`id`),
  CONSTRAINT `fk_experimento_reagente1` FOREIGN KEY (`reagente_id`) REFERENCES `reagente` (`id`),
  CONSTRAINT `fk_experimento_tecnico1` FOREIGN KEY (`tecnico_id`) REFERENCES `tecnico` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para tabela allan.pesquisador
CREATE TABLE IF NOT EXISTS `pesquisador` (
  `id` int(2) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `cpf` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `instituição` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `dados_pesquisador` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para tabela allan.reagente
CREATE TABLE IF NOT EXISTS `reagente` (
  `id` int(2) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `concentracao_reagente` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `tipo_reagente` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `nome_reagente` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para tabela allan.tecnico
CREATE TABLE IF NOT EXISTS `tecnico` (
  `id` int(2) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `nome_tecnico` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `telefone` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Exportação de dados foi desmarcado.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
