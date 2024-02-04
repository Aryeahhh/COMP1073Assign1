// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.querySelector('#noun1');
const verbButton = document.querySelector('#verb');
const adjectiveButton = document.querySelector('#adjective');
const noun2Button = document.querySelector('#noun2');
const settingButton = document.querySelector('#setting');
const GetStudentId = document.querySelector('#GetStudentID');
const resetButton = document.querySelector('#reset');

// Constants for p tag to display query selectors
const noun1P = document.querySelector('#choosenNoun1');
const verbP = document.querySelector('#choosenVerb');
const adjectiveP = document.querySelector('#choosenAdjective');
const noun2P = document.querySelector('#choosenNoun2');
const settingP = document.querySelector('#choosenSetting');
const studentIdP = document.querySelector('#studentID');


// Constants for final buttons and p tags
const playbackButton = document.querySelector('#playback');
const randomButton = document.querySelector('#random');
const storyP = document.querySelector('#story');
// Variables for pre-defined arrays
let noun1array = ["The dog", "The cat", "The rabbit", "The snake", "The bird"];
let noun1sounds = ["sounds/dog.mp3", "sounds/cat.mp3", "sounds/rabbit.mp3", "sounds/snake.mp3", "sounds/bird.mp3"];
let verbarray = ["ran", "jumped", "slept", "ate", "sang"];
let verbsounds = ["sounds/ran.mp3", "sounds/jumped.mp3", "sounds/slept.mp3", "sounds/ate.mp3", "sounds/sang.mp3"];
let adjectivearray = ["loudly at", "quietly at", "quickly at", "slowly at", "happily at"];
let adjectivesounds = ["sounds/loudlyat.mp3", "sounds/quietlyat.mp3", "sounds/quicklyat.mp3", "sounds/slowlyat.mp3", "sounds/happilyat.mp3"];
let noun2array = ["home", "school", "park", "store", "work"];
let noun2sounds = ["sounds/home.mp3", "sounds/school.mp3", "sounds/park.mp3", "sounds/store.mp3", "sounds/work.mp3"];
let settingarray = ["in the morning", "in the afternoon", "in the evening", "at midnight", "at noon"];
let settingsounds = ["sounds/morning.mp3", "sounds/afternoon.mp3", "sounds/evening.mp3", "sounds/midnight.mp3", "sounds/noon.mp3"];
let studentId = "Arya Patel - 1217030"
// Variables for count to grab array elements
let noun1count = 0;
let verbcount = 0;
let adjectivecount = 0;
let noun2count = 0;
let settingcount = 0;


/* Functions
-------------------------------------------------- */
function id_on_click() {
    studentIdP.textContent = studentId;
}
function noun1_on_click() {
    // variable to get array element and displaying it
    noun1P.textContent = noun1array[noun1count];
    let audio = new Audio(noun1sounds[noun1count]);
    audio.play();
    // if-else to change count setting
    if (noun1count < noun1array.length - 1) {
        noun1count++;
    } else {
        noun1count = 0;
    }

}

function verb_on_click() {
    verbP.textContent = verbarray[verbcount];
    let audio = new Audio(verbsounds[verbcount]);
    audio.play();
    if (verbcount < verbarray.length - 1) {
        verbcount++;
    } else {
        verbcount = 0;
    }
}

function adjective_on_click() {
    adjectiveP.textContent = adjectivearray[adjectivecount];
    let audio = new Audio(adjectivesounds[adjectivecount]);
    audio.play();
    if (adjectivecount < adjectivearray.length - 1) {
        adjectivecount++;
    } else {
        adjectivecount = 0;
    }
}

function noun2_on_click() {
    noun2P.textContent = noun2array[noun2count];
    let audio = new Audio(noun2sounds[noun2count]);
    audio.play();
    if (noun2count < noun2array.length - 1) {
        noun2count++;
    } else {
        noun2count = 0;
    }

}

function setting_on_click() {
    settingP.textContent = settingarray[settingcount];
    let audio = new Audio(settingsounds[settingcount]);
    audio.play();
    if (settingcount < settingarray.length - 1) {
        settingcount++;
    } else {
        settingcount = 0;
    }
}
function reset_on_click() {
    noun1P.textContent = "";
    verbP.textContent = "";
    adjectiveP.textContent = "";
    noun2P.textContent = "";
    settingP.textContent = "";
    storyP.textContent = "";

    noun1count = 0;
    verbcount = 0;
    adjectivecount = 0;
    noun2count = 0;
    settingcount = 0;

}
// concatenate the user story and display
function playback_on_click() {
    storyP.textContent = noun1P.textContent + " " + verbP.textContent + " " + adjectiveP.textContent + " " + noun2P.textContent + " " + settingP.textContent;

    let audioFiles = [noun1sounds[noun1count - 1], verbsounds[verbcount - 1], adjectivesounds[adjectivecount - 1], noun2sounds[noun2count - 1], settingsounds[settingcount - 1]];
    let index = 0;

    function playNextAudio() {
        if (index < audioFiles.length) {
            let audio = new Audio(audioFiles[index]);
            audio.play();
            audio.onended = function () {
                index++;
                playNextAudio();
            };
        }
    }

    playNextAudio();
}


// grabbing random element from arrays, concatenate and display
function random_on_click() {
    let randomNoun1 = noun1array[Math.floor(Math.random() * noun1array.length)];
    let randomVerb = verbarray[Math.floor(Math.random() * verbarray.length)];
    let randomAdjective = adjectivearray[Math.floor(Math.random() * adjectivearray.length)];
    let randomNoun2 = noun2array[Math.floor(Math.random() * noun2array.length)];
    let randomSetting = settingarray[Math.floor(Math.random() * settingarray.length)];
    let audioFiles = [noun1sounds[noun1array.indexOf(randomNoun1)], verbarray.indexOf(randomVerb), adjectivearray.indexOf(randomAdjective), noun2array.indexOf(randomNoun2), settingarray.indexOf(randomSetting)];
    storyP.textContent = randomNoun1 + " " + randomVerb + " " + randomAdjective + " " + randomNoun2 + " " + randomSetting;
    let index = 0;

    function playNextAudio() {
        if (index < audioFiles.length) {
            let audio = new Audio(audioFiles[index]);
            audio.play();
            audio.onended = function () {
                index++;
                playNextAudio();
            };
        }
    }

    playNextAudio();
}

/* Event Listeners
-------------------------------------------------- */
// Event listeners for main buttons
noun1Button.addEventListener('click', noun1_on_click);
verbButton.addEventListener('click', verb_on_click);
adjectiveButton.addEventListener('click', adjective_on_click);
noun2Button.addEventListener('click', noun2_on_click);
settingButton.addEventListener('click', setting_on_click);
playbackButton.addEventListener('click', playback_on_click);
randomButton.addEventListener('click', random_on_click);
GetStudentId.addEventListener('click', id_on_click);
resetButton.addEventListener('click', reset_on_click);