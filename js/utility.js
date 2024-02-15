function hideElementId(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}
function showElementId(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

//alphabet
function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstubwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index]
    return alphabet;
}

function changeKeyColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeKeyColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
function animateScoreById(param) {
    const icon = document.getElementById(param);
    icon.style.color = 'red';
}
function reAnimateScoreById(param) {
    const icon = document.getElementById(param);
    icon.style.color = 'white';
}
function newElementValueUpdate(valueId,value) {

    // update
    const totalvalueElement = document.getElementById(valueId);
    totalvalueElement.innerText = value;
}
function valueFromId(valueId) {
    const valueElement=document.getElementById(valueId);
    const currentValueText=valueElement.innerText;
    const currentValue=parseInt(currentValueText);
    return currentValue;
}
