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

type in name your function prompt: ```fetch-weather```, this will have a hello world response example.  Clear it out.


## 5. Install axios
>     npm install axios

## 6. Process request and response in newly created fetch-weather.js 
The actual request/response from the API is hidden from the client side.  The only response is that which is returned by fetch-weather.js



