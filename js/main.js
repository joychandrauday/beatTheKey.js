//play function
function getGameStart() {
    const alphabet = getRandomAlphabet();

    const currentAlphabet = document.getElementById('currentAlphabet');
    currentAlphabet.innerText = alphabet;
    
    changeKeyColorById(alphabet);
}
/////hide and show
function play() {
    hideElementId('homeUi')
    //add playground
    showElementId('gameUi')
    // score 
    newElementValueUpdate('lifeCard',5)
    newElementValueUpdate('scoreCard',0)
    //next step
    getGameStart();
}

function playAgain() {
    hideElementId('scoreUi')
    //add playground
    showElementId('gameUi')
    //next step
    getGameStart();
}
/////hide and show
document.addEventListener('keyup', taskOnKeypress)
function taskOnKeypress(event) {
    const playerPressed = (event.key);
    const currentAlphabetElement = document.getElementById('currentAlphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    if (expectedAlphabet === playerPressed) {
        const currentScore=scoreUpdateById('scoreCard');
        const newScore = currentScore + 1;

        //show score
        const currentScoreElement=document.getElementById('scoreCard');
        currentScoreElement.innerText = newScore;

        animateScoreById('scoreIcon');


        removeKeyColorById(expectedAlphabet);
        getGameStart();

    } else {

        
        const currentLife=lifeUpdateById('lifeCard');
        const  newLife= currentLife - 1;

        //show score
        const currentLifeElement=document.getElementById('lifeCard');
        currentLifeElement.innerText = newLife;

        animateScoreById('lifeIcon');
        
        if (newLife === 0) {
            resetGameById()
        }
    }
}


function resetGameById() {
    hideElementId('gameUi');
    //add playground
    showElementId('scoreUi');
    //next step
    newElementValueUpdate('scoreCard',0)
    newElementValueUpdate('lifeCard',5)
    
    const finalScore= scoreUpdateById('scoreCard');
    console.log(finalScore);
}