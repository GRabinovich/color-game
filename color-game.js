let arrColors = []
let numColor = 6

    function generateRandomColors (num) {
        for (let i=0; i < num; i++){
            arrColors.push(randomColor())
        }
    }
    generateRandomColors(numColor)

let cuadrados = document.querySelectorAll(".square")
let colorGanador = document.querySelector("#colorDisplay")
let pickedColor = arrColors[pickColor()]
colorGanador.textContent = pickedColor
let message = document.querySelector("#message")
let h1 = document.querySelector("h1")
let resetButton = document.querySelector("#reset")
let easyButton = document.querySelector("#easyButton")
let hardButton = document.querySelector("#hardButton")

    function background (){
        for (let i=0; i < cuadrados.length; i++){
        let clickedColor = cuadrados[i]
        clickedColor.style.backgroundColor = arrColors[i]
        clickedColor.addEventListener("click", function(){
            if (clickedColor.style.backgroundColor !== pickedColor){
                clickedColor.style.backgroundColor = "rgb(255, 223, 211)"
                message.textContent = "Intentalo de Nuevo"
            } else if (clickedColor.style.backgroundColor === pickedColor){
                message.textContent = "Correcto!"
                h1.style.backgroundColor = pickedColor
                colorGanador.style.color = pickedColor
                changeColors(pickedColor)
                resetButton.textContent = "Play Again?"
            }
        })
    }
    }
    background()

    function changeColors (color) {
        for (let i=0; i < cuadrados.length; i++){
            cuadrados[i].style.backgroundColor = color
        }
    }

    function pickColor () {
        return Math.floor(Math.random()*arrColors.length)
    }

    function randomColor () {
        let r = Math.round(Math.random()*255)
        let g = Math.round(Math.random()*255)
        let b  = Math.round(Math.random()*255)
        return (`rgb(${r}, ${g}, ${b})`)
    }

    function resetColor(){
        pickedColor = arrColors[pickColor()];
        colorGanador.textContent = pickedColor;
        background();
        message.textContent = "";
        resetButton.textContent = "Nuevos Colores";
        h1.style.backgroundColor = "rgb(255, 223, 211)";
        colorGanador.style.color = "black";
    }

    function reset() {
        resetButton.addEventListener("click", function() {
        arrColors = [];
        numColor = hardButton.classList.contains("selected") ? numColor : 3;
        generateRandomColors(numColor);
        resetColor()
        });
    }
    reset()

    function handleButtonClick(selectedButton, deselectedButton, numColors) {
        selectedButton.classList.add("selected");
        deselectedButton.classList.remove("selected");
        arrColors = [];
        numColor = numColors;
        generateRandomColors(numColor);
        cuadrados[3].style.display = numColor === 3 ? "none" : "block";
        cuadrados[4].style.display = numColor === 3 ? "none" : "block";
        cuadrados[5].style.display = numColor === 3 ? "none" : "block";
        resetColor()
    }
    
    easyButton.addEventListener("click", function() {
        handleButtonClick(this, hardButton, 3);
    });
    
    hardButton.addEventListener("click", function() {
        handleButtonClick(this, easyButton, 6);
    });