const redLight = document.getElementById('red-light');
const yellowLight = document.getElementById('yellow-light');
const greenLight = document.getElementById('green-light');
const buttons = document.getElementById('buttons');

/* Set Defaults */
toggleRedLight()
toGreenbutton()

function toggleRedLight() {
    redLight.classList.add('active');
}

function toggleYellowLight() {
    yellowLight.classList.add('active');
}

function toggleGreenLight() {
    greenLight.classList.add('active');
}

function redAndYellow() {
    redLight.classList.add('active');
    yellowLight.classList.add('active');
}

function clearAllLights() {
    redLight.classList.remove('active');
    yellowLight.classList.remove('active');
    greenLight.classList.remove('active');
}

function toGreenbutton() {
    buttons.innerHTML = `
        <button id="button-to-green" onclick="redToGreen()">Skift til grønt</button>
    `;
}

function toRedbutton() {
    buttons.innerHTML = `
        <button id="button-to-red" onclick="greenToRed()">Skift til rødt</button>
    `;
}

function redToGreen() {

    toRedbutton();
    
    clearAllLights();
    toggleRedLight();
    
    setTimeout( () => {

        redAndYellow();

        setTimeout( () => {
            clearAllLights();
            toggleGreenLight();

        }, 1000);
        
    }, 1500);

}

function greenToRed() {

    toGreenbutton();

    clearAllLights();
    toggleGreenLight();

    setTimeout( () => {

        clearAllLights();
        toggleYellowLight();

        setTimeout( () => {
            clearAllLights();
            toggleRedLight();

        }, 1000);

    }, 1500);
}