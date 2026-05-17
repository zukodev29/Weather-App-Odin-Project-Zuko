export const loadData = async () => {
    /*We are exporting const loadData function and it has async declaration and arrow function */
    const spanError = document.getElementById("error");
    const search = document.getElementById("search");
    const main = document.getElementById("main-content");
    /*We are getting error,search and main content id's */
    try {
        /*We are declaring let value for search and giving value because of input */
        let place = search.value;
        /*Using await fetch in JavaScript is the modern way to handle network requests. It pauses the execution of an async function 
        until the request 
        settles, making your code look and behave more like synchronous code without blocking the main threa */
        let url = await fetch(
         `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?key=H4YP5KPUFJDPX5KD8BV3LLQ3C`,
         );
         /*Our weather API from weather visualcrossing and we place ${place} so it can load in search */
         let weatherData = await url.json();
         /*This line of JavaScript parses the raw HTTP response from an API into a usable JavaScript object. In modern asynchronous programming, 
         it is commonly used alongside a fetch() request to easily grab and manipulate API data */
         let currentTempInF = Number(weatherData.currentConditions.temp).toFixed(1);
         /*Value for temperature in fahrenheit it has weatherData and currentConditions as all elements have
         and also temp condition and In JavaScript, toFixed(1) is a method used to format a number to exactly one decimal place */ 
         let currentTempInC = Number((currentTempInF - 32) / 1.8).toFixed(1);
         /*value for temp in Celsius it is gained with method where we subtract and divided fahrenheit temperature */
         let location = weatherData.description;
         /*Value for location */
         let humidity = weatherData.currentConditions.humidity;
          /*Value for humidity */
         let feelsLikeF = weatherData.currentConditions.feelslike;
          /*Value for feelsLike */
         let feelsLike = Number((feelsLikeF - 32) / 1.8).toFixed(1);
         /* /*Value for feelsLike -temperature in celsius */
         let windSpeed = weatherData.currentConditions.windSpeed;
          /*Value for windSpeed */
         let windDir = weatherData.currentConditions.windDir;
         /*Value for wind Direction */
         let rainChance = weatherData.currentConditions.precipprob;
        /*Value for rainChance */
         spanError.textContent = "";
         /*Span error is empty */
         return {
            fahrenheit: currentTempInF,
            celsius: currentTempInC,
            address: location,
            description: location,
            humidity: humidity,
            feelsLike: feelsLike,
            windSpeed: windSpeed,
            windDir: windDir,
            rainChance: rainChance,
            gotData: true,
         };
         /*Than from values it returns results that you see on webpage and godData is se to true because of positive response */

    } catch (error) {
        spanError.textContent = 'Please enter a location';
        main.textContent = "";
        throw error;
        /*This JavaScript block catches errors, alerts the user, and clears the main interface. 
        It safely traps execution issues and re-throws the error to halt further script execution**/
    }
/*Try is for our web page so it doesn't crash if something
goes wrong */
};