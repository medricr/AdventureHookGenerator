DROP DATABASE IF EXISTS acmyrvs8f81m7mcq;
CREATE DATABASE acmyrvs8f81m7mcq;
USE acmyrvs8f81m7mcq;

-- CREATE TABLES
CREATE TABLE past_adHooks (
	id Int AUTO_INCREMENT NOT NULL,
	info_source VARCHAR( 255 ) NOT NULL,
	antagonist VARCHAR( 255 ) NOT NULL,
	threat VARCHAR(255) NOT NULL,

	PRIMARY KEY ( id )
);

CREATE TABLE present_adHooks (
	id Int AUTO_INCREMENT NOT NULL,
	info_source VARCHAR( 255 ) NOT NULL,
	antagonist VARCHAR( 255 ) NOT NULL,
	threat VARCHAR(255) NOT NULL,

	PRIMARY KEY ( id )
);

CREATE TABLE future_adHooks (
	id Int AUTO_INCREMENT NOT NULL,
	info_source VARCHAR( 255 ) NOT NULL,
	antagonist VARCHAR( 255 ) NOT NULL,
	threat VARCHAR(255) NOT NULL,

	PRIMARY KEY ( id )
);

-- TABLE INSERTION
INSERT INTO past_adHooks (info_source, antagonist, threat)
VALUES 
("This feature ", "is coming ", "soon!"),
("This feature ", "is coming ", "soon!"),
("This feature ", "is coming ", "soon!");

INSERT INTO present_adHooks (info_source, antagonist, threat)
VALUES 
("Rumour has it that ", "a bandit horde ", " may attempt to kidnap the crown prince"),
("The elders from the neighboring village have informed you that ", "a family of manticores ", "has begun preparing for a ritual which will awaken an elder dragon"),
("The advisor to the royal famiy has told you that ", "the local court wizard ", "has absconded with a precious religous artifact from a local temple."),
("The town drunk has been heard saying that they personally know ", " a coven of witches ", "has cursed the local nobility"),
("Reports have come from from afar that ", "an ancient vampire lord ", "intends to wipe out all life on the continent"),
("A mysterious letter has made its way into your hands, stating that ", "a group of cultists ", "intends to start a war"),
("Distrubing reports have surfaced, telling that ", "a woman claiming to be a living saint ", "has killed the priest of a local temple"),
("Legend has it that ", "an ancient evil ", "will unleash hell on our world under the first full moon of the year."),
("A local fortune teller has warned that ", "an undead army of lost souls ", "is headed towards the capitol city."),
("An envoy from a previously undiscovered village in the woods has come to you, warning that ", "a renegade mage ", "intends to break the seal of the fabled city of the dead."),
("A long lost relative has contacted you, stating that ", "a previously imprisoned demon has escaped, and ", "is searching for revenge against your family."),
("Flyers have appeared in town, telling that ", "a famed demon hunter ", " is requesting the aid of any adventurer with a strong sword arm in the heart of the woods."),
("Excavation of a nearby cave system has turned up an ancient tablet, which tells that ", "a great and terrible power ", " will visit this realm once more on the soltice."),
("A local inventor has petitioned for help, saying that ", "an army of steel golems ", "has gone insane and intends to raze the city."),
("A group of monster hunters has asked for your help in eliminating ", "a lich lord ", "that has sworn to plunge the world into darkness."),
("Granny (nobody knows her real name), says that ", "her pet owlbear, mittens, ", "has vanished into thin air"),
("A pellar from the next village has complained that ", "a group of mischevious goblins ", "is ruining this years crop."),
("The church has issued a bounty, saying only that ", "a spiritual leader in the region ", "is trying to convert the regions tribes."),
("A warrior has been challenging villagers to duels to the death, stating that ", "the bandit king ", "is recruiting a warband."),
("A half orc priest, has been murdered. His final journal entry says that ", "the One in Black ", "is close to completing the rite of ascension" );

INSERT INTO future_adHooks (info_source, antagonist, threat)
VALUES 
("This feature ", "is coming ", "soon!"),
("This feature ", "is coming ", "soon!"),
("This feature ", "is coming ", "soon!");