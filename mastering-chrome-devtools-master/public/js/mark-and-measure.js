window.addEventListener("load", thingToMeasure);

function thingToMeasure() {
  const start = new Date().getTime();

  fetch("/api")
    .then((result) => result.json())
    .then((json) => {
      json.images.forEach((image) => console.log(image.name));
      const end = new Date().getTime();
      const time = end - start;
      console.log(time);
    });
}
