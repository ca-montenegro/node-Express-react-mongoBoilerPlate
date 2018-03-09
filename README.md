# Insta-Fights App
Insta-fight app. Likes fight among Instagram users. App made for the Web Development CS at University of Los Andes - Bogotá, Colombia2018-1

## How to Use the App

In the app you have to submit player by player. Type the user name and hit enter or the submit button.
If the player has a public profile, he will be ready to play. In case the player have private profile, an alert will be display, the player will be not ready and you must type another user.
When both players are ready, you can hit the button "Fight!!" and the player with more likes in his/her pictures will win.

At the both is the records table where you can see the all the matches among user, the likes-count and the winner.


# Running the app

Follow this instructions to run the app locally. 
Or, if you don`t feel to install it locally you can play in this URL:
[http://instafightsapp.herokuapp.com](#http://instafightsapp.herokuapp.com)

## Prerequisites
```
Node JS
Yarn
Git
```

Clone or download the project and from the git master branch:
```
npm install
set an env variable 'MONGOLAB_URI' to the access url of mongoDB (with credentials) 
npm start
cd frontend
yarn install
yarn start
cd ..

```
Then open your browser on http://localhost:3000

## Setting env variable

Now what you have to do before you can deploy is setting up a mongo database. To do this:

You can download mongodb [here](https://www.mongodb.com/download-center#community), then make a new database with the name you want.
Or you can also use mongolab for free.
What you need to do now is set up ENV variables for the project before you can deploy. This is important because this is how the project will connect to the db and how you can also set up your preferred port for the back-end server of this program. To do this step you can:

Manually configuring environmental variables in your OS using the terminal or any other way your OS allow you to do so.
Add a file called .env and set the variables there.
Ex: MONGOLAB_URI="mongodb://<user>:<password>@ds259778.mlab.com:<port>/<dbname>

The variables you need to add are:

PORT : This is the port you want the server to run on.
URL : The url where mongo is listening, this can be something like mongodb://localhost:xxxx/<dbname> or mongodb://<user>:<pass>@dsxxxxx.mlab.com:xxxx/<dbname> if you are using mongo lab.
DBNAME : The name of the database you want to connect to.
COLLECT : The name of the collection inside the database you want to use for this project. Try to have this collection empty before deploying as well.

## How to Use the App

In the app you have to submit player by player. Type the user name and hit enter or the submit button.
If the player has a public profile, he will be ready to play. In case the player have private profile, an alert will be display, the player will be not ready and you must type another user.
When both players are ready, you can hit the button "Fight!!" and the player with more likes in his/her pictures will win.

At the both is the records table where you can see the all the matches among user, the likes-count and the winner.

## Built With

* [Node JS](https://nodejs.org/es) 
* [Mongo DB](https://www.mongodb.com/es) 
* [React JS](https://facebook.github.io/react/) 
* [Heroku](https://www.heroku.com/platform) 
* CSS
* HTML

## Authors

* **[Camilo Montenegro](https://github.com/ca-montenegro)**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

### References
The mongodb setup section was made using [Camilo Zambrano Readme](https://github.com/cawolfkreo/instaFight) 
