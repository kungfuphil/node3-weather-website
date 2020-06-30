const request = require('postman-request')

const forecast = (latitude, longitude, apiKey, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${latitude},${longitude}&units=f`
    
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            weather_description = body.current.weather_descriptions[0]
            temperature = body.current.temperature
            feelslike = body.current.feelslike

            callback(undefined, `${weather_description}. It's currently ${temperature} degrees and feels like ${feelslike} degrees.`)
        }
    })
}

module.exports = forecast