// /BODY SECTION /
function ChangeBgImg(event, tooltipId, text, imgsrc) {
    var tooltip = document.getElementById(tooltipId);
    // tooltip.innerHTML = text;

    // Use pageX and pageY for accurate cursor position
    tooltip.style.top = (event.pageY - tooltip.clientHeight) + 'px';
    tooltip.style.left = (event.pageX + 10) + 'px';

    // tooltip.style.opacity = 1;

    var x = document.getElementById('myImage');
    x.src = imgsrc;
}
function ChangeBackToNormal(tooltipId) {
    var tooltip = document.getElementById(tooltipId);
    // tooltip.style.opacity = 0;

    var x = document.getElementById('myImage');
    x.src = "final-front-body.png";
}
function ChangeBgImg2(event, tooltipId, text, imgsrc) {
    var tooltip = document.getElementById(tooltipId);
    // tooltip.innerHTML = text;

    // Use pageX and pageY for accurate cursor position
    tooltip.style.top = (event.pageY - tooltip.clientHeight) + 'px';
    tooltip.style.left = (event.pageX + 10) + 'px';

    // tooltip.style.opacity = 1;

    var x = document.getElementById('myImage2');
    x.src = imgsrc;
}
function ChangeBackToNormal2(tooltipId) {
    var tooltip = document.getElementById(tooltipId);
    // tooltip.style.opacity = 0; 

    var x = document.getElementById('myImage2');
    x.src = "pichu-body-removebg-preview (9).png";
}
function openAbs() {
    window.location.href = 'Handplank.html';
}
function openChest() {
    window.location.href = 'Barbell.html';
}
function openBiceps() {
    window.location.href = 'Cable.html';
}
function openForeams() {
    window.location.href = 'Chinup.html';
}
function openShoulders() {
    window.location.href = 'Barbellover.html';
}
function openObliques() {
    window.location.href = 'Handsideplank.html';
}
function openQuads() {
    window.location.href = 'Barbellsquat.html';
}
function openCalf() {
    window.location.href = 'Machine.html';
}
function openGlutes() {
    window.location.href = 'Barbellhip.html';
}
function openHamstring() {
    window.location.href = 'Barbellstiff.html';
}
function openTrapsMiddle() {
    window.location.href = 'Dumbell.html';
}
function openTraps() {
    window.location.href = 'Barbellsilverback.html';
}
function openLowerback() {
    window.location.href = 'Supermans.html';
}
function openLats() {
    window.location.href = 'Carbel.html';
}
function openTriceps() {
    window.location.href = 'Cablerope.html';
}


// /=============== CALCULATE JS ===============/
const calculateForm = document.getElementById("calculate-form"),
    calculateCm = document.getElementById('calculate-cm'),
    calculateKg = document.getElementById('calculate-kg'),
    calculateMessage = document.getElementById('calculate-message')

const calculateBmi = (e) => {
    e.preventDefault()
    if (calculateCm.value === '' || calculateKg.value === '') {
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')
        //show message
        calculateMessage.textContent = 'Fill in the Height and Weight😒'

        //remove message three seconds
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 3000)
    } else {
        //BMI Formula
        const cm = calculateCm.value / 100,
            kg = calculateKg.value,
            bmi = Math.round(kg / (cm * cm))

        if (bmi < 18.5) {
            //Add color and display message
            calculateMessage.classList.add('color-red')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny`

        }
        else if (bmi < 25) {
            calculateMessage.classList.add('color-red')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy`
        }
        else {
            calculateMessage.classList.add('color-red')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight`
        }

        //To clear the input field
        calculateCm.value = ''
        calculateKg.value = ''

        //Remove message in four seconds
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 4000)
    }
}
calculateForm.addEventListener('submit', calculateBmi)

// /=============== EMAIL JS ===============/
