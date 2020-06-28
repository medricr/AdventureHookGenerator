# AdventureHookGenerator
A single page webapp using React, Express, Node, and MySQL to generate adventure hooks for tabletop role playing games


### Abstract
An adventure hook is typically made up of several compsite pieces: 

>- the source of the information ('Rumour has it that...', 'The elders from the neighboring village have asked you to deal with....', 'The advisor to the royal family has told us that....') 
>- followed by an antagonist ('bandits prowling the roads have...', 'a family of manticores has....', 'a great and ancient evil has awakend and has....') 
>- who presents a real and tangible threat ('kidnapped the prince / princess....', 'begun preparing for a ritual which will awaken an elder dragon...', 'stolen a precious religion artifact from a local temple...')

obviously this is a very abstracted formula, which does not account for the many possible variatons of an adventure hook, but nonetheless it serves as a starting point for building our application. 


### Algorithm Design

Simply put, when the user hits the 'generate' button, the app will pull one random entry from each column, and concatenate them into a single string which will be returned and displayed on the screen. 



