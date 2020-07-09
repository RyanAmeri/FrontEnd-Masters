"use strict";
import 'normalize.css';

const BREED_URL = "https://dog.ceo/api/breeds/list/all";

// Toggle dark or light theme
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
    // Add/remove the .dark-theme class to the body and picture-card
    if (toggle.checked) {
        localStorage.setItem("theme", "dark");
        setColorScheme("dark");   
    }
    else {
        localStorage.setItem("theme", "light");
        setColorScheme("light"); 
    }
});

//Get the list of breeds and populate the Breed Select Option with it
const breedSelect = document.getElementById("breed-select");
const breedPromise = fetch(BREED_URL);
breedPromise
    .then( rsp => rsp.json())
    .then(data => {
        for (const key of Object.entries(data.message)) {
            let opt = document.createElement("option");
            let txt = key[0];
            opt.text = txt;
            opt.value = txt;
            breedSelect.add(opt);
          }
    });

breedSelect.addEventListener("input",loadPictures)
const pictureViewer = document.querySelector(".picture-viewer");
const doggoNum = document.querySelector("#doggo-number");
doggoNum.addEventListener("change", loadPictures);

window.addEventListener('load', (event) => {
    doggoNum.textContent = "5";
    doggoNum.value = "5";
    loadPictures();
    setColorScheme(getSystemTheme());
});

function loadPictures() {
    //check doggoNum input is in valid range
    if (parseInt(doggoNum.value) < 1 || parseInt(doggoNum.value) > 99 || isNaN(parseInt(doggoNum.value))) {
        alert("Invalid Input")
        return;
    }

    //Set fetch URL based on breed Select. If it is "all" then 
    // no breed has been selected and use the generic one. Otherwise create
    // the URL based on the breed value selected
    let selection = breedSelect.options[breedSelect.selectedIndex].value;
    let dogURL;
    if (selection === "all")  
        dogURL = "https://dog.ceo/api/breeds/image/random";
    else 
        dogURL = `https://dog.ceo/api/breed/${breedSelect.value}/images/random`;

    let pictureCard = [];
    pictureViewer.innerHTML = "";
    for (let i = 0; i < (parseInt(doggoNum.value)); i++){
        pictureCard[i] = document.createElement("div");
        pictureCard[i].className = "picture-card";
        if (toggle.checked) 
            pictureCard[i].classList.add("dark-theme");
        else
            pictureCard[i].classList.add("light-theme");
        pictureViewer.appendChild(pictureCard[i]);
        const promise = fetch(dogURL);
        promise
        .then( response => response.json())
        .then( processedResponse => {
            const img = document.createElement("img");
            img.src = processedResponse.message;
            img.style.width = "100%";
            img.alt = "Cute doggo";
            if (img.complete) {
               hideBackground(pictureCard[i], img)
            }
            else {
                img.addEventListener('load', hideBackground(pictureCard[i], img));
                
            } 
        })
    } 
};

function hideBackground(div, img) {
    div.appendChild(img);
};

function setColorScheme(theme){
    if (localStorage.getItem("theme"))
        theme = localStorage.getItem("theme");
    const pictureCards = [...document.querySelectorAll(".picture-card")];
    if (theme === "dark") {
        toggle.checked = true;
        toggle.value = "on";
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");
        pictureCards.forEach(card => card.classList.add("dark-theme"));
        pictureCards.forEach(card => card.classList.remove("light-theme"));
    } else {
        toggle.checked = false;
        toggle.value = "off";
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        pictureCards.forEach(card => card.classList.remove("dark-theme"));
        pictureCards.forEach(card => card.classList.add("light-theme"));
    }
}

function getSystemTheme() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    return prefersDarkScheme.matches ? "dark" : "light";
}

// Event listner so that if system color changes, we follow as well
window.matchMedia("(prefers-color-scheme: dark)").addListener(
    e => e.matches && setColorScheme("dark")
);
window.matchMedia("(prefers-color-scheme: light)").addListener(
    e => e.matches && setColorScheme("light")
);
