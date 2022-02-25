let scoreNumber = 0;
let scoreCount = 1;
let scoreEl = document.getElementById("score");
let playCountEl = document.getElementById("play-count");
let activeGame = true;
let pushedEl = document.querySelectorAll(".flagNum");
let hideHomeEl = document.getElementById("play-button");
let hidePlayEl = document.getElementById("back-btn");
let reloadAppEl = document.getElementById("reload");
let homeToOptionsEl = document.getElementById("play-options");
let hideOptionsEl = document.getElementById("back-btn-options");
let flagsDisplayEl = document.querySelector(".flags-display");
let answerContainerEl = document.querySelector(".answerContainer");
let selection;
let mixedSelection;
let globeChoices;
let option = 10;
let playSound = true;
let rightSound = document.querySelector(".right");
let wrongSound = document.querySelector(".wrong");

////GAME START ACTIONS

hideHomeEl.addEventListener("click", onStart);

function onStart() {
  document.querySelector(".home").classList.add("hideHome");
  document.querySelector(".play").classList.remove("hidePlay");
  resetScores();
  numberOfFlagsChosen();
  makeWrongChoicesList();
  makeRandomChoices();
  makeMultipleChoice();
  makeNextButton();
  displayFlagFunction();
  activeGame = true;
  console.log(playing, "from start");
  console.log(wrongChoices, "from start");
  console.log(randomChoices, "from start");
}

////HIDDING START SCREEN

hidePlayEl.addEventListener("click", hidingPlay);

function hidingPlay() {
  document.querySelector(".play").classList.add("hidePlay");
  document.querySelector(".home").classList.remove("hideHome");
  answerContainerEl.innerHTML = "";
  resetScores();
}

////FROM HOME TO OPTIONS

homeToOptionsEl.addEventListener("click", toOptions);

function toOptions() {
  document.querySelector(".home").classList.add("hideHome");
  document.querySelector(".options").classList.remove("hideOptions");
}

////FROM OPTIONS TO HOME

hideOptionsEl.addEventListener("click", hidingOptions);

function hidingOptions() {
  document.querySelector(".options").classList.add("hideOptions");
  document.querySelector(".home").classList.remove("hideHome");
}

function change(value) {
  option = Number(value);
  console.log(option);
}

//////COUNTRIES DATA
const countryNames = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Buthan",
  "Bolivia",
  "Bosnia",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central Africa",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Rep",
  "DR Congo",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritus",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua N. Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Rep of Congo",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Palestine",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "UAE",
  "Uganda",
  "Ukraine",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const world = [
  2, 4, 18, 22, 26, 27, 29, 31, 32, 33, 37, 44, 47, 50, 52, 53, 55, 56, 60, 61,
  64, 68, 69, 82, 87, 95, 96, 97, 101, 102, 105, 108, 109, 116, 117, 119, 125,
  140, 143, 149, 151, 153, 154, 159, 160, 162, 166, 173, 175, 178, 183, 194,
  195, 0, 7, 10, 12, 13, 19, 24, 28, 35, 48, 62, 75, 76, 77, 78, 80, 84, 85, 86,
  90, 91, 92, 94, 103, 104, 114, 118, 121, 126, 129, 130, 136, 139, 142, 150,
  155, 161, 164, 165, 170, 171, 172, 174, 179, 180, 182, 188, 192, 193, 1, 3, 9,
  15, 16, 21, 25, 39, 41, 42, 43, 54, 58, 59, 63, 65, 73, 74, 79, 81, 89, 93,
  98, 99, 100, 106, 112, 113, 115, 122, 127, 128, 137, 138, 141, 148, 152, 156,
  157, 163, 168, 169, 184, 185, 190, 5, 11, 14, 17, 30, 40, 45, 46, 51, 66, 67,
  71, 72, 83, 110, 124, 132, 144, 145, 146, 186, 8, 57, 88, 107, 111, 120, 123,
  131, 133, 147, 158, 176, 181, 189, 6, 20, 23, 34, 36, 38, 49, 70, 134, 135,
  167, 177, 187, 191,
];

