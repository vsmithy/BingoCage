# ARCHIVED - I am not actively working on this repo anymore.

# BingoCage

The little thing that you reach into to find the bingo number/letter to call. 

## Backstory
So, we grabbed a bingo game from 5Below the other day for only $3 and it looked legit! Until we got home and the instructions mentioned some kind of cage/roller thing that you use to find what letter/number to block off on your bingo board. So...I made an app for that. We use it as is and if my kids like playing bingo, i might add audio/soundFX/animations, but for now its just an app for calling out the bingo numbers and keeping track of what has been called.

Also, I built this specifically to go on my extra S7 that I have for testing, so you might have to tweak some UI settings to be more general.

Also, in the game i got from 5Below, each letter can be one of fifteen values. So 'B' can be from 1-15, 'I' can be from 16-30, and so on.

Annnnd Also - Yes I obviously could have added some 'board' components to make a proper bingo game with some nice features, but the point of THIS app is to fill in for the items missing from the game we bought from 5Below.

## Features
* Android only because the device we use when playing bingo is an Android phone
* Roll to generate a number
* Has a history screen to view what has already been called.
 
## Tools and Libraries Used
* React-Native
* React-Navigation
* React-Native-Vector_Icons
* Balsamiq for the mockup

## To Use
* Initialize a react-native project (I did not use Expo/Create-React-Native-App or anything)
* Copy and paste the files in this repo into your project folder
* npm install
* From this point, you can run it on an AVD or do the keystore stuff and build an apk


## Screens

![screenshot](/Screenshots/Screenshot1.png "StartScreen")  ![screenshot](/Screenshots/Screenshot2.png "Begin")  ![screenshot](/Screenshots/Screenshot3.png "In Game")  ![screenshot](/Screenshots/Screenshot4.png "Menu")
![screenshot](/Screenshots/Screenshot5.png "History")
