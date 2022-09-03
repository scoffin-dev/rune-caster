// Grab the empty rune slots
let rune1Img = document.querySelector('#rune-slot-1 img');
let rune2Img = document.querySelector('#rune-slot-2 img')
let rune3Img = document.querySelector('#rune-slot-3 img')

let rune1NamePlace = document.querySelector(`#rune-slot-1 p`);
let rune2NamePlace = document.querySelector(`#rune-slot-2 p`);
let rune3NamePlace = document.querySelector(`#rune-slot-3 p`);

// Select a Futhark

// Throw button
let castBtn = document.querySelector('#cast-btn');
let runePool = [1, 2, 3, 4, 5];
let numRunesRemaining = runePool.length;

// When the cast button is clicked...
castBtn.addEventListener('click', () => {

    let rune1 = assignRune(1);
    displayRuneImg(rune1, rune1Img);
    displayRuneName(rune1, rune1NamePlace);

    let rune2 = assignRune(2);
    displayRuneImg(rune2, rune2Img);
    displayRuneName(rune2, rune2NamePlace);

    let rune3 = assignRune(3);
    displayRuneImg(rune3, rune3Img);
    displayRuneName(rune3, rune3NamePlace);

    runePool = [1, 2, 3, 4, 5]
});

function assignRune(runeNum) {
    // Assign rune to the value at a random index in runePool
    let indexOfRune = Math.floor((Math.random() * (runePool.length - runeNum)));
    let rune = runePool[indexOfRune];
    console.log(`rune = ${rune}`);
    // Remove the assigned rune from runePool
    runePool.splice(indexOfRune, 1);
    console.log(`runePool = ${runePool}`);
    return rune;
}

function identifyRune(rune) {
    switch (rune) {
        case 1: 
            return `Fehu`;
        break;
        
        case 2:
            return `Uruz`;
        break;

        case 3:
            return `Thurisaz`;
        break;

        case 4:
            return `Ansuz`;
        break;

        case 5:
            return `Raidho`;
        break;
        
        default:
            return `Wyrd... 404: Rune not found`
    }
}

function displayRuneImg(runeNum, runeImgElement, ) {
    runeImgElement.setAttribute('src', `images/elder-futhark/rune${runeNum}.png`);
}

function displayRuneName(runeNum, runeNameElement) {
    let runeName = identifyRune(runeNum);
    runeNameElement.textContent = runeName;
}

