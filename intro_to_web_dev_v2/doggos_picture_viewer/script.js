import 'normalize.css';

const DOG_URL = "https://dog.ceo/api/breeds/image/random";


const pictureViewer = document.querySelector(".picture-viewer");
const doggoNum = document.querySelector("#doggo-number");
doggoNum.addEventListener("change", loadPictures);

window.addEventListener('load', (event) => {
    doggoNum.textContent = "5";
    doggoNum.value = "5";
    loadPictures();
});


function loadPictures() {
    let pictureCard = [];
    pictureViewer.innerHTML = "";
    for (let i = 0; i < (parseInt(doggoNum.value)); i++){
        pictureCard[i] = document.createElement("div");
        pictureCard[i].className = "picture-card";
        pictureViewer.appendChild(pictureCard[i]);
        const promise = fetch(DOG_URL);
        promise
        .then( response => response.json())
        .then( processedResponse => {
            const img = document.createElement("img");
            img.src = processedResponse.message;
            img.style.width = "100%";
            img.alt = "Cute doggo";
            pictureCard[i].appendChild(img);
        });
    } 
}



//const pictureCard = document.querySelector(".picture-card");






