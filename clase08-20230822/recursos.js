const path = require('path')
const fs = require('fs')

let ruta = path.join(__dirname, 'archivos', 'usuarios.json')

function getUsers() {
    if (fs.existsSync(ruta)) {
        return JSON.parse(fs.readFileSync(ruta, 'utf-8'))
    } else {
        return []
    }
}

function saveUsers(users) {
    fs.writeFileSync(ruta, JSON.stringify(users, null, 5))
}

// --------------------------------------
// --------------------------------------
// --------------------------------------


// nodemon.json
// {
//     "ignore": ["*.json", "*.js"]
// }



let heroes = [
    {
        id: 1,
        name: "Spider-Man",
        alias: "Peter Parker",
        powers: ["Wall-crawling", "Web-shooting", "Superhuman strength"],
        team: "Avengers",
        publisher: "Marvel"
    },
    {
        id: 2,
        name: "Superman",
        alias: "Clark Kent",
        powers: ["Superhuman strength", "Flight", "Heat vision"],
        team: "Justice League",
        publisher: "DC"
    },
    {
        id: 3,
        name: "Iron Man",
        alias: "Tony Stark",
        powers: ["Powered armor", "Genius-level intellect", "Flight"],
        team: "Avengers",
        publisher: "Marvel"
    },
    {
        id: 4,
        name: "Wonder Woman",
        alias: "Diana Prince",
        powers: ["Superhuman strength", "Lasso of Truth", "Flight"],
        team: "Justice League",
        publisher: "DC"
    },
    {
        id: 5,
        name: "Black Widow",
        alias: "Natasha Romanoff",
        powers: ["Expert spy", "Skilled hand-to-hand combatant", "Weaponry"],
        team: "Avengers",
        publisher: "Marvel"
    },
    {
        id: 6,
        name: "Batman",
        alias: "Bruce Wayne",
        powers: ["Intelligence", "Peak human physical condition", "Advanced technology"],
        team: "Justice League",
        publisher: "DC"
    },
    {
        id: 7,
        name: "Aquaman",
        alias: "Arthur Curry",
        powers: ["Superhuman strength", "Hydrokinesis", "Telepathy with sea life"],
        team: "Justice League",
        publisher: "DC"
    },
    {
        id: 8,
        name: "Captain America",
        alias: "Steve Rogers",
        powers: ["Superhuman strength", "Enhanced agility", "Indomitable will"],
        team: "Avengers",
        publisher: "Marvel"
    },
    {
        id: 9,
        name: "Flash",
        alias: "Barry Allen",
        powers: ["Super speed", "Time travel", "Speed force manipulation"],
        team: "Justice League",
        publisher: "DC"
    },
    {
        id: 10,
        name: "Black Panther",
        alias: "T'Challa",
        powers: ["Enhanced senses", "Vibranium suit", "Skilled warrior"],
        team: "Avengers",
        publisher: "Marvel"
    },
    {
        id: 11,
        name: "Green Lantern",
        alias: "Hal Jordan",
        powers: ["Ring-generated constructs", "Flight", "Energy manipulation"],
        team: "Justice League",
        publisher: "DC"
    },
    {
        id: 12,
        name: "Thor",
        alias: "Thor Odinson",
        powers: ["Mjolnir (hammer)", "Control over lightning", "Superhuman durability"],
        team: "Avengers",
        publisher: "Marvel"
    },
    {
        id: 13,
        name: "Batwoman",
        alias: "Kate Kane",
        powers: ["Martial arts", "Detective skills", "Advanced technology"],
        team: "Bat Family",
        publisher: "DC"
    },
    {
        id: 14,
        name: "Hulk",
        alias: "Bruce Banner",
        powers: ["Superhuman strength", "Invulnerability", "Regenerative healing"],
        team: "Avengers",
        publisher: "Marvel"
    },
    {
        id: 15,
        name: "Zatanna",
        alias: "Zatanna Zatara",
        powers: ["Magic spells", "Sorcery", "Illusion manipulation"],
        team: "Justice League Dark",
        publisher: "DC"
    },
    {
        id: 16,
        name: "Doctor Strange",
        alias: "Stephen Strange",
        powers: ["Mystic arts", "Reality manipulation", "Dimensional travel"],
        team: "Defenders",
        publisher: "Marvel"
    },
    {
        id: 17,
        name: "Green Arrow",
        alias: "Oliver Queen",
        powers: ["Archery skills", "Peak human physical condition", "Strategic mind"],
        team: "Justice League",
        publisher: "DC"
    },
    {
        id: 18,
        name: "Scarlet Witch",
        alias: "Wanda Maximoff",
        powers: ["Reality manipulation", "Energy projection", "Telekinesis"],
        team: "Avengers",
        publisher: "Marvel"
    },
    {
        id: 19,
        name: "Martian Manhunter",
        alias: "J'onn J'onzz",
        powers: ["Shape-shifting", "Telepathy", "Super strength"],
        team: "Justice League",
        publisher: "DC"
    },
    {
        id: 20,
        name: "Deadpool",
        alias: "Wade Wilson",
        powers: ["Regenerative healing", "Expert marksman", "Fourth wall breaking"],
        team: "None",
        publisher: "Marvel"
    }
];

