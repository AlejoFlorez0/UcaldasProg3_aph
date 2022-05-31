CREATE DATABASE  IF NOT EXISTS `ucaldas_prog3_aph` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ucaldas_prog3_aph`;
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

--
-- Table structure for table `tadminmueblesadicionales`
--

DROP TABLE IF EXISTS `tadminmueblesadicionales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tadminmueblesadicionales` (
  `id` int NOT NULL AUTO_INCREMENT,
  `area` varchar(200) DEFAULT NULL,
  `tipoInmuebleAdicional` varchar(50) NOT NULL,
  `idInmueble` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tadm_inmueblesAdicionales_idInmueble_idx` (`idInmueble`),
  CONSTRAINT `fk_tadm_inmueblesAdicionales_idInmueble` FOREIGN KEY (`idInmueble`) REFERENCES `tadminmueble` (`idInmueble`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tadminmueblesadicionales`
--

LOCK TABLES `tadminmueblesadicionales` WRITE;
/*!40000 ALTER TABLE `tadminmueblesadicionales` DISABLE KEYS */;
/*!40000 ALTER TABLE `tadminmueblesadicionales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tadmmulta`
--

DROP TABLE IF EXISTS `tadmmulta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tadmmulta` (
  `idMulta` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `valor` int NOT NULL,
  `descripcion` varchar(450) DEFAULT NULL,
  PRIMARY KEY (`idMulta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tadmmulta`
--

LOCK TABLES `tadmmulta` WRITE;
/*!40000 ALTER TABLE `tadmmulta` DISABLE KEYS */;
/*!40000 ALTER TABLE `tadmmulta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tadmmultausuario`
--

DROP TABLE IF EXISTS `tadmmultausuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tadmmultausuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idMulta` int NOT NULL,
  `nroDocumento` int NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tadm_multaUsuario_nroIdentificacion_idx` (`nroDocumento`),
  KEY `fk_tadm_multaUsuario_idMulta` (`idMulta`),
  CONSTRAINT `fk_tadm_multaUsuario_idMulta` FOREIGN KEY (`idMulta`) REFERENCES `tadmmulta` (`idMulta`),
  CONSTRAINT `fk_tadm_multaUsuario_nroIdentificacion` FOREIGN KEY (`nroDocumento`) REFERENCES `tususuario` (`nroDocumento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tadmmultausuario`
--

LOCK TABLES `tadmmultausuario` WRITE;
/*!40000 ALTER TABLE `tadmmultausuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `tadmmultausuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tadmseccion`
--

DROP TABLE IF EXISTS `tadmseccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tadmseccion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(450) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tadmseccion`
--

LOCK TABLES `tadmseccion` WRITE;
/*!40000 ALTER TABLE `tadmseccion` DISABLE KEYS */;
INSERT INTO `tadmseccion` VALUES (1,'Torre 1','Torre Principal'),(2,'Torre 2','Torre Principal'),(3,'Torre 3','Torre Principal'),(4,'Torre 4','Torre Principal'),(5,'Torre 5','Torre Principal'),(6,'Torre 6','Torre Babel'),(7,'Torre 7','Torre Eureka'),(8,'Torre 8','Torre Tintin'),(9,'Torre 9','Torre Milu'),(10,'Torre 11','Torre Tornasol'),(11,'Torre 11','Torre Tornasol');
/*!40000 ALTER TABLE `tadmseccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tadmtipoinmueble`
--

DROP TABLE IF EXISTS `tadmtipoinmueble`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tadmtipoinmueble` (
  `idTipoInmueble` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `descripcion` varchar(400) DEFAULT NULL,
  PRIMARY KEY (`idTipoInmueble`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tadmtipoinmueble`
--

LOCK TABLES `tadmtipoinmueble` WRITE;
/*!40000 ALTER TABLE `tadmtipoinmueble` DISABLE KEYS */;
INSERT INTO `tadmtipoinmueble` VALUES (1,'Apartamento',NULL),(2,'Casa',NULL),(3,'Apartaestudio',NULL),(4,'Local',NULL);
/*!40000 ALTER TABLE `tadmtipoinmueble` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tadmzonasocial`
--

DROP TABLE IF EXISTS `tadmzonasocial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tadmzonasocial` (
  `idZonaSocial` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `rutaFotografia` varchar(200) DEFAULT NULL,
  `descripcion` varchar(450) DEFAULT NULL,
  `costoAlquiler` int NOT NULL,
  `horarioAcceso` varchar(50) NOT NULL,
  PRIMARY KEY (`idZonaSocial`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tadmzonasocial`
--

LOCK TABLES `tadmzonasocial` WRITE;
/*!40000 ALTER TABLE `tadmzonasocial` DISABLE KEYS */;
/*!40000 ALTER TABLE `tadmzonasocial` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tadmzonasocialusuario`
--

DROP TABLE IF EXISTS `tadmzonasocialusuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tadmzonasocialusuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idZonaSocial` int NOT NULL,
  `nroDocumento` int NOT NULL,
  `fechaUso` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `fechaUso_UNIQUE` (`fechaUso`),
  KEY `fk_tadm_zonaSocialUsuario_nroDocumento_idx` (`nroDocumento`),
  KEY `fk_tadm_zonaSocialUsuario_idZonaSocial` (`idZonaSocial`),
  CONSTRAINT `fk_tadm_zonaSocialUsuario_idZonaSocial` FOREIGN KEY (`idZonaSocial`) REFERENCES `tadmzonasocial` (`idZonaSocial`),
  CONSTRAINT `fk_tadm_zonaSocialUsuario_nroDocumento` FOREIGN KEY (`nroDocumento`) REFERENCES `tususuario` (`nroDocumento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tadmzonasocialusuario`
--

LOCK TABLES `tadmzonasocialusuario` WRITE;
/*!40000 ALTER TABLE `tadmzonasocialusuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `tadmzonasocialusuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tfaccreditoinmuebles`
--

DROP TABLE IF EXISTS `tfaccreditoinmuebles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tfaccreditoinmuebles` (
  `idCreditoInmueble` int NOT NULL,
  `idInmueble` int NOT NULL,
  `valor` int NOT NULL,
  `motivo` varchar(500) NOT NULL,
  PRIMARY KEY (`idCreditoInmueble`,`idInmueble`),
  KEY `fk_tfac_creditoInmuebles_idInmueble_idx` (`idInmueble`),
  CONSTRAINT `fk_tfac_creditoInmuebles_idInmueble` FOREIGN KEY (`idInmueble`) REFERENCES `tadminmueble` (`idInmueble`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='El saldo podrá ser credito (valores positivos)';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tfaccreditoinmuebles`
--

LOCK TABLES `tfaccreditoinmuebles` WRITE;
/*!40000 ALTER TABLE `tfaccreditoinmuebles` DISABLE KEYS */;
/*!40000 ALTER TABLE `tfaccreditoinmuebles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tfacdebitoinmuebles`
--

DROP TABLE IF EXISTS `tfacdebitoinmuebles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tfacdebitoinmuebles` (
  `idDebitoInmueble` int NOT NULL,
  `idInmueble` int NOT NULL,
  `valor` int NOT NULL,
  `motivo` varchar(500) NOT NULL,
  PRIMARY KEY (`idDebitoInmueble`,`idInmueble`),
  KEY `fk_tfac_debitoInmuebles_idInmueble_idx` (`idInmueble`),
  CONSTRAINT `fk_tfac_debitoInmuebles_idInmueble` FOREIGN KEY (`idInmueble`) REFERENCES `tadminmueble` (`idInmueble`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='El saldo podrá ser debito (valores negativos)';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tfacdebitoinmuebles`
--

LOCK TABLES `tfacdebitoinmuebles` WRITE;
/*!40000 ALTER TABLE `tfacdebitoinmuebles` DISABLE KEYS */;
/*!40000 ALTER TABLE `tfacdebitoinmuebles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tgeparametros`
--

DROP TABLE IF EXISTS `tgeparametros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tgeparametros` (
  `etiqueta` varchar(200) NOT NULL,
  `valor` varchar(120) NOT NULL,
  PRIMARY KEY (`etiqueta`,`valor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tgeparametros`
--

LOCK TABLES `tgeparametros` WRITE;
/*!40000 ALTER TABLE `tgeparametros` DISABLE KEYS */;
/*!40000 ALTER TABLE `tgeparametros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tusrol`
--

DROP TABLE IF EXISTS `tusrol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tusrol` (
  `idRol` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(450) DEFAULT NULL,
  PRIMARY KEY (`idRol`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tusrol`
--

LOCK TABLES `tusrol` WRITE;
/*!40000 ALTER TABLE `tusrol` DISABLE KEYS */;
INSERT INTO `tusrol` VALUES (1,'Administrador',NULL),(2,'Propietarios',NULL),(3,'Contador',NULL),(4,'Revisor fiscal',NULL),(5,'Vigilantes',NULL),(6,'Habitantes',NULL),(7,'Ama de llaves','Ama de llaves');
/*!40000 ALTER TABLE `tusrol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tususuario`
--

DROP TABLE IF EXISTS `tususuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tususuario` (
  `nroDocumento` int NOT NULL,
  `primerNombre` varchar(80) NOT NULL,
  `segundoNombre` varchar(80) DEFAULT NULL,
  `primerApellido` varchar(200) NOT NULL,
  `segundoApellido` varchar(200) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `celular` varchar(10) DEFAULT NULL,
  `rolId` int NOT NULL,
  PRIMARY KEY (`nroDocumento`),
  KEY `fk_tusrol_rolid_idx` (`rolId`),
  CONSTRAINT `fk_tusrol_rolid` FOREIGN KEY (`rolId`) REFERENCES `tusrol` (`idRol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tususuario`
--

LOCK TABLES `tususuario` WRITE;
/*!40000 ALTER TABLE `tususuario` DISABLE KEYS */;
INSERT INTO `tususuario` VALUES (1053860746,'Alejandro',NULL,'González','Flórez','Alejandro.1701913677@ucaldas.edu.co','5a02f8614d46213d8d9be36ef4fb3a80','3215238170',1),(1057098765,'Frailejon','Hernesto','Perez',' ','FPerez@upscloud.com','69ba109c895658f4c0f163c5fd8c4898','321098765',4),(1057118765,'José','David','González','Villa','jdgv@upscloud.com','1234','3217653222',1),(1057118766,'Stick','Man','Ups','Cloud','stickman@upscloud.com','5a02f8614d46213d8d9be36ef4fb3a80','3217653221',1),(1057118767,'Stick','Man2','Ups','Cloud','stickman2@upscloud.com','ed6e9e9123f8840b26e8c28963a5f4f6','3217653221',3),(1057118768,'Stick','Man3','Ups','Cloud','stickman3@upscloud.com','69ba109c895658f4c0f163c5fd8c4898','3217653221',1),(1060098654,'Angus',' ','F','A','Angus@upscloud.com','647612bceac239393559265e5f61fac7','321456765',1),(1060098655,'Wenora',' ','F','A','Angus@upscloud.com','f43d1ab249991f8f8de1d38b74d6d0e9','321456761',1);
/*!40000 ALTER TABLE `tususuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-31  9:30:54
