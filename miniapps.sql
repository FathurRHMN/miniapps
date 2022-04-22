-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 22, 2022 at 03:35 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `miniapps`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `phone` int(17) NOT NULL,
  `note` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `fullname`, `phone`, `note`) VALUES
(2, 'ahmad Dhunajah', 999448322, 'adek paling ganteng'),
(3, 'afifah aliyah', 999448324, 'adek paling manis\r\n'),
(4, 'shafura', 1231241, 'tinggi putih'),
(37, 'api', 678923, 'masih nambah di api'),
(46, 'dariweb', 976338416, 'ksbdkabsd dari web'),
(48, 'users', 2147483647, 'apa aja'),
(49, 'asd', 1232, 'asdasdasd'),
(50, 'asdas', 21312, 'adsadasd'),
(51, 'ahmad Dhunajahhg', 2147483647, 'asdasd'),
(52, 'Fatur Web', 2147483647, 'dicoba ajaa\n');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