let villanos = [
    {
        id: 1,
        name: "Joker",
        alias: "Unknown",
        powers: ["Criminal mastermind", "Insanity", "Trickery"],
        team: "Injustice League",
        publisher: "DC"
    },
    {
        id: 2,
        name: "Magneto",
        alias: "Erik Lehnsherr",
        powers: ["Magnetism manipulation", "Control over metal", "Leadership"],
        team: "Brotherhood of Mutants",
        publisher: "Marvel"
    },
    {
        id: 3,
        name: "Lex Luthor",
        alias: "Alexander Luthor",
        powers: ["Genius-level intellect", "Wealth", "Power suit"],
        team: "Injustice League",
        publisher: "DC"
    },
    {
        id: 4,
        name: "Loki",
        alias: "Loki Laufeyson",
        powers: ["Shape-shifting", "Illusions", "Sorcery"],
        team: "Asgardian rogues",
        publisher: "Marvel"
    },
    {
        id: 5,
        name: "Two-Face",
        alias: "Harvey Dent",
        powers: ["Duality obsession", "Coin flipping", "Expert marksman"],
        team: "None",
        publisher: "DC"
    },
    {
        id: 6,
        name: "Green Goblin",
        alias: "Norman Osborn",
        powers: ["Superhuman strength", "Glider flight", "Goblin gadgets"],
        team: "Sinister Six",
        publisher: "Marvel"
    },
    {
        id: 7,
        name: "Darkseid",
        alias: "Uxas",
        powers: ["Omega Beams", "Superhuman strength", "Immortality"],
        team: "New Gods",
        publisher: "DC"
    },
    {
        id: 8,
        name: "Thanos",
        alias: "Thanos",
        powers: ["Superhuman strength", "Reality manipulation", "Infinity Gauntlet"],
        team: "Black Order",
        publisher: "Marvel"
    },
    {
        id: 9,
        name: "Catwoman",
        alias: "Selina Kyle",
        powers: ["Acrobatics", "Thievery skills", "Whip mastery"],
        team: "None",
        publisher: "DC"
    },
    {
        id: 10,
        name: "Doctor Doom",
        alias: "Victor von Doom",
        powers: ["Genius-level intellect", "Armor suit", "Sorcery"],
        team: "None",
        publisher: "Marvel"
    },
    {
        id: 11,
        name: "Harley Quinn",
        alias: "Harleen Quinzel",
        powers: ["Acrobatics", "Deadly weapons", "Unpredictability"],
        team: "Injustice League",
        publisher: "DC"
    },
    {
        id: 12,
        name: "Sabretooth",
        alias: "Victor Creed",
        powers: ["Superhuman strength", "Enhanced senses", "Regenerative healing"],
        team: "Brotherhood of Mutants",
        publisher: "Marvel"
    },
    {
        id: 13,
        name: "Ra's al Ghul",
        alias: "Unknown",
        powers: ["Longevity", "Martial arts mastery", "Strategic genius"],
        team: "League of Assassins",
        publisher: "DC"
    },
    {
        id: 14,
        name: "Venom",
        alias: "Eddie Brock",
        powers: ["Symbiote bonding", "Superhuman strength", "Shape-shifting"],
        team: "None",
        publisher: "Marvel"
    },
    {
        id: 15,
        name: "Deathstroke",
        alias: "Slade Wilson",
        powers: ["Enhanced strength", "Master tactician", "Regenerative healing"],
        team: "Injustice League",
        publisher: "DC"
    },
    {
        id: 16,
        name: "Mystique",
        alias: "Raven Darkholme",
        powers: ["Shape-shifting", "Agility", "Combat expertise"],
        team: "Brotherhood of Mutants",
        publisher: "Marvel"
    },
    {
        id: 17,
        name: "Penguin",
        alias: "Oswald Cobblepot",
        powers: ["Cunning mind", "Wealth", "Umbrella gadgets"],
        team: "None",
        publisher: "DC"
    },
    {
        id: 18,
        name: "Red Skull",
        alias: "Johann Schmidt",
        powers: ["Strategic genius", "Superhuman durability", "Hatred for Captain America"],
        team: "Hydra",
        publisher: "Marvel"
    },
    {
        id: 19,
        name: "Enchantress",
        alias: "June Moone",
        powers: ["Magic spells", "Sorcery", "Reality manipulation"],
        team: "Suicide Squad",
        publisher: "DC"
    },
    {
        id: 20,
        name: "Kingpin",
        alias: "Wilson Fisk",
        powers: ["Superhuman strength", "Master tactician", "Criminal empire"],
        team: "None",
        publisher: "Marvel"
    }
];

