const mongoose = require("mongoose");

/* * * Connection * * */
mongoose.connect("mongodb://localhost/runeDatabase",
  () => {
    console.log(`Connected to MongoDB`);
  },
  (err) => console.error(err)
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

/* * * Schema * * */

const runeSchema = new mongoose.Schema({
    runeId: {type:Number, required:true},
    futhark: {type:String, enum:['elder', 'younger'], lowercase:true},
    name: {type:String, required:true, lowercase:true},
    description: {
        symbol: String,
        significance: String   
    },
	engAlphaChar: {type:Array, required:true, minLength:1, maxLength: 2, lowercase:true}
});

/* * * Model * * */
const RuneModel = mongoose.model('RuneModel', runeSchema);

/* * * Data * * */
  
async function createElderFuthark() {
    try {
        const fehu = await RuneModel.create({
        runeId: 1,
        futhark: 'Elder',
        name: 'Fehu',
        description: {symbol: 'Cattle', significance: 'Wealth'},
        engAlphaChar: ['F']
        });
        const uruz = await RuneModel.create({
            runeId: 2,
            futhark: 'Elder',
            name: 'Uruz',
            description: {symbol: 'Aurochs', significance: 'Strength of Will'},
            engAlphaChar: ['U']
        });
        const thurisaz = await RuneModel.create({
            runeId: 3,
            futhark: 'Elder',
            name: 'Thurisaz',
            description: {symbol: 'Giant', significance: 'Danger, Suffering'},
            engAlphaChar: ['Th']
        });
        const  ansuz = await RuneModel.create({
            runeId: 4,
            futhark: 'Elder',
            name: 'Ansuz',
            description: {symbol: 'Aesir', significance: 'Prosperity, Vitality'},
            engAlphaChar: ['A']
        });
        const raidho = await RuneModel.create({
            runeId: 5,
            futhark: 'Elder',
            name: 'Raidho',
            description: {symbol: 'Journey', significance: 'Movement, Work, Growth'},
            engAlphaChar: ['R']
        });
        const kaunan = await RuneModel.create({
            runeId: 6,
            futhark: 'Elder',
            name: 'Kaunan',
            description: {symbol: 'Ulcer', significance: 'Mortality, Pain'},
            engAlphaChar: ['C', 'K', 'Q']
        });
        const gebo = await RuneModel.create({
            runeId: 7,
            futhark: 'Elder',
            name: 'Gebo',
            description: {symbol: 'Gift', significance: 'Generosity'},
            engAlphaChar: ['G']
        });
        const wunjo = await RuneModel.create({
            runeId: 8,
            futhark: 'Elder',
            name: 'Wunjo',
            description: {symbol: 'Joy', significance: 'Bliss, Excitement'},
            engAlphaChar: ['W', 'V']
        });
        const hagalaz = await RuneModel.create({
            runeId: 9,
            futhark: 'Elder',
            name: 'Hagalaz',
            description: {symbol: 'Hail', significance: 'Destruction, Chaos'},
            engAlphaChar: ['H']
        });
        const naudhiz = await RuneModel.create({
            runeId: 10,
            futhark: 'Elder',
            name: 'Naudhiz',
            description: {symbol: 'Need', significance: 'Lack, Unfulfilled Desire'},
            engAlphaChar: ['N']
        });
        const isaz = await RuneModel.create({
            runeId: 11,
            futhark: 'Elder',
            name: 'Isaz',
            description: {symbol: 'Ice', significance: 'Challenge, Frustration'},
            engAlphaChar: ['I']
        });
        const jera = await RuneModel.create({
            runeId: 12,
            futhark: 'Elder',
            name: 'Jera',
            description: {symbol: 'Year', significance: 'Harvest, Reward'},
            engAlphaChar: ['J', 'Y']
        });
        const eihwaz = await RuneModel.create({
            runeId: 13,
            futhark: 'Elder',
            name: 'Eiwaz',
            description: {symbol: 'Yew', significance: 'Strength, Stability'},
            engAlphaChar: ['E']
        });
        const pertho = await RuneModel.create({
            runeId: 14,
            futhark: 'Elder',
            name: 'Pertho',
            description: {symbol: 'Secret', significance: 'Uncertainty, Hidden Things'},
            engAlphaChar: ['P']
        });
        const algiz = await RuneModel.create({
            runeId: 15,
            futhark: 'Elder',
            name: 'Algiz',
            description: {symbol: 'Elk', significance: 'Protection'},
            engAlphaChar: ['X', 'Z']
        });
        const sowilo = await RuneModel.create({
            runeId: 16,
            futhark: 'Elder',
            name: 'Sowilo',
            description: {symbol: 'Sun', significance: 'Success, Solace'},
            engAlphaChar: ['S']
        });
        const tiwaz = await RuneModel.create({
            runeId: 17,
            futhark: 'Elder',
            name: 'Tiwaz',
            description: {symbol: 'Tiwaz (God of War)', significance: 'Victory, Honor'},
            engAlphaChar: ['T']
        });
        const berkanan = await RuneModel.create({
            runeId: 18,
            futhark: 'Elder',
            name: 'Berkanan',
            description: {symbol: 'Birch', significance: 'Growth, Sustenance'},
            engAlphaChar: ['B']
        });
        const ehwaz = await RuneModel.create({
            runeId: 19,
            futhark: 'Elder',
            name: 'Ehwaz',
            description: {symbol: 'Horse', significance: 'Trust, Faith, Companionship'},
            engAlphaChar: ['E']
        });
        const mannaz = await RuneModel.create({
            runeId: 20,
            futhark: 'Elder',
            name: 'Mannaz',
            description: {symbol: 'Man', significance: 'Increase, Support'},
            engAlphaChar: ['M']
        });
        const laguz = await RuneModel.create({
            runeId: 21,
            futhark: 'Elder',
            name: 'Laguz',
            description: {symbol: 'Formlessness', significance: 'Chaos, Potentiality, The Unknown'},
            engAlphaChar: ['L']
        });
        const ingwaz = await RuneModel.create({
            runeId: 22,
            futhark: 'Elder',
            name: 'Ingwaz',
            description: {symbol: 'Ingwaz/Freyr (God of Peace, Prosperity)', significance: 'Beginnings, Actualization of Potential'},
            engAlphaChar: ['Ng']
        });
        const othalan = await RuneModel.create({
            runeId: 23,
            futhark: 'Elder',
            name: 'Othalan',
            description: {symbol: 'Inheritance', significance: 'Heritage, Tradition, Nobility'},
            engAlphaChar: ['O']
        });
        const dagaz = await RuneModel.create({
            runeId: 24,
            futhark: 'Elder',
            name: 'Dagaz',
            description: {symbol: 'Day', significance: 'Hope, Happiness'},
            engAlphaChar: ['D']
        });
    } catch(err) {
        console.log(`ERROR in function createElderFuthark: ${err.message}`);
    }
}

async function createYoungerFuthark() {
    // Fill this in later
}

/* * * Helper methods * * */

async function getRuneByRuneId(id) {
    try {
        const rune = await RuneModel.findOne({runeId: id});
        if(rune === null) {
            console.log(`No rune found with runeId of ${id}`)
        } else {
            console.log(`Found rune with runeId of ${id}: ${rune}`);
        }
    } catch(err) {
        console.log(`ERROR: ${err.message}`);
    }
}

async function deleteRuneByRuneId(runeName) {
//     try {
//         await RuneModel.deleteOne({name: runeName});
//         console.log(`Rune ${runeName} was deleted`);
//     } catch(err) {
//         console.log(`ERROR: ${err.message}`);
//     }
}

//RuneModel.deleteMany({}, () => {});

/* * * Function calls * * */

//createElderFuthark();

//getRuneByRuneId(4);
  
module.exports = RuneModel;