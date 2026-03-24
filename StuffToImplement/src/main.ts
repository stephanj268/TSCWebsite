const images = document.querySelectorAll("img");


images.forEach((img, index) => {
    img.addEventListener("click", () => {
        alert(`You clicked image ${index + 1}`);
    });
});


import "./slider";

