CREATE DATABASE adHooks;
USE adHooks;

-- CREATE TABLE `chirps` (
--   `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
--   `author` VARCHAR( 255) NOT NULL,
--   `body` VARCHAR( 255 ) NOT NULL,
--   `created_at` DATETIME NOT NULL,

--   PRIMARY KEY ( `id` ) 
-- );

CREATE TABLE `pieces` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`info_source` VARCHAR( 255 ) NOT NULL,

	PRIMARY KEY ( `id` )
);