let pets = [
    {
        id: 1,
        breed: "Labrador Retriever",
        origin: "United Kingdom",
        size: "Large",
        temperament: ["Outgoing", "Even-tempered", "Gentle"],
        lifespan: "10-12 years"
    },
    {
        id: 2,
        breed: "German Shepherd",
        origin: "Germany",
        size: "Large",
        temperament: ["Loyal", "Intelligent", "Confident"],
        lifespan: "9-13 years"
    },
    {
        id: 3,
        breed: "Golden Retriever",
        origin: "United Kingdom",
        size: "Large",
        temperament: ["Intelligent", "Friendly", "Devoted"],
        lifespan: "10-12 years"
    },
    {
        id: 4,
        breed: "French Bulldog",
        origin: "France",
        size: "Small",
        temperament: ["Adaptable", "Playful", "Affectionate"],
        lifespan: "10-12 years"
    },
    {
        id: 5,
        breed: "Bulldog",
        origin: "United Kingdom",
        size: "Medium",
        temperament: ["Docile", "Willful", "Friendly"],
        lifespan: "8-10 years"
    },
    {
        id: 6,
        breed: "Poodle",
        origin: "Germany / France",
        size: "Various (Standard, Miniature, Toy)",
        temperament: ["Intelligent", "Active", "Alert"],
        lifespan: "10-18 years"
    },
    {
        id: 7,
        breed: "Beagle",
        origin: "United Kingdom",
        size: "Small",
        temperament: ["Friendly", "Curious", "Merry"],
        lifespan: "10-15 years"
    },
    {
        id: 8,
        breed: "Rottweiler",
        origin: "Germany",
        size: "Large",
        temperament: ["Good-natured", "Loyal", "Courageous"],
        lifespan: "8-10 years"
    },
    {
        id: 9,
        breed: "Yorkshire Terrier",
        origin: "United Kingdom",
        size: "Small",
        temperament: ["Affectionate", "Sprightly", "Tomboyish"],
        lifespan: "12-15 years"
    },
    {
        id: 10,
        breed: "Dachshund",
        origin: "Germany",
        size: "Small",
        temperament: ["Clever", "Stubborn", "Devoted"],
        lifespan: "12-16 years"
    },
]

