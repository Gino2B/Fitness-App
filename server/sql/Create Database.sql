-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `Types`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Types` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Name` VARCHAR(45) NOT NULL,
  `Type_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Types_Types1_idx` (`Type_id` ASC) ,
  UNIQUE INDEX `Name_UNIQUE` (`Name` ASC) ,
  CONSTRAINT `fk_Types_Types1`
    FOREIGN KEY (`Type_id`)
    REFERENCES `Types` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `FirstName` VARCHAR(45) NOT NULL,
  `LastName` VARCHAR(45) NOT NULL,
  `DOB` DATETIME NULL,
  `Password` VARCHAR(45) NULL,
  `User_Type` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Users_Types1_idx` (`User_Type` ASC) ,
  CONSTRAINT `fk_Users_Types1`
    FOREIGN KEY (`User_Type`)
    REFERENCES `Types` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ContactMethods`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ContactMethods` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Type` VARCHAR(45) NOT NULL,
  `Value` VARCHAR(45) NOT NULL,
  `IsPrimary` BIT NOT NULL DEFAULT 0,
  `CanSpam` BIT NOT NULL DEFAULT 0,
  `User_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_ContactMethods_Users_idx` (`User_id` ASC) ,
  INDEX `fk_ContactMethod_Type_idx` (`Type` ASC) ,
  CONSTRAINT `fk_ContactMethods_Users`
    FOREIGN KEY (`User_id`)
    REFERENCES `Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ContactMethod_Type`
    FOREIGN KEY (`Type`)
    REFERENCES `Types` (`Name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `URL` VARCHAR(2048) NULL,
  `Text` VARCHAR(4000) NULL,
  `Media_Type` VARCHAR(45) NOT NULL DEFAULT 'none',
  `Privacy_Setting` INT NULL COMMENT '0 - hidden\n1 - only me\n2 - only friends\n4 - public',
  `Owner_id` INT NOT NULL,
  INDEX `fk_Posts_Users1_idx` (`Owner_id` ASC) ,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_Posts_Users1`
    FOREIGN KEY (`Owner_id`)
    REFERENCES `Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Exercises`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Exercises` (
  `id` INT NOT NULL,
  `started_at` DATETIME NOT NULL,
  `updated_at` TIMESTAMP NOT NULL,
  `reps` INT NOT NULL,
  `times_done` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NOT NULL,
  `Place` VARCHAR(45) NOT NULL,
  `Description` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Comments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Text` VARCHAR(4000) NULL,
  `Post_id` INT NOT NULL,
  `Owner_id` INT NOT NULL,
  `Exercises_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Comments_Posts1_idx` (`Post_id` ASC) ,
  INDEX `fk_Comments_Users1_idx` (`Owner_id` ASC) ,
  INDEX `fk_Comments_Exercises1_idx` (`Exercises_id` ASC) ,
  CONSTRAINT `fk_Comments_Posts1`
    FOREIGN KEY (`Post_id`)
    REFERENCES `Posts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Comments_Users1`
    FOREIGN KEY (`Owner_id`)
    REFERENCES `Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Comments_Exercises1`
    FOREIGN KEY (`Exercises_id`)
    REFERENCES `Exercises` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Emojis`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Emojis` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Name` VARCHAR(45) NOT NULL,
  `Description` VARCHAR(500) NULL,
  `Code` VARCHAR(2) NOT NULL,
  `Type_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `Name_UNIQUE` (`Name` ASC) ,
  UNIQUE INDEX `Code_UNIQUE` (`Code` ASC) ,
  INDEX `fk_Emojis_Types1_idx` (`Type_id` ASC) ,
  CONSTRAINT `fk_Emojis_Types1`
    FOREIGN KEY (`Type_id`)
    REFERENCES `Types` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Reactions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Reactions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Emoji` VARCHAR(2) NULL,
  `Post_id` INT NOT NULL,
  `Owner_id` INT NOT NULL,
  `Exercises_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Comments_Posts1_idx` (`Post_id` ASC) ,
  INDEX `fk_Comments_Users1_idx` (`Owner_id` ASC) ,
  INDEX `fk_Emoji_idx` (`Emoji` ASC) ,
  INDEX `fk_Reactions_Exercises1_idx` (`Exercises_id` ASC) ,
  CONSTRAINT `fk_Comments_Posts10`
    FOREIGN KEY (`Post_id`)
    REFERENCES `Posts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Comments_Users10`
    FOREIGN KEY (`Owner_id`)
    REFERENCES `Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Emoji`
    FOREIGN KEY (`Emoji`)
    REFERENCES `Emojis` (`Code`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Reactions_Exercises1`
    FOREIGN KEY (`Exercises_id`)
    REFERENCES `Exercises` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Users_has_Exercises`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Users_has_Exercises` (
  `Users_id` INT NOT NULL,
  `Exercises_id` INT NOT NULL,
  PRIMARY KEY (`Users_id`, `Exercises_id`),
  INDEX `fk_Users_has_Exercises_Exercises1_idx` (`Exercises_id` ASC) ,
  INDEX `fk_Users_has_Exercises_Users1_idx` (`Users_id` ASC) ,
  CONSTRAINT `fk_Users_has_Exercises_Users1`
    FOREIGN KEY (`Users_id`)
    REFERENCES `Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Users_has_Exercises_Exercises1`
    FOREIGN KEY (`Exercises_id`)
    REFERENCES `Exercises` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Followers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Followers` (
  `id` INT NOT NULL,
  `followed_since` DATETIME NOT NULL,
  `Users_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Followers_Users1_idx` (`Users_id` ASC) ,
  CONSTRAINT `fk_Followers_Users1`
    FOREIGN KEY (`Users_id`)
    REFERENCES `Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Following`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Following` (
  `id` INT NOT NULL,
  `following_since` DATETIME NULL,
  `Users_id` INT NOT NULL,
  INDEX `fk_Following_Users1_idx` (`Users_id` ASC) ,
  CONSTRAINT `fk_Following_Users1`
    FOREIGN KEY (`Users_id`)
    REFERENCES `Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `My_Workout`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `My_Workout` (
  `Posts_id` INT NOT NULL,
  `Exercises_id` INT NOT NULL,
  PRIMARY KEY (`Posts_id`, `Exercises_id`),
  INDEX `fk_Posts_has_Exercises_Exercises1_idx` (`Exercises_id` ASC) ,
  INDEX `fk_Posts_has_Exercises_Posts1_idx` (`Posts_id` ASC) ,
  CONSTRAINT `fk_Posts_has_Exercises_Posts1`
    FOREIGN KEY (`Posts_id`)
    REFERENCES `Posts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Posts_has_Exercises_Exercises1`
    FOREIGN KEY (`Exercises_id`)
    REFERENCES `Exercises` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `Types`
-- -----------------------------------------------------
START TRANSACTION;
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (1, 'Now()', DEFAULT, 'Types', 1);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (2, 'Now()', DEFAULT, 'User Types', 1);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (3, 'Now()', DEFAULT, 'Media Types', 1);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (4, 'Now()', DEFAULT, 'Contact Method Types', 1);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (5, 'Now()', DEFAULT, 'Admin', 2);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (6, 'Now()', DEFAULT, 'User', 2);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (DEFAULT, 'Now()', DEFAULT, 'image/gif', 3);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (DEFAULT, 'Now()', DEFAULT, 'image/jpeg', 3);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (DEFAULT, 'Now()', DEFAULT, 'image/pngvideo', 3);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (DEFAULT, 'Now()', DEFAULT, 'video/webm', 3);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (DEFAULT, 'Now()', DEFAULT, 'video/ogg', 3);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (DEFAULT, 'Now()', DEFAULT, 'video/ogg', 3);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (DEFAULT, 'Now()', DEFAULT, 'Email', 4);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (DEFAULT, 'Now()', DEFAULT, 'Cell Phone', 4);

COMMIT;

