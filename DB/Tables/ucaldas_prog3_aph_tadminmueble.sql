-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: ucaldas_prog3_aph
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `tadminmueble`
--

DROP TABLE IF EXISTS `tadminmueble`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tadminmueble` (
  `idInmueble` int NOT NULL AUTO_INCREMENT,
  `area` varchar(45) DEFAULT NULL,
  `nroDocumentoPropietario` int NOT NULL,
  `nroDocumentoHabitante` int NOT NULL,
  `idTipoInmueble` int NOT NULL,
  `idSeccion` int DEFAULT NULL,
  PRIMARY KEY (`idInmueble`),
  KEY `fk_tadm_inmueble_nroDocumentoPropietario_idx` (`nroDocumentoPropietario`),
  KEY `fk_tadm_inmueble_nroDocumentoHabitante_idx` (`nroDocumentoHabitante`),
  KEY `fk_tadm_inmueble_idTipoInmueble_idx` (`idTipoInmueble`),
  KEY `fk_tadm_inmueble_idSeccion_idx` (`idSeccion`),
  CONSTRAINT `fk_tadm_inmueble_idSeccion` FOREIGN KEY (`idSeccion`) REFERENCES `tadmseccion` (`id`),
  CONSTRAINT `fk_tadm_inmueble_idTipoInmueble` FOREIGN KEY (`idTipoInmueble`) REFERENCES `tadmtipoinmueble` (`idTipoInmueble`),
  CONSTRAINT `fk_tadm_inmueble_nroDocumentoHabitante` FOREIGN KEY (`nroDocumentoHabitante`) REFERENCES `tususuario` (`nroDocumento`),
  CONSTRAINT `fk_tadm_inmueble_nroDocumentoPropietario` FOREIGN KEY (`nroDocumentoPropietario`) REFERENCES `tususuario` (`nroDocumento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tadminmueble`
--

LOCK TABLES `tadminmueble` WRITE;
/*!40000 ALTER TABLE `tadminmueble` DISABLE KEYS */;
/*!40000 ALTER TABLE `tadminmueble` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-15 19:00:23
