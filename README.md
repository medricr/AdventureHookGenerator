# AdventureHookGenerator
A single page webapp using React, Express, Node, and MySQL to generate adventure hooks for tabletop role playing games

This application will allow the user to generate a single (or multiple) adventure hooks to use in their D&D game, or to generate a list of antagonists, sources of information, or threats

### Abstract

#### What is an Adventure Hook?
The start of any role playing adventure, an adventure hook is a task or quest that gets the ball rolling for the player characters. While a role playing game may evolve to whatever scope or scale its participents imagine, typically a brand new party of adventurers only need a thing to do, and a bad guy to stop. An adventure hook is typically made up of several compsite pieces: 

>- the source of the information ('Rumour has it that...', 'The elders from the neighboring village have asked you to deal with....', 'The advisor to the royal family has told us that....') 
>- followed by an antagonist ('bandits prowling the roads have...', 'a family of manticores has....', 'a great and ancient evil has awakend and has....') 
>- who presents a real and tangible threat ('kidnapped the prince / princess....', 'begun preparing for a ritual which will awaken an elder dragon...', 'stolen a precious religion artifact from a local temple...')

obviously this is a very abstracted formula, which does not account for the many possible variatons of an adventure hook, but nonetheless it serves as a starting point for building our application. 

#### How Will This Application be Used?
This application is not meant to serve as a substitute for creative writing, but more as a starting point for getting adventures off the ground. You may decide that you like some parts of an adventure hook, and would rather fill in the rest of the pieces yourself. 


### Algorithm Design

Simply put, when the user hits the 'generate' button, the app will pull one random entry from each column, and concatenate them into a single string which will be returned and displayed on the screen. 



