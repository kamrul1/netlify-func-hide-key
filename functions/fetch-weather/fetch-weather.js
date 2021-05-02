const axios = require("axios");

//call to https://www.weatherbit.io/api ###requires### /v2.0/current?city={city}&country={urlEncodeCountry}&key={serviceSettings.ApiKey} 
const handler = async (event) => {
  const {city, country} = event.queryStringParameters;
  const API_KEY = process.env.API_KEY
  let urlEncodeCountry = encodeURIComponent(country)

  const url = `https://api.weatherbit.io/v2.0/current?city=${city}&country=${urlEncodeCountry}&key=${API_KEY}`

  try {
    const {data} = await axios.get(url)
    return {
      statusCode:200,
      body: JSON.stringify(data)
    }
    
  } catch (error) {
    const {status, statusText, headers, data} = error.response
    return {
      statusCode:status, 
      body: JSON.stringify({status, statusText, headers, data})
    }
  }

}

module.exports = { handler }
