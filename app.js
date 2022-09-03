// Grab the empty rune slots
let rune1Img = document.querySelector('#rune-slot-1 img');
let rune2Img = document.querySelector('#rune-slot-2 img')
let rune3Img = document.querySelector('#rune-slot-3 img')

let rune1NamePlace = document.querySelector(`#rune-slot-1 p`);
let rune2NamePlace = document.querySelector(`#rune-slot-2 p`);
let rune3NamePlace = document.querySelector(`#rune-slot-3 p`);

let rune1DescriptionElement = document.querySelector(`#rune-1-description`);
let rune2DescriptionElement = document.querySelector(`#rune-2-description`);
let rune3DescriptionElement = document.querySelector(`#rune-3-description`);

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
    displayRuneDescription(rune1, rune1DescriptionElement);

    let rune2 = assignRune(2);
    displayRuneImg(rune2, rune2Img);
    displayRuneName(rune2, rune2NamePlace);
    displayRuneDescription(rune2, rune2DescriptionElement);

    let rune3 = assignRune(3);
    displayRuneImg(rune3, rune3Img);
    displayRuneName(rune3, rune3NamePlace);
    displayRuneDescription(rune3, rune3DescriptionElement);

    runePool = [
        1, 2, 3, 4, 5, 6, 7, 8,
        9, 10, 11, 12, 13, 14, 15, 16,
        17, 18, 19, 20, 21, 22, 23, 24
    ];    
});

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
            return [`Fehu`, `Symbol: Cattle. Significance: Wealth.`];
        break;
        
        case 2:
            return [`Uruz`, `Symbol: Aurochs. Significance: Strength of Will.`];
        break;

        case 3:
            return [`Thurisaz`, `Symbol: Giant. Significance: Danger, Suffering.`];
        break;

        case 4:
            return [`Ansuz`, `Symbol: Aesir. Significance: Prosperity, Vitality`];
        break;

        case 5:
            return [`Raidho`, `Symbol: Journey. Significance: Movement, Work, Growth.`];
        break;

        case 6:
            return [`Kaunan`, `Symbol: Ulcer. Significance: Mortality, Pain.`];
        break;

        case 7:
            return [`Gebo`, `Symbol: Gift. Significance: Generosity.`];
        break;

        case 8:
            return [`Wunjo`, `Symbol: Joy. Significance: Bliss, Excitement.`];
        break;

        case 9:
            return [`Hagalaz`, `Symbol: Hail. Significance: Destruction, Chaos.`];
        break;

        case 10:
            return [`Naudhiz`, `Symbol: Need. Significance: Lack, Unfulfilled Desire.`];
        break;

        case 11:
            return [`Isaz`, `Symbol: Ice. Significance: Unknown. Speculation: Challenge, Frustration`];
        break;

        case 12:
            return [`Jera`, `Symbol: Year. Significance: Harvest, Reward.`];
        break;

        case 13:
            return [`Eihwaz`, `Symbol: Yew. Significance: Strength, Stability.`];
        break;

        case 14:
            return [`Pertho`, `Symbol: Secret. Significance: Unkown. Speculation: Uncertainty, Hidden Things`];
        break;

        case 15:
            return [`Algiz`, `Symbol: Elk. Significance: Protection.`];
        break;

        case 16:
            return [`Sowilo`, `Symbol: Sun. Significance: Success, Solace.`];
        break;

        case 17:
            return [`Tiwaz`, `Symbol: Tiwaz (God of War). Significance: Victory, Honor.`];
        break;

        case 18:
            return [`Berkanan`, `Symbol: Birch. Significance: Fertility, Growth, Sustenance.`];
        break;

        case 19:
            return [`Ehwaz`, `Symbol: Horse. Significance: Trust, Faith, Companionship.`];
        break;

        case 20:
            return [`Mannaz`, `Symbol: Man. Significance: Increase, Support.`];
        break;

        case 21:
            return [`Laguz`, `Symbol: Formlessness. Significance: Chaos, Potentiality, The Unknown.`];
        break;

        case 22:
            return [`Ingwaz`, `Symbol: Ingwaz/Freyr (God of Fertility, Kingship, Peace, Prosperity). Significance: Fertility, Beginnings, Actualization of Potential.`];
        break;

        case 23:
            return [`Othalan`, `Symbol: Inheritance. Significance: Heritage, Tradition, Nobility.`];
        break;

        case 24:
            return [`Dagaz`, `Symbol: Day. Significance: Hope, Happiness.`];
        break;
        
        default:
            return `Wyrd... 404: Rune not found`
    }
}

function displayRuneImg(runeNum, runeImgElement, ) {
    runeImgElement.setAttribute('src', `images/elder-futhark/rune${runeNum}.png`);
}

function displayRuneName(runeNum, runeNameElement) {
    let runeName = identifyRune(runeNum)[0];
    runeNameElement.textContent = runeName;
}

function displayRuneDescription(runeNum, runeDescriptionElement) {
    let runeDescription = identifyRune(runeNum)[1];
    runeDescriptionElement.textContent = runeDescription;
}