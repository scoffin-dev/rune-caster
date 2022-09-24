// Grab the empty rune slots
let rune1Img = document.querySelector('#rune-slot-1 img');
let rune2Img = document.querySelector('#rune-slot-2 img')
let rune3Img = document.querySelector('#rune-slot-3 img')

let rune1NamePlace = document.querySelector(`#rune-slot-1 p`);
let rune2NamePlace = document.querySelector(`#rune-slot-2 p`);
let rune3NamePlace = document.querySelector(`#rune-slot-3 p`);

let rune1SymbolElement = document.querySelector(`#rune-1-symbol`);
let rune2SymbolElement = document.querySelector(`#rune-2-symbol`);
let rune3SymbolElement = document.querySelector(`#rune-3-symbol`);

let rune1SignificanceElement = document.querySelector(`#rune-1-significance`);
let rune2SignificanceElement = document.querySelector(`#rune-2-significance`);
let rune3SignificanceElement = document.querySelector(`#rune-3-significance`);

let rune1Info = [];
let rune2Info = [];
let rune3Info = [];

let castBtn = document.querySelector('#cast-btn');

let runePool = [
    1, 2, 3, 4, 5, 6, 7, 8,
    9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24
];

// When the cast button is clicked...
castBtn.addEventListener('click', () => {


    let rune1 = assignRune(1);
    rune1Assigned = true;
    displayRuneImg(rune1, rune1Img);
    displayRuneName(rune1, rune1NamePlace);
    displayRuneDescription(rune1, rune1SymbolElement, rune1SignificanceElement);

    let rune2 = assignRune(2);
    displayRuneImg(rune2, rune2Img);
    displayRuneName(rune2, rune2NamePlace);
    displayRuneDescription(rune2, rune2SymbolElement, rune2SignificanceElement);

    let rune3 = assignRune(3);
    displayRuneImg(rune3, rune3Img);
    displayRuneName(rune3, rune3NamePlace);
    displayRuneDescription(rune3, rune3SymbolElement, rune3SignificanceElement);

    runePool = [
        1, 2, 3, 4, 5, 6, 7, 8,
        9, 10, 11, 12, 13, 14, 15, 16,
        17, 18, 19, 20, 21, 22, 23, 24
    ];
});

function Rune(name, symbol, significance) {
    this.name = name;
    this.symbol = symbol;
    this.significance = significance;
}

function assignRune(runeNum) {
    // Assign rune to the value at a random index in runePool
    let indexOfRune = Math.floor((Math.random() * (runePool.length - runeNum)));
    let rune = runePool[indexOfRune];
    // Remove the assigned rune from runePool
    runePool.splice(indexOfRune, 1);
    return rune;
}

function identifyRune(rune) {
    switch (rune) {
        case 1: 
            return new Rune(`Fehu`, `Symbol: Cattle`,  `Significance: Wealth`);
        break;
        
        case 2:
            return new Rune(`Uruz`, `Symbol: Aurochs`,`Significance: Strength of Will`);
        break;

        case 3:
            return new Rune(`Thurisaz`, `Symbol: Giant`, `Significance: Danger, Suffering`);
        break;

        case 4:
            return new Rune(`Ansuz`, `Symbol: Aesir`, `Significance: Prosperity, Vitality`);
        break;

        case 5:
            return new Rune(`Raidho`, `Symbol: Journey`, `Significance: Movement, Work, Growth`);
        break;

        case 6:
            return new Rune(`Kaunan`, `Symbol: Ulcer`, ` Significance: Mortality, Pain`);
        break;

        case 7:
            return new Rune(`Gebo`, `Symbol: Gift`, `Significance: Generosity`);
        break;

        case 8:
            return new Rune(`Wunjo`, `Symbol: Joy`, `Significance: Bliss, Excitement`);
        break;

        case 9:
            return new Rune(`Hagalaz`, `Symbol: Hail`, `Significance: Destruction, Chaos`);
        break;

        case 10:
            return new Rune(`Naudhiz`, `Symbol: Need`, `Significance: Lack, Unfulfilled Desire`);
        break;

        case 11:
            return new Rune(`Isaz`, `Symbol: Ice`, `Significance: Unknown. Speculation: Challenge, Frustration`);
        break;

        case 12:
            return new Rune(`Jera`, `Symbol: Year`, `Significance: Harvest, Reward`);
        break;

        case 13:
            return new Rune(`Eihwaz`, `Symbol: Yew`, `Significance: Strength, Stability`);
        break;

        case 14:
            return new Rune(`Pertho`, `Symbol: Secret`, `Significance: Uncertainty, Hidden Things`);
        break;

        case 15:
            return new Rune(`Algiz`, `Symbol: Elk`, `Significance: Protection`);
        break;

        case 16:
            return new Rune(`Sowilo`, `Symbol: Sun`, `Significance: Success, Solace`);
        break;

        case 17:
            return new Rune(`Tiwaz`, `Symbol: Tiwaz (God of War)`, `Significance: Victory, Honor`);
        break;

        case 18:
            return new Rune(`Berkanan`, `Symbol: Birch`, `Significance: Growth, Sustenance`);
        break;

        case 19:
            return new Rune(`Ehwaz`, `Symbol: Horse`, `Significance: Trust, Faith, Companionship`);
        break;

        case 20:
           return new Rune(`Mannaz`, `Symbol: Man`, `Significance: Increase, Support`);
        break;

        case 21:
            return new Rune(`Laguz`, `Symbol: Formlessness`, `Significance: Chaos, Potentiality, The Unknown`);
        break;

        case 22:
            return new Rune(`Ingwaz`, `Symbol: Ingwaz/Freyr (God of Peace, Prosperity)`, `Significance: Beginnings, Actualization of Potential`);
        break;

        case 23:
            return new Rune(`Othalan`, `Symbol: Inheritance`, `Significance: Heritage, Tradition, Nobility`);
        break;

        case 24:
            return new Rune(`Dagaz`, `Symbol: Day`, `Significance: Hope, Happiness`);
        break;

        default:
            return `Wyrd... 404: Rune not found`
    }
}

function displayRuneImg(runeNum, runeImgElement, ) {
    runeImgElement.setAttribute('src', `images/elder-futhark/rune${runeNum}.png`);
}

function displayRuneName(runeNum, runeNameElement) {
    let runeObj = identifyRune(runeNum);
    let runeName = runeObj.name;
    runeNameElement.textContent = runeName;
}

function displayRuneDescription(runeNum, runeSymbolElement, runeSignificanceElement) {
    let runeObj = identifyRune(runeNum);
    runeSymbolElement.textContent = runeObj.symbol;
    runeSignificanceElement.textContent = runeObj.significance;
}