const starWarsCharacters = [
    {
        id: 1,
        name: "Luke Skywalker",
        affiliation: "Hero",
        species: "Human",
        weapon: "Lightsaber",
        side: "Light"
    },
    {
        id: 2,
        name: "Darth Vader",
        affiliation: "Villain",
        species: "Human",
        weapon: "Lightsaber",
        side: "Dark"
    },
    {
        id: 3,
        name: "Princess Leia Organa",
        affiliation: "Hero",
        species: "Human",
        weapon: "Blaster",
        side: "Light"
    },
    {
        id: 4,
        name: "Emperor Palpatine",
        affiliation: "Villain",
        species: "Human",
        weapon: "Lightsaber",
        side: "Dark"
    },
    {
        id: 5,
        name: "Han Solo",
        affiliation: "Hero",
        species: "Human",
        weapon: "Blaster",
        side: "Light"
    },
    {
        id: 6,
        name: "Boba Fett",
        affiliation: "Villain",
        species: "Human",
        weapon: "Blaster",
        side: "Neutral"
    },
    {
        id: 7,
        name: "Obi-Wan Kenobi",
        affiliation: "Hero",
        species: "Human",
        weapon: "Lightsaber",
        side: "Light"
    },
    {
        id: 8,
        name: "Count Dooku",
        affiliation: "Villain",
        species: "Human",
        weapon: "Lightsaber",
        side: "Dark"
    },
    {
        id: 9,
        name: "Rey",
        affiliation: "Hero",
        species: "Human",
        weapon: "Lightsaber",
        side: "Light"
    },
    {
        id: 10,
        name: "Kylo Ren",
        affiliation: "Villain",
        species: "Human",
        weapon: "Lightsaber",
        side: "Dark"
    },
    {
        id: 11,
        name: "Yoda",
        affiliation: "Hero",
        species: "Yoda's species",
        weapon: "Lightsaber",
        side: "Light"
    },
    {
        id: 12,
        name: "Maul",
        affiliation: "Villain",
        species: "Dathomirian",
        weapon: "Double-bladed lightsaber",
        side: "Dark"
    },
    {
        id: 13,
        name: "Chewbacca",
        affiliation: "Hero",
        species: "Wookiee",
        weapon: "Bowcaster",
        side: "Light"
    },
    {
        id: 14,
        name: "General Grievous",
        affiliation: "Villain",
        species: "Kaleesh",
        weapon: "Multiple lightsabers",
        side: "Dark"
    },
    {
        id: 15,
        name: "Anakin Skywalker",
        affiliation: "Hero",
        species: "Human",
        weapon: "Lightsaber",
        side: "Light"
    },
    {
        id: 16,
        name: "Jabba the Hutt",
        affiliation: "Villain",
        species: "Hutt",
        weapon: "None",
        side: "Neutral"
    },
    {
        id: 17,
        name: "Lando Calrissian",
        affiliation: "Hero",
        species: "Human",
        weapon: "Blaster",
        side: "Light"
    },
    {
        id: 18,
        name: "Admiral Thrawn",
        affiliation: "Villain",
        species: "Chiss",
        weapon: "Strategist",
        side: "Dark"
    },
    {
        id: 19,
        name: "Padmé Amidala",
        affiliation: "Hero",
        species: "Human",
        weapon: "Blaster",
        side: "Light"
    },
    {
        id: 20,
        name: "Asajj Ventress",
        affiliation: "Villain",
        species: "Dathomirian",
        weapon: "Dual lightsabers",
        side: "Dark"
    },
]

 


