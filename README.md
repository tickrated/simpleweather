# Simple Weather
## A fully functional Simple Weather app written in Python, HTML, CSS, JS.

This project is a simple **Python** based weather app that provides User with current weather information in the given location. Reading the source code of this project will show you the following:
* How to use APIs with Python using _requests_ module
* How to read/write JSON data in Python
* How to use _eel_ for a GUI
* Easy to replicate _HTML_ code for a GUI
* Simple _JavaScript_ file to connect _Python_ back-end with the _HTML_ front-end
* Pretty _CSS_ styling

## How does it work?

Pretty easy!
The User is asked for an input on start, this input will act as a location for which we will make an API request here: https://api.weatherapi.com/v1/current.json, we will also send a payload that will contain our API key and the location. After we get our response and it's valid (status_code == 200) we will read the JSON response that we got and get the city, country, temperature etc. for a GUI display. Then the JS file that is triggered on button press will just change the innerHTML of the weatherDisplay div in our index.html and display values that we got.

## Example of use
![Gif example](https://github.com/tickrated/simpleweather/assets/163031447/827d7ac5-3046-4cc1-a498-1e4d96303522)


**Screenshots:**

![Pic 1](https://github.com/tickrated/simpleweather/assets/163031447/d87ac0c4-1370-4799-8990-89efcc5d917d)
![Pic 2](https://github.com/tickrated/simpleweather/assets/163031447/1f90404c-fc66-4672-98e8-8764ca735029)
