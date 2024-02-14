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

function scoreUpdateById(scoreId) {
    //score update
    const scoreElement = document.getElementById(scoreId);
    const currentScoreText = scoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    //update
    return currentScore;

}
function lifeUpdateById(lifeId) {
    //score update
    const lifeElement = document.getElementById(lifeId);
    const currentLifeText = lifeElement.innerText;
    const currentLife = parseInt(currentLifeText);
    return currentLife;


}


function animateScoreById(param) {
    const icon = document.getElementById(param);
    icon.style.color = 'red';
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
