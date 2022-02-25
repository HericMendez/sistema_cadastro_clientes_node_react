-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: db_cadastro
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client` (
  `id` varchar(100) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `cpf` varchar(100) NOT NULL,
  `data_criacao` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cpf` (`cpf`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` VALUES ('47b904c3-efd1-4ee0-a124-2c9029f6320e','Pedro Undefined','222212332','2022-02-24 20:47:41'),('af199bdf-7002-41d6-a083-b6190aedf6f8','José Placeholder','3333','2022-02-23 00:23:11');
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `endereco`
--

DROP TABLE IF EXISTS `endereco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `endereco` (
  `id` varchar(100) NOT NULL,
  `rua` varchar(100) NOT NULL,
  `cidade` varchar(100) NOT NULL,
  `client_id` varchar(100) DEFAULT NULL,
  `principal` tinyint(1) DEFAULT '0',
  `estado` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `client_id` (`client_id`),
  CONSTRAINT `endereco_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `client` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `endereco`
--

LOCK TABLES `endereco` WRITE;
/*!40000 ALTER TABLE `endereco` DISABLE KEYS */;
INSERT INTO `endereco` VALUES ('0b729622-a443-4f2f-9690-a2ab12b0ae6c','aaa','cidade','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,'São Pauloaaaa'),('0c944489-9e1a-416c-acfd-5c3ea73b1fa1','aaa','nodataaaaaaaaaaaaa','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,'São Pauloaaaa'),('102acefd-31f0-4cac-b80c-82b878e39446','kkkkk','','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,''),('2859c292-921f-4ab0-88ff-111120ce570e','aaa','nodataaaaaaaaaaaaa',NULL,0,'São Pauloaaaa'),('30ef3768-dbd7-46de-9ee7-a0dd12200815','','','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,''),('32013c47-28ac-4d8c-850a-19e54360cc34','Rua 7 de Setembro, nº 1045, Centro}','nodata','af199bdf-7002-41d6-a083-b6190aedf6f8',0,'São Paulo'),('3336431a-4c4f-4c92-9e65-5d1b319327c8','222','nodata','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,'São Paulo'),('347bc604-c83e-4364-89b2-eb4f3b02f16e','kkkkk','','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,''),('37c8ccbe-5cdd-4d6c-87d5-cc05fd9f86e0','','','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,''),('38ddeae1-b0df-4e3f-b091-ba8506a67412','','','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,''),('3af37142-9022-4ad4-9da8-7eac699eb584','','','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,''),('41f8d09f-6ec2-43ea-bb59-b616a4d26749','kkkkk','','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,''),('47909c5c-6e1e-41b7-8b8c-ebf9da3a5aad','','','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,''),('4b07c449-5a83-4608-9586-ad1e6165f1c5','aaa','nodataaaaaaaaaaaaa','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,'São Pauloaaaa'),('549d27d8-2e4c-4754-af37-66a95b37682e','','','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,''),('58a85426-a405-4d0f-9011-a71c8d827039','','','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,''),('5b67a621-f983-405c-b5a8-e6b96f7ec9dc','222','nodata','af199bdf-7002-41d6-a083-b6190aedf6f8',0,'São Paulo'),('5eb3de0a-362c-4f34-8360-66bdf217b371','aaa','nodataaaaaaaaaaaaa','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,'São Pauloaaaa'),('6355502b-435e-4f10-8732-7b5ad996841d','','','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,''),('6a5edd02-a114-4291-9608-7c5ea16921b7','','','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,''),('7733547f-90fe-4823-8f52-8f55b91577f8','kkkkk','','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,''),('7f99bc56-ed99-4afb-9b88-c9b149323ded','aaa','nodataaaaaaaaaaaaa','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,'São Pauloaaaa'),('83562d36-5ffa-4169-8002-71446417c93f','','','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,''),('9502acad-7625-4399-9365-47aae55b35ec','aaa','nodataaaaaaaaaaaaa','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,'São Pauloaaaa'),('96a5b28f-23ba-4eb2-bf25-4631db0d018a','','','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,''),('a30416cd-a13a-4be6-81c0-aa12d1efb8d7','','','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,''),('a3ea2fc0-4abf-40c1-bd83-72839c587195','kkkkk','','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,''),('ab789f0b-4848-4a1b-a42d-9b47bf52f69d','aaa','cidade','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,'São Pauloaaaa'),('ae423877-91b7-445e-b5ca-469bb861f006','aaa','cidade','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,'São Pauloaaaa'),('b5d8fa1f-0d2f-44e1-bfd6-5621bea75d3f','kkkkk','','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,''),('b7c3c1f5-3b52-4e0a-916d-8a76d5c2b575','','','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,''),('bcab923f-cdb9-44b2-a7c2-456cb47fe410','kkkkk','','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,''),('bee961a1-e7dc-4c29-8cee-831e743db5a7','kkkkk','','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,''),('cbba3ba3-9bfc-4eaf-9341-7e4337ffd1ec','aaa','nodataaaaaaaaaaaaa','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,'São Pauloaaaa'),('d0deaaed-912c-4ed7-8682-7b5c7338f45b','','','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,''),('d520c5c8-a242-4018-8545-efdfe715782d','aaa','nodataaaaaaaaaaaaa','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,'São Pauloaaaa'),('d5a08c2c-7e69-40fd-a587-d58ecaf91efc','','','47b904c3-efd1-4ee0-a124-2c9029f6320e',1,''),('da79905c-22d9-4ab3-8b30-6db2fc6b2a18','kkkkk','nodataaaaaaaaaaaaa',NULL,0,'São Pauloaaaa'),('e505ef9a-ac93-4d67-a83f-3df5e88365fd','aaa','nodataaaaaaaaaaaaa',NULL,0,'São Pauloaaaa'),('f7caface-d076-4f34-a463-7ab40a4acc59','','','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,''),('f9b2399f-dd28-4297-87e9-476beace33ad','','','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,''),('fba6be05-339e-4a2d-a565-78d620ee869d','aaa','nodataaaaaaaaaaaaa','47b904c3-efd1-4ee0-a124-2c9029f6320e',0,'São Pauloaaaa');
/*!40000 ALTER TABLE `endereco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `timestamp` bigint NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,1645054744949,'CreateClient1645054744949'),(2,1645061730019,'CreateAddress1645061730019'),(3,1645062829408,'CreatePhoneNumbers1645062829408'),(4,1645146373543,'CreateEndereco1645146373543');
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `telefone`
--

DROP TABLE IF EXISTS `telefone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `telefone` (
  `id` varchar(100) NOT NULL,
  `numero_telefone` varchar(15) NOT NULL,
  `client_id` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `client_id` (`client_id`),
  CONSTRAINT `telefone_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `client` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `telefone`
--

LOCK TABLES `telefone` WRITE;
/*!40000 ALTER TABLE `telefone` DISABLE KEYS */;
INSERT INTO `telefone` VALUES ('177d01e3-c2c6-43e0-aebf-de0d2adebd62','222222','47b904c3-efd1-4ee0-a124-2c9029f6320e'),('17ff912e-2433-4655-92da-0abbfaf67b82','222222','af199bdf-7002-41d6-a083-b6190aedf6f8'),('1990af3f-1847-4595-8e5a-1e3bd0755c7e','222222',NULL),('1a6c4a92-0581-4451-8b90-0f220a34d6fc','1234-5678','47b904c3-efd1-4ee0-a124-2c9029f6320e'),('422c3d3c-5d14-467b-af3d-fe6d5bf1b5bf','0000-0000','af199bdf-7002-41d6-a083-b6190aedf6f8'),('6838ad02-db33-4c72-99a7-9bd849dff7a9','222222','af199bdf-7002-41d6-a083-b6190aedf6f8'),('8102d893-0039-4653-9c69-98973b5e283a','222222','af199bdf-7002-41d6-a083-b6190aedf6f8'),('a17e181b-ff6f-4afc-b804-a7ee7c92edad','222222','47b904c3-efd1-4ee0-a124-2c9029f6320e'),('a3ec4143-777d-4ca9-b967-d79b09398e35','222222','47b904c3-efd1-4ee0-a124-2c9029f6320e'),('a5c58c41-582a-492d-a19c-0a68ea6daa51','222222',NULL),('d482c672-20b7-42f7-b241-842720e31dfb','222222','af199bdf-7002-41d6-a083-b6190aedf6f8'),('f8d419bd-33bf-44f0-8fe8-75ca4d89f2c2','222222','af199bdf-7002-41d6-a083-b6190aedf6f8');
/*!40000 ALTER TABLE `telefone` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-25  5:49:12
