const colorBtn = document.querySelector(".choose-color");
const body = document.querySelector("Body");
const rgbDisplay = document.querySelector(".color-number");

function changeColor() {
    const colorOne = Math.floor(Math.random() * 256) + 1;
    const colorTwo = Math.floor(Math.random() * 256) + 1;
    const colorThree = Math.floor(Math.random() * 256) + 1;

    let rgb = `rgb(${colorOne},${colorTwo},${colorThree})`;


    //body.style.background needs to be typed out instead of being held
    //in a variable
    body.style.background = rgb;

    console.log(body.style.background);

    rgbDisplay.innerHTML = `${rgb}`;
}

colorBtn.addEventListener("click", changeColor);



//take the rgb variable and tie it to the background color


