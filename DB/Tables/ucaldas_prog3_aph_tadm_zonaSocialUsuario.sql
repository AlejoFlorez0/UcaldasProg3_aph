CREATE DATABASE  IF NOT EXISTS `ucaldas_prog3_aph` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `ucaldas_prog3_aph`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
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
-- Table structure for table `tadm_zonaSocialUsuario`
--

DROP TABLE IF EXISTS `tadm_zonaSocialUsuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tadm_zonaSocialUsuario` (
  `idZonaSocial` int(11) NOT NULL,
  `nroDocumento` int(11) NOT NULL,
  `fechaUso` datetime DEFAULT NULL,
  PRIMARY KEY (`idZonaSocial`,`nroDocumento`),
  UNIQUE KEY `fechaUso_UNIQUE` (`fechaUso`),
  KEY `fk_tadm_zonaSocialUsuario_nroDocumento_idx` (`nroDocumento`),
  CONSTRAINT `fk_tadm_zonaSocialUsuario_idZonaSocial` FOREIGN KEY (`idZonaSocial`) REFERENCES `tadm_zonaSocial` (`idZonaSocial`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tadm_zonaSocialUsuario_nroDocumento` FOREIGN KEY (`nroDocumento`) REFERENCES `tus_usuario` (`nroDocumento`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-15 17:11:11
