# chatApp
To run this properly you need the correct ports/servers to run the  website. Backend must run on 4000 and Frontend on 3000.

## Front End
This has been made on react using the CRA, I heard it has been deprecated but I wanted to use it again coz I was comfortable with it. Now I shal move to vite or something else.
So the I didnt much concentrate on the front end and just gave a simple looking frontend. And I used scss for the front end. The site frist takes you to the login page where in you must enter the name and room in which you want to get into. 

## Back End
You can have node running the server(on 4000), I used nodemon as a devdependency to test my code during the development. 

## EXPLANATION
The front end and backend comminicate with socket events. When a text from room1 is sent, server sends back a socket event to all the rooms but the front end filters them and chooses the one which is relevant to that room.
