-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-01-2019 a las 20:33:02
-- Versión del servidor: 10.1.30-MariaDB
-- Versión de PHP: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `estados_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado`
--

CREATE TABLE `estado` (
  `Id_Estado` int(6) UNSIGNED NOT NULL,
  `Nombre` varchar(50) DEFAULT NULL,
  `N_Habitantes` int(11) DEFAULT NULL,
  `Capital` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `estado`
--

INSERT INTO `estado` (`Id_Estado`, `Nombre`, `N_Habitantes`, `Capital`) VALUES
(1, 'Aguascalientes', 1184996, 'Aguascalientes'),
(2, 'Estado de México', 16187608, 'Toluca'),
(3, 'Guadalajara', 1460148, 'Jalisco');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `municipio`
--

CREATE TABLE `municipio` (
  `Id_Municipio` int(6) UNSIGNED NOT NULL,
  `Id_Estado` int(10) UNSIGNED DEFAULT NULL,
  `Nombre` varchar(50) DEFAULT NULL,
  `Tipo_zona` varchar(50) DEFAULT NULL,
  `N_Habitantes` varchar(50) DEFAULT NULL,
  `Es_pm` varchar(50) DEFAULT NULL,
  `Tipo_des` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `municipio`
--

INSERT INTO `municipio` (`Id_Municipio`, `Id_Estado`, `Nombre`, `Tipo_zona`, `N_Habitantes`, `Es_pm`, `Tipo_des`) VALUES
(1, 1, 'Calvillo', 'Rural', '10001 a 100000', 'Sí', 'Montaña'),
(2, 1, 'Aguascalientes', 'Urbana', '100001 a 1000000', 'No', 'Ciudad'),
(3, 2, 'Toluca', 'Rural', '100001 a 1000000', 'No', 'Ciudad'),
(4, 3, 'Jalisco', 'Urbana', 'más de 1000000', 'No', 'Ciudad');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`Id_Estado`);

--
-- Indices de la tabla `municipio`
--
ALTER TABLE `municipio`
  ADD PRIMARY KEY (`Id_Municipio`),
  ADD KEY `Id_Estado` (`Id_Estado`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `estado`
--
ALTER TABLE `estado`
  MODIFY `Id_Estado` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `municipio`
--
ALTER TABLE `municipio`
  MODIFY `Id_Municipio` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `municipio`
--
ALTER TABLE `municipio`
  ADD CONSTRAINT `municipio_ibfk_1` FOREIGN KEY (`Id_Estado`) REFERENCES `estado` (`Id_Estado`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
