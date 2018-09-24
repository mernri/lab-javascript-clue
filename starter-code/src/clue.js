// Characters Collection
var charactersArray = {
    'MrGreen': {
        first_name:   "Jacob",
        last_name:    "Green",
        color:        "green",
        description:  "He has a lot of connections",
        age:          45,
        image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        occupation:   "Entrepreneur"
        }
    , 'drOrchid': {
        frst_name:   'Doctor',
        lst_name:    'Orchid',
        color:        'white',
        description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
        age:          26,
        image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
        ocupation:   'Scientist'
    }
    , 'ProfPlum': {
        first_name:  "Victor",
        last_name:   "Plum",
        color:       "purple",
        description: "Billionare video game designer",
        age:         22,
        image:       "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
        occupation:  "Designer"
    }
    , 'missScarlet': {
        first_name:  "Kasandra",
        last_name:   "Scarlet",
        color:       "red",
        description: "She is an A-list movie star with a dark past",
        age:         31,
        image:       "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
        occupation:  "Actor"
    }
};

// Rooms' Collection
var weaponsArray = [
   {name:'rope', weight: 10},
   {name:'knife', weight: 8},
   {name:'candlestick', weight: 2},
   {name:'dumbbell', weight: 30},
   {name:'poiso', weight: 2},
   {name:'axe', weight: 15},
   {name:'bat', weight: 13},
   {name:'trophy', weight: 25},
   {name:'pistol', weight: 20}
];

// Weapons Collection
var roomsArray = [
    {name:'Dining Room'},
    {name:'Conservatory'},
    {name:'Kitchen'},
    {name:'Study'},
    {name:'Library'},
    {name:'Billiard Room'},
    {name:'Lounge'},
    {name:'Ballroom'},
    {name:'Hall'},
    {name:'Spa'},
    {name:'Living Room'},
    {name:'Observatory'},
    {name:'Theater'},
    {name:'Guest House'},
    {name:'Patio'}
];

/* Creating a method randomSelector to select randomly one element from a card stack.
This method will receive an array
            will return randomly one of the elements of the array
*/

function randomSelector(myArray) {
    var max = Math.floor((Math.random()*myArray.length));
    var randomElement = myArray[max];
    return randomElement;
} 

/*
create a pickMistery method that will call randomSelector for each card stack, 
and return an array with the 3 picked cards, a character, a weapon and a room. 
Our mystery should be stored on a misteryEnvelope variable.
*/

function pickMistery(charactersArray, weaponsArray, roomsArray) {
    var misteryEnvelope = new Array(3);
    misteryEnvelope[0] = randomSelector(charactersArray);
    misteryEnvelope[1] = randomSelector(weaponsArray);
    misteryEnvelope[2] = randomSelector(roomsArray);
    return misteryEnvelope;
  };

/*
Finally, we need to reveal the mystery. Create a revealMistery method, that will receive our 
misteryEnvelope array as an argument and return the revealed mystery like this:
*/

function revealMistery(misteryEnvelope) {
    return "Mr " + misteryEnvelope[0] + " killed Mr Body using the " + misteryEnvelope[1] + " in the " + misteryEnvelope[2] + "."
};