const africa = [
  2, 4, 18, 22, 26, 27, 29, 31, 32, 33, 37, 44, 47, 50, 52, 53, 55, 56, 60, 61,
  64, 68, 69, 82, 87, 95, 96, 97, 101, 102, 105, 108, 109, 116, 117, 119, 125,
  140, 143, 149, 151, 153, 154, 159, 160, 162, 166, 173, 175, 178, 183, 194,
  195,
];

const asia = [
  0, 7, 10, 12, 13, 19, 24, 28, 35, 48, 62, 75, 76, 77, 78, 80, 84, 85, 86, 90,
  91, 92, 94, 103, 104, 114, 118, 121, 126, 129, 130, 136, 139, 142, 150, 155,
  161, 164, 165, 170, 171, 172, 174, 179, 180, 182, 188, 192, 193,
];

const europe = [
  1, 3, 9, 15, 16, 21, 25, 39, 41, 42, 43, 54, 58, 59, 63, 65, 73, 74, 79, 81,
  89, 93, 98, 99, 100, 106, 112, 113, 115, 122, 127, 128, 137, 138, 141, 148,
  152, 156, 157, 163, 168, 169, 184, 185, 190,
];

const northAmerica = [
  5, 11, 14, 17, 30, 40, 45, 46, 51, 66, 67, 71, 72, 83, 110, 124, 132, 144,
  145, 146, 186,
];

const oceania = [
  8, 57, 88, 107, 111, 120, 123, 131, 133, 147, 158, 176, 181, 189,
];

const southAmerica = [
  6, 20, 23, 34, 36, 38, 49, 70, 134, 135, 167, 177, 187, 191,
];

//////SELECTS NUMBER OF FLAGS FOR GAME AND PUTS IT INTO ARRAY - 10 BY DEFAULT

let playing = [];

function numberOfFlagsChosen() {
  playing = [];
  do {
    selection = world[Math.floor(Math.random() * world.length)];
    if (playing.includes(selection)) {
      continue;
    } else {
      playing.push(selection);
    }
  } while (playing.length < option);
}

//////GENERATES 3 RANDOM WRONG CHOICES

let wrongChoices = [];

function makeWrongChoicesList() {
  wrongChoices = [];
  do {
    globeChoices = world[Math.floor(Math.random() * world.length)];
    if (wrongChoices.includes(globeChoices)) {
      continue;
    } else {
      wrongChoices.push(globeChoices);
    }
  } while (wrongChoices.length < 3);
}

//////BUTTON CHOICE MIXER

function makeRandomChoices() {
  randomChoices = [];
  mixer = [1, 2, 3, 4];

  do {
    mixedSelection = mixer[Math.floor(Math.random() * 4)];
    if (randomChoices.includes(mixedSelection)) {
      continue;
    } else {
      randomChoices.push(mixedSelection);
    }
  } while (randomChoices.length < 4);
}

//////CHOICES BUTTON MECHANISM

let buttonEl;

function createAnswerButtons(incomingOption) {
  let newList = document.createElement("li");
  buttonEl = document.createElement("button");
  buttonEl.innerHTML = incomingOption;
  buttonEl.classList.add("playScreenButtons");
  newList.appendChild(buttonEl);

  answerContainerEl.appendChild(newList);
}

//////MIXES THE OPTIONS IN THE OPTIONS MENU

function makeMultipleChoice() {
  for (let i = 0; i < randomChoices.length; i++) {
    if (randomChoices[i] === 1) {
      createAnswerButtons(countryNames[playing[0]]);
    } else if (randomChoices[i] === 2) {
      createAnswerButtons(countryNames[wrongChoices[0]]);
    } else if (randomChoices[i] === 3) {
      createAnswerButtons(countryNames[wrongChoices[1]]);
    } else if (randomChoices[i] === 4) {
      createAnswerButtons(countryNames[wrongChoices[2]]);
    }
  }
}

//////CREATES NEXT BUTTON

