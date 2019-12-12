# Software Engineering Immersive: Project 2

This is the second project during the General Assembly Software Engineering Immersive course (Week 6). The project was a collaboration between Jenny Judova and Felicia Hjertman as part of a two-day long “Reactathon”.

<img src="./assets/pic1.png" alt="home screen" height="500" width="780">

---

## Start My Day App

This is a ‘Start My Day’ style app where the user inputs their location. After which they are taken to a page that shows them the local weather, local news, and a quote of the day. If the location is London they are also shown the tube updates.

_Built With_

1. HTML5
2. Sass
   - Animation
3. Javascript
   - React.js
   - Axios
   - Webpack
4. GitHub

---

## Deployment

The game is deployed on Heroku and can be found at [http://weather-and-news.herokuapp.com/](http://weather-and-news.herokuapp.com/)

---

## Getting Started

Use the clone button to download the game source code. In the terminal enter the following commands:

To install all the packages listed in the package.json:

`$ npm i`
or
`$ yarn`

Run the app in your localhost:

`$ npm run serve`
or
`$ yarn serve`

Check the console for any issues and if there are check the package.json for any dependancies missing

---

## The project

The project lasted 2 days. We wanted to build something useful with an API that did not require authentication and that left room for creativity. After a brainstorming session we settled on a Weather app, which was later expanded to include news and random fact.

_The MVP_
We decided that the MVP of a wether app has to:

- accept user input of location on the home page
- show the minimum and the max temperature for the day in their city
- as well as the description of the weather together with a gif of an animal to cheer them up

_MVP +_
As the MVP was completed we expanded the weather app to become a ’Start your day’ style apple added the following API’s to the app

- News API
- Quote of the Day API
- TFL API (only for London)

<img src="./assets/pic2.png" alt="London screen" height="500" width="780">

---

## Authors

Jenny Judova - [https://github.com/JennyJudova](https://github.com/JennyJudova)
Felicia Hjertman - [https://github.com/feliciahj](https://github.com/feliciahj)
