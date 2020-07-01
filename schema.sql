DROP DATABASE IF EXISTS adHooks;
CREATE DATABASE adHooks;
USE adHooks;

CREATE TABLE present_tense (
	id Int AUTO_INCREMENT NOT NULL,
	info_source VARCHAR( 255 ) NOT NULL,
	antagonist VARCHAR( 255 ) NOT NULL,
	threat VARCHAR(255) NOT NULL,

	PRIMARY KEY ( id )
);


INSERT INTO present_tense (info_source, antagonist, threat)
VALUES 
("Rumour has it that ", "a bandit horde ", " may attempt to kidnap the crown prince"),
("The elders from the neighboring village have informed you that ", "a family of manticores ", "has begun preparing for a ritual which will awaken an elder dragon"),
("The advisor to the royal famiy has told you that ", "the local court wizard ", "has absconded with a precious religous artifact from a local temple."),
("The town drunk has been heard saying that they personally know ", " a coven of witches ", "has cursed the local nobility"),
("Reports have come from from afar that ", "an ancient vampire lord ", "intends to wipe out all life on the continent")
("A mysterious letter has made its way into your hands, stating that ", "a group of cultists ", "intends to start a war")
