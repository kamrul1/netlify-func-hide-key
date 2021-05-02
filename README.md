# App showing how to hide API key using [Netlify functions](https://www.netlify.com/products/functions/)
---


This is based of the tutorial on [**How To Hide API Keys Using Netlify**](https://youtu.be/m2Dr4L_Ab14?t=1012) youtube video. This example uses the [weatherbit api](https://www.weatherbit.io/api)

Steps:
## 1. Create a empty project folder and run the command, to create a node package.json file:
>   npm init 

This prompt for package.json options, enter as below:
>      package name: (netlify-func-hide-key)
>      version: (1.0.0)
>      description: A solution to show how to hide api using Netlify functions
>      entry point: (index.js)
>      test command:
>      git repository:
>      keywords:
>      author: kamrul
>      license: (ISC)



## 2. Install netlify-cli as dev dependency:
>npm install -D netlify-cli

***Note: devDependencies are those thing required at development time and not deployment***

Since we are not using the -g (global) parameter when installing, we need to add following in the package.json scripts:
>"netlify":"./node_modules/.bin/netlify"

***Note: this will allow netlify cmd to be run without typing full path for with npm***


## 3. Create a netlify.toml file in the project role folder
This tells where the functions folder resides.


## 4. Use netlify cli to create the scaffold  function, this will add it to the netlify.toml
>      netlify function:create

type in name your function prompt: ```fetch-weather```, <br/>this will have a hello world response example.  Clear it out.
Add the folder ```.vscode``` and also ```launch.json``` to enable debugging with vs code.


## 5. Code the fetch-weather.js
>     npm install axios
Also, use .env file to store environment variables, these will be hidden from the client and github (using .ignore file)

Process request and response in newly created fetch-weather.js, the actual request/response from the API will be hidden from the client side.  The only response is that which is returned by fetch-weather.js

## 6. Add to source control and then in Netlify teamsite, use  "new site from git"
> When deploying in Netify, copy the .env API_KEY variable into environment variables.

The environment variable, in this project, is referred as: 
>     const API_KEY = process.env.API_KEY




