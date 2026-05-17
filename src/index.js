import './style.css';
import '../code/dom.css';
import {loadData} from '../code/logic';
import {loadPage} from '../code/dom';
/*Importing two css and two js files from our folders
form js we import loadData function and loadPage function */

/*We are declaring const for button, input and main section of thw page */

const submitBtn = document.getElementById("submitBtn");
const input = document.getElementById("search");
const container = document.getElementById("main-content");

/*We are making button workable with addEventListener and e handles html
we are declaring const for error and trim method removes whitespace from both ends of a string
and in In JavaScript, .value most commonly refers to the property used to get or set the 
 content of HTML form elements like <input>, <textarea>, and <select> */

 /*So that container loads empty input and also error message if you don't put
 location in input */

submitBtn.addEventListener("click", async (e) => {
    const spanError = document.getElementById("error");

    if (input.value.trim() === "") {
        container.textContent = "";
        spanError.textContent = "Please enter a location";
        return;
    }
    try {
        let weather = await loadData();
        loadPage(weather);
      } catch (error) {}

    /*This code attempts to fetch data and update a webpage.
    The empty catch block is a practice known as silent error swallowing */
});