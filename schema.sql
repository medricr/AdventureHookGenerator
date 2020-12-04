DROP DATABASE IF EXISTS adventure_hooks_db;
CREATE DATABASE adventure_hooks_db;
USE adventure_hooks_db;

-- db name changed from adHooks to adventure_hook_db, table name changed from present_tense to adHooks

CREATE TABLE adHooks (
	id Int AUTO_INCREMENT NOT NULL,
	info_source VARCHAR( 255 ) NOT NULL,
	antagonist VARCHAR( 255 ) NOT NULL,
	threat VARCHAR(255) NOT NULL,

	PRIMARY KEY ( id )
);


INSERT INTO adHooks (info_source, antagonist, threat)
VALUES 
("Rumour has it that ", "a bandit horde ", " may attempt to kidnap the crown prince"),
("The elders from the neighboring village have informed you that ", "a family of manticores ", "has begun preparing for a ritual which will awaken an elder dragon"),
("The advisor to the royal famiy has told you that ", "the local court wizard ", "has absconded with a precious religous artifact from a local temple."),
("The town drunk has been heard saying that they personally know ", " a coven of witches ", "has cursed the local nobility"),
("Reports have come from from afar that ", "an ancient vampire lord ", "intends to wipe out all life on the continent")
("A mysterious letter has made its way into your hands, stating that ", "a group of cultists ", "intends to start a war")
("Distrubing reports have surfaced, telling that ", "a woman claiming to be a living saint ", "has killed the priest of a local temple")
