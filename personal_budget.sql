SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `operation_types`;
CREATE TABLE `operation_types`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3;

DROP TABLE IF EXISTS `operations`;
CREATE TABLE `operations`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `concept` varchar(50) NOT NULL,
  `amount` double(11, 0) NOT NULL,
  `type_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `createdAt` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `type`(`type_id`) USING BTREE,
  CONSTRAINT `type` FOREIGN KEY (`type_id`) REFERENCES `operation_types` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1;

INSERT INTO `operation_types` VALUES (1, 'income');
INSERT INTO `operation_types` VALUES (2, 'expense');

SET FOREIGN_KEY_CHECKS = 1;