let buttonNextEl;
function makeNextButton() {
  let nextButtonLastItemList = document.createElement("li");
  buttonNextEl = document.createElement("button");
  buttonNextEl.innerHTML = "NEXT";
  buttonNextEl.classList.add("buttonNextStyle");
  buttonNextEl.classList.add("hideNextButton");
  buttonNextEl.style.backgroundColor = "#ffe02e";
  buttonNextEl.setAttribute("onclick", "handleNext()");
  nextButtonLastItemList.appendChild(buttonNextEl);
  answerContainerEl.appendChild(nextButtonLastItemList);

  return buttonNextEl;
}

//////PLAYS SOUNDS

function playRightSound() {
  if (playSound) rightSound.play();
}

function playWrongSound() {
  if (playSound) wrongSound.play();
}

let gameSoundsOnOff = document.querySelectorAll(".gameSounds");
let gameSoundButtonOnOff = document.getElementById("sound-button");

gameSoundButtonOnOff.addEventListener("click", toggleSound);

function toggleSound() {
  if (gameSoundButtonOnOff.innerText === "ON") {
    gameSoundButtonOnOff.innerText = "OFF";
    playSound = false;
  } else {
    gameSoundButtonOnOff.innerText = "ON";
    playSound = true;
  }
}

//////DISPLAYS FLAG

function displayFlagFunction() {
  flagsDisplayEl.src = `allFlags/${playing[0]}.png`;
}

document.addEventListener("click", optionsWinLoseButtons);

//////WHEN CHOICE BUTTONS ARE CLICKED

function optionsWinLoseButtons(e) {
  if (activeGame) {
    if (e.target.innerText === countryNames[playing[0]]) {
      e.target.classList.add("buttonGreen");
      scoreNumber++;
      scoreEl.innerText = `Score: ${scoreNumber}`;
      removinghideNextButton();
      gameOverfunction();
      console.log("YES");
      playRightSound();
      activeGame = false;
    } else {
      if (e.target.className == "playScreenButtons") {
        e.target.classList.add("buttonRed");
        removinghideNextButton();
        gameOverfunction();
        console.log("NO");
        playWrongSound();
        activeGame = false;
      }
    }
  }
}

//////WHEN NEXT BUTTON CLICKED

let handleNextGoes = true;
function handleNext() {
  if (handleNextGoes) {
    console.log("inside handleNext");
    scoreCount++;
    playCountEl.innerText = `${scoreCount}/${option}`;
    buttonNextEl.classList.add("hideNextButton");
    playing.shift();
    answerContainerEl.innerHTML = "";
    makeWrongChoicesList();
    makeRandomChoices();
    makeMultipleChoice();
    displayFlagFunction();
    activeGame = true;
    makeNextButton();
    console.log(playing, "Next-btn");
    console.log(wrongChoices, "Next-btn");
    console.log(randomChoices, "Next-btn");
  }
}

function removinghideNextButton() {
  if (scoreCount !== option) {
    buttonNextEl.classList.remove("hideNextButton");
  }
}

//////GAME OVER FUNCTION

function gameOverfunction() {
  if (scoreCount === option) {
    setTimeout(function () {
      document.querySelector(".play").classList.add("hidePlay"),
        document.querySelector(".endGame").classList.remove("hideEndGame");
      document.querySelector(
        ".howManyRight"
      ).innerText = `${scoreNumber} out of ${option}`;
    }, 2500);
  }
}

////PLAY AGAIN RELOAD

reloadAppEl.addEventListener("click", function () {
  location.reload();
});

////RESET SCORE FUNCTION

function resetScores() {
  scoreNumber = 0;
  scoreCount = 1;
  scoreEl.innerText = `Score: ${scoreNumber}`;
  playCountEl.innerText = `${scoreCount}/${option}`;
}

////HIGHLIGHTING FLAG NUMBER OPTIONS IN OPTIONS

pushedEl.forEach((item) => {
  item.addEventListener("click", clickedButtonFunction);
});

function clickedButtonFunction(event) {
  pushedEl.forEach(function (item) {
    item.classList.remove("pushed");
  });
  event.target.classList.add("pushed");
}
