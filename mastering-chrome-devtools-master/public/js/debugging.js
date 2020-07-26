const appRoot = document.getElementById("root");
const fetcher = document.getElementById("fetcher");
fetcher.addEventListener("click", fetchImages);

function fetchImages() {
  fetch("/api")
    .then((response) => response.json())
    .then((data) => {
      processImages(data.images);
    });
}

function processImages(images) {
  const list = document.createElement("ul");
  images.forEach((element) => {
    // Create elements
    const item = document.createElement("li");
    const title = document.createElement("h2");
    const author = document.createElement("span");
    const image = new Image();

    // Style elements
    item.classList.add("debug-card");
    title.classList.add("debug-title");
    author.classList.add("debug-author");

    // Populate elements
    title.innerText = element.name;
    author.innerText = ` by ${element.photographer}`;
    image.src = element.source;

    // Append elements
    item.appendChild(title);
    item.appendChild(author);
    item.appendChild(image);
    list.appendChild(item);
    appRoot.appendChild(list);
  });
}
