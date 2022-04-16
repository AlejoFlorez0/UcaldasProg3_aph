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
-- Table structure for table `tadm_inmueble`
--

DROP TABLE IF EXISTS `tadm_inmueble`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tadm_inmueble` (
  `idInmueble` int(11) NOT NULL AUTO_INCREMENT,
  `area` varchar(45) DEFAULT NULL,
  `nroDocumentoPropietario` int(11) NOT NULL,
  `nroDocumentoHabitante` int(11) NOT NULL,
  `idTipoInmueble` int(11) NOT NULL,
  `idSeccion` int(11) DEFAULT NULL,
  PRIMARY KEY (`idInmueble`),
  KEY `fk_tadm_inmueble_nroDocumentoPropietario_idx` (`nroDocumentoPropietario`),
  KEY `fk_tadm_inmueble_nroDocumentoHabitante_idx` (`nroDocumentoHabitante`),
  KEY `fk_tadm_inmueble_idTipoInmueble_idx` (`idTipoInmueble`),
  KEY `fk_tadm_inmueble_idSeccion_idx` (`idSeccion`),
  CONSTRAINT `fk_tadm_inmueble_idSeccion` FOREIGN KEY (`idSeccion`) REFERENCES `tadm_seccion` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tadm_inmueble_idTipoInmueble` FOREIGN KEY (`idTipoInmueble`) REFERENCES `tadm_tipoInmueble` (`idTipoInmueble`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tadm_inmueble_nroDocumentoHabitante` FOREIGN KEY (`nroDocumentoHabitante`) REFERENCES `tus_usuario` (`nroDocumento`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tadm_inmueble_nroDocumentoPropietario` FOREIGN KEY (`nroDocumentoPropietario`) REFERENCES `tus_usuario` (`nroDocumento`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tadm_inmueble`
--

LOCK TABLES `tadm_inmueble` WRITE;
/*!40000 ALTER TABLE `tadm_inmueble` DISABLE KEYS */;
/*!40000 ALTER TABLE `tadm_inmueble` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tadm_inmueblesAdicionales`
--

DROP TABLE IF EXISTS `tadm_inmueblesAdicionales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tadm_inmueblesAdicionales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `area` varchar(200) DEFAULT NULL,
  `tipoInmuebleAdicional` varchar(50) NOT NULL,
  `idInmueble` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tadm_inmueblesAdicionales_idInmueble_idx` (`idInmueble`),
  CONSTRAINT `fk_tadm_inmueblesAdicionales_idInmueble` FOREIGN KEY (`idInmueble`) REFERENCES `tadm_inmueble` (`idInmueble`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tadm_inmueblesAdicionales`
--

LOCK TABLES `tadm_inmueblesAdicionales` WRITE;
/*!40000 ALTER TABLE `tadm_inmueblesAdicionales` DISABLE KEYS */;
/*!40000 ALTER TABLE `tadm_inmueblesAdicionales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tadm_multa`
--

DROP TABLE IF EXISTS `tadm_multa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tadm_multa` (
  `idMulta` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `valor` int(7) NOT NULL,
  `descripcion` varchar(450) DEFAULT NULL,
  PRIMARY KEY (`idMulta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tadm_multa`
--

LOCK TABLES `tadm_multa` WRITE;
/*!40000 ALTER TABLE `tadm_multa` DISABLE KEYS */;
/*!40000 ALTER TABLE `tadm_multa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tadm_multaUsuario`
--

DROP TABLE IF EXISTS `tadm_multaUsuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tadm_multaUsuario` (
  `idMulta` int(11) NOT NULL,
  `nroDocumento` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`idMulta`,`nroDocumento`),
  KEY `fk_tadm_multaUsuario_nroIdentificacion_idx` (`nroDocumento`),
  CONSTRAINT `fk_tadm_multaUsuario_idMulta` FOREIGN KEY (`idMulta`) REFERENCES `tadm_multa` (`idMulta`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tadm_multaUsuario_nroIdentificacion` FOREIGN KEY (`nroDocumento`) REFERENCES `tus_usuario` (`nroDocumento`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tadm_multaUsuario`
--

LOCK TABLES `tadm_multaUsuario` WRITE;
/*!40000 ALTER TABLE `tadm_multaUsuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `tadm_multaUsuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tadm_seccion`
--

DROP TABLE IF EXISTS `tadm_seccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tadm_seccion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(450) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tadm_seccion`
--

LOCK TABLES `tadm_seccion` WRITE;
/*!40000 ALTER TABLE `tadm_seccion` DISABLE KEYS */;
/*!40000 ALTER TABLE `tadm_seccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tadm_tipoInmueble`
--

DROP TABLE IF EXISTS `tadm_tipoInmueble`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tadm_tipoInmueble` (
  `idTipoInmueble` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `descripcion` varchar(400) DEFAULT NULL,
  PRIMARY KEY (`idTipoInmueble`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tadm_tipoInmueble`
--

LOCK TABLES `tadm_tipoInmueble` WRITE;
/*!40000 ALTER TABLE `tadm_tipoInmueble` DISABLE KEYS */;
INSERT INTO `tadm_tipoInmueble` VALUES (1,'Apartamento',NULL),(2,'Casa',NULL),(3,'Apartaestudio',NULL),(4,'Local',NULL);
/*!40000 ALTER TABLE `tadm_tipoInmueble` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tadm_zonaSocial`
--

DROP TABLE IF EXISTS `tadm_zonaSocial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tadm_zonaSocial` (
  `idZonaSocial` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `rutaFotografia` varchar(200) DEFAULT NULL,
  `descripcion` varchar(450) DEFAULT NULL,
  `costoAlquiler` int(6) NOT NULL,
  `horarioAcceso` varchar(50) NOT NULL,
  PRIMARY KEY (`idZonaSocial`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tadm_zonaSocial`
--

LOCK TABLES `tadm_zonaSocial` WRITE;
/*!40000 ALTER TABLE `tadm_zonaSocial` DISABLE KEYS */;
/*!40000 ALTER TABLE `tadm_zonaSocial` ENABLE KEYS */;
UNLOCK TABLES;

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

--
-- Dumping data for table `tadm_zonaSocialUsuario`
--

LOCK TABLES `tadm_zonaSocialUsuario` WRITE;
/*!40000 ALTER TABLE `tadm_zonaSocialUsuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `tadm_zonaSocialUsuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tfac_creditoInmuebles`
--

DROP TABLE IF EXISTS `tfac_creditoInmuebles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tfac_creditoInmuebles` (
  `idCreditoInmueble` int(11) NOT NULL,
  `idInmueble` int(11) NOT NULL,
  `valor` int(11) NOT NULL,
  `motivo` varchar(500) NOT NULL,
  PRIMARY KEY (`idCreditoInmueble`,`idInmueble`),
  KEY `fk_tfac_creditoInmuebles_idInmueble_idx` (`idInmueble`),
  CONSTRAINT `fk_tfac_creditoInmuebles_idInmueble` FOREIGN KEY (`idInmueble`) REFERENCES `tadm_inmueble` (`idInmueble`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='El saldo podrá ser credito (valores positivos)';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tfac_creditoInmuebles`
--

LOCK TABLES `tfac_creditoInmuebles` WRITE;
/*!40000 ALTER TABLE `tfac_creditoInmuebles` DISABLE KEYS */;
/*!40000 ALTER TABLE `tfac_creditoInmuebles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tfac_debitoInmuebles`
--

DROP TABLE IF EXISTS `tfac_debitoInmuebles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tfac_debitoInmuebles` (
  `idDebitoInmueble` int(11) NOT NULL,
  `idInmueble` int(11) NOT NULL,
  `valor` int(11) NOT NULL,
  `motivo` varchar(500) NOT NULL,
  PRIMARY KEY (`idDebitoInmueble`,`idInmueble`),
  KEY `fk_tfac_debitoInmuebles_idInmueble_idx` (`idInmueble`),
  CONSTRAINT `fk_tfac_debitoInmuebles_idInmueble` FOREIGN KEY (`idInmueble`) REFERENCES `tadm_inmueble` (`idInmueble`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='El saldo podrá ser debito (valores negativos)';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tfac_debitoInmuebles`
--

LOCK TABLES `tfac_debitoInmuebles` WRITE;
/*!40000 ALTER TABLE `tfac_debitoInmuebles` DISABLE KEYS */;
/*!40000 ALTER TABLE `tfac_debitoInmuebles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tge_parametros`
--

DROP TABLE IF EXISTS `tge_parametros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tge_parametros` (
  `etiqueta` varchar(200) NOT NULL,
  `valor` varchar(120) NOT NULL,
  PRIMARY KEY (`etiqueta`,`valor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tge_parametros`
--

LOCK TABLES `tge_parametros` WRITE;
/*!40000 ALTER TABLE `tge_parametros` DISABLE KEYS */;
/*!40000 ALTER TABLE `tge_parametros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tus_rol`
--

DROP TABLE IF EXISTS `tus_rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tus_rol` (
  `idRol` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(450) DEFAULT NULL,
  PRIMARY KEY (`idRol`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tus_rol`
--

LOCK TABLES `tus_rol` WRITE;
/*!40000 ALTER TABLE `tus_rol` DISABLE KEYS */;
INSERT INTO `tus_rol` VALUES (1,'Administrador',NULL),(2,'Propietarios',NULL),(3,'Contador',NULL),(4,'Revisor fiscal',NULL),(5,'Vigilantes',NULL),(6,'Habitantes',NULL);
/*!40000 ALTER TABLE `tus_rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tus_usuario`
--

DROP TABLE IF EXISTS `tus_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tus_usuario` (
  `nroDocumento` int(11) NOT NULL,
  `primerNombre` varchar(80) NOT NULL,
  `segundoNombre` varchar(80) DEFAULT NULL,
  `primerApellido` varchar(200) NOT NULL,
  `segundoApellido` varchar(200) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `celular` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`nroDocumento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tus_usuario`
--

LOCK TABLES `tus_usuario` WRITE;
/*!40000 ALTER TABLE `tus_usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `tus_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tus_usuarioRol`
--

DROP TABLE IF EXISTS `tus_usuarioRol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tus_usuarioRol` (
  `nroDocumento` int(11) NOT NULL,
  `idRol` int(11) NOT NULL,
  PRIMARY KEY (`nroDocumento`,`idRol`),
  KEY `fk_usuarioRol_idRol_idx` (`idRol`),
  CONSTRAINT `fk_usuarioRol_idRol` FOREIGN KEY (`idRol`) REFERENCES `tus_rol` (`idRol`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuarioRol_nroDocumento` FOREIGN KEY (`nroDocumento`) REFERENCES `tus_usuario` (`nroDocumento`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tus_usuarioRol`
--

LOCK TABLES `tus_usuarioRol` WRITE;
/*!40000 ALTER TABLE `tus_usuarioRol` DISABLE KEYS */;
/*!40000 ALTER TABLE `tus_usuarioRol` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-15 17:12:50
