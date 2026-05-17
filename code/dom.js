import './dom.css';

/*We are importing dom css from folder*/

/*We are exporting loadPage function to index.js and condition is weather
which will be called in index.js */

export const loadPage = (weather) => {
    const container = document.getElementById("main-content");
    const mainCard = document.createElement("div");
    const locationText = document.createElement("p");
    const tempText = document.createElement("p");
    const descriptionText = document.createElement("p");
    const secondaryCard = document.createElement("div");
    const spanError = document.getElementById("error");
    const sc1 = document.createElement("div");
    const sc2 = document.createElement("div");
    const sc3 = document.createElement("div");
    const sc4 = document.createElement("div");

    /*In this part we are creating dom elements and also selecting certain elements */

    if (!weather) return;

    /*This statement is a common programming safeguard (a "guard clause") 
    used to prevent your app or script from crashing when it tries to access or 
    render weather data before that data has actually loaded */

    /*This two lines creates that container and span are empty strings */

    container.textContent = "";
    spanError.textContent = "";

    /*We are declaring class elements for our dom elements */

    mainCard.classList.add("mainCard");
    locationText.classList.add("locationText");
    tempText.classList.add("tempText");
    descriptionText.classList.add("descriptionText");
    secondaryCard.classList.add("secondaryCard");
    sc1.classList.add("card");
    sc2.classList.add("card");
    sc3.classList.add("card");
    sc4.classList.add("card");

    /*In this part we are loading strings with `` and also we are loading elements from 
    logic.js as you can see */

    sc1.textContent = `[~] Humidity: ${weather.humidity}`;
    sc2.textContent = `Feels Like: ${weather.feelsLike}`;
    sc3.innerText = `===> Wind Speed: ${weather.windSpeed} \n Wind Direction: ${weather.windDir}`;
    sc4.textContent = `[*] Rain Chance: ${weather.rainChance}%`;

    locationText.textContent = `${weather.address}`;
    tempText.textContent = `${weather.celsius}°C`;
    descriptionText.textContent = `${weather.description}`;

    /*Elements that will be load from logic.js which are declared there-you can see that is readable-you can
    understand which textContent is for which element */

    /*And with $ and {} you load your values */

    mainCard.appendChild(locationText);
    mainCard.appendChild(tempText);
    mainCard.appendChild(descriptionText);

    /*These elements will load in mainCard idv */

    secondaryCard.appendChild(sc1);
    secondaryCard.appendChild(sc2);
    secondaryCard.appendChild(sc3);
    secondaryCard.appendChild(sc4);

    /*This elements will load in secondaryCard div-sc elements */

    container.appendChild(mainCard);
    container.appendChild(secondaryCard);

    /*Then these two divs will load in container const which
    selected main content id from html */


};