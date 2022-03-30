-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 34.201.68.65    Database: ucaldas_prog3_aph
-- ------------------------------------------------------
-- Server version	5.7.33-0ubuntu0.16.04.1

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
-- Table structure for table `tfac_creditoInmuebles`
--

DROP TABLE IF EXISTS `tfac_creditoInmuebles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tfac_creditoInmuebles` (
  `idCreditoInmueble` int(11) NOT NULL,
  `idInmueble` int(11) NOT NULL,
  `saldo` int(11) NOT NULL,
  PRIMARY KEY (`idCreditoInmueble`,`idInmueble`),
  KEY `fk_tfac_creditoInmuebles_idInmueble_idx` (`idInmueble`),
  CONSTRAINT `fk_tfac_creditoInmuebles_idInmueble` FOREIGN KEY (`idInmueble`) REFERENCES `tadm_inmueble` (`idInmueble`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='El saldo podrá ser credito (valores positivos) o debito (valores negativos)';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tfac_creditoInmuebles`
--

LOCK TABLES `tfac_creditoInmuebles` WRITE;
/*!40000 ALTER TABLE `tfac_creditoInmuebles` DISABLE KEYS */;
/*!40000 ALTER TABLE `tfac_creditoInmuebles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-29 19:01:43
