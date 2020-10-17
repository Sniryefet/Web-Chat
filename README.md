# Online Chat 

## Credit
Big credit to [Brad Traversy](https://github.com/bradtraversy/chatcord) chat for the most client side logic and design

## Improvements
1. Major server side code refactor
2. Add usage of mongoDB
3. Add user requirements of Login and Registration via mongo

## How To Use
1. clone the project
2. In the src/config/mongodb.js on line 6 change `process.env.MONGO_URI` to yours mongo uri database connection
3. run ` npm install`
4. run  `npm run dev`

## Overview
Each user must first login and register 
![]()
![]()

Then the user shall choose his nickname which will be shown as the in the header of each message he sends 
![]()

Finally the user shall choose a chat room from the list given 
![]()

#### START CHATTING

![]()

#### Note that the messages sends from a user in a particular room will be send only to to users in this particular room and will not be broadcast across all online users


## Future Work
1. remove hard coded rooms
1. Add user functionality to create and delete room
2. update styling
