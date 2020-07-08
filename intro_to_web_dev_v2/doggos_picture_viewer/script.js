"use strict";
import 'normalize.css';

const BREED_URL = "https://dog.ceo/api/breeds/list/all";

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