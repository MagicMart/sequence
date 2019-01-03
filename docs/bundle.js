/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/main.css
var main = __webpack_require__(0);

// CONCATENATED MODULE: ./src/sequence.js
var body = document.querySelector("body");
var scorePanel = document.querySelector(".score-panel");
var colors = ["blue", "green", "gold", "red"];
var start = null;
var count = 0;
var sequenceLength;
var sequenceArray;

function rand() {
  return Math.floor(Math.random() * 4);
}

function clickSimulator(el) {
  sequenceArray.push(el);
  var orginalColor = el;
  var node = document.querySelector(".".concat(el));
  setTimeout(function () {
    node.style.cssText = "background-color: white;border: 10px solid ".concat(orginalColor);
    scorePanel.style.backgroundColor = orginalColor;
  }, 0);
  setTimeout(function () {
    node.style.backgroundColor = orginalColor;
    scorePanel.style.backgroundColor = "white";
    node.style.cssText = "border: 10px solid black";
  }, 300);
}

function playSequence(stateSequenceLength) {
  sequenceLength = stateSequenceLength;
  sequenceArray = [];
  requestAnimationFrame(sequence);
  return sequenceArray;
}

function sequence(timestamp) {
  if (!start) {
    // button.prototype.clickable = false;
    body.style.backgroundColor = "rgba(120,120,120)";
    start = timestamp;
  }

  var progress = timestamp - start;

  if (progress > 800) {
    progress = 0;
    start = timestamp;
    count += 1;
    clickSimulator(colors[rand()]);
  }

  if (count >= sequenceLength) {
    start = null;
    count = 0;
    setTimeout(function () {
      // button.prototype.clickable = true;
      body.style.backgroundColor = "whitesmoke";
    }, 300);
    return;
  }

  requestAnimationFrame(sequence);
}

/* harmony default export */ var src_sequence = (playSequence);
// CONCATENATED MODULE: ./src/endgame.js
var id01 = document.getElementById("id01");
var modalScore = document.getElementById("modal-score");
var modalContent = document.querySelector(".w3-modal-content");
modalContent.addEventListener("click", function modalGone() {
  id01.style.display = "none";
});

var endGame = function endGame(score) {
  id01.style.display = "block";
  modalScore.innerText = score;
};

/* harmony default export */ var endgame = (endGame);
// CONCATENATED MODULE: ./src/index.js


var state = {
  score: 0,
  lives: 3,
  seqLength: 3,
  sequence: [],
  userInput: []
};
var score = document.querySelector(".score");
var lives = document.querySelector(".lives");
var startButton = document.querySelector(".start");

function updateScore() {
  score.innerText = String(state.score).padStart(3, "0");
}

function updateLives() {
  lives.innerText = String(state.lives);
}

function getState(name) {
  return state[name];
}

function oneUp() {
  state.score += state.seqLength;
  updateScore();
  state.seqLength += 1;
  state.sequence = [];
  state.userInput = [];
  setTimeout(function () {
    state.sequence = src_sequence(state.seqLength);
  }, 500);
}

function loseALife() {
  state.seqLength = 3;
  state.lives -= 1;
  updateLives();
  state.sequence = [];
  state.userInput = [];

  if (state.lives <= 0) {
    endgame(state.score);
    state.score = 0;
    state.lives = 3;
    updateScore();
    updateLives();
  }
}

function startGame() {
  startButton.style.visibility = "hidden";
  setTimeout(function () {
    state.sequence = src_sequence(state.seqLength);
  }, 500);
}

startButton.addEventListener("click", startGame);
/* harmony default export */ var src = (Object.freeze({
  getState: getState,
  oneUp: oneUp,
  loseALife: loseALife
}));
// CONCATENATED MODULE: ./src/createButton.js
var createButton_button = function button(color) {
  var node = document.querySelector(".".concat(color));
  var obj = Object.create(button.prototype);
  obj.color = color;
  obj.node = node;
  return obj;
}; //button.prototype.clickable = false;


var buttons = {
  blue: createButton_button("blue"),
  green: createButton_button("green"),
  gold: createButton_button("gold"),
  red: createButton_button("red")
};
/* harmony default export */ var createButton = ({
  button: createButton_button,
  buttons: buttons
});
// CONCATENATED MODULE: ./src/button.js



var button_getState = src.getState,
    button_loseALife = src.loseALife,
    button_oneUp = src.oneUp;
var button_button = createButton.button;

button_button.prototype.check = function (i) {
  if (button_getState("userInput")[i] === button_getState("sequence")[i]) {
    rightOne();

    if (button_getState("userInput").length === button_getState("sequence").length) {
      button_button.prototype.clickable = false;
      celebrate();
      button_oneUp();
    } else {
      return;
    }
  } else {
    button_button.prototype.clickable = false;
    wrongOne();
    button_loseALife();
  }
};

var button_scorePanel = document.querySelector(".score-panel");
var button_startButton = document.querySelector(".start");
var buttonsDiv = document.getElementById("buttons");
var button_body = document.querySelector("body");

function renderBackground(node, color, time) {
  var orgColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "rgb(255,255,255)";
  node.style.backgroundColor = color;
  setTimeout(function () {
    node.style.backgroundColor = orgColor;
  }, time);
}

function wrongOne() {
  renderBackground(button_body, "red", 100);
  button_startButton.style.visibility = "visible";
}

function rightOne() {
  renderBackground(button_scorePanel, "rgb(153, 255, 102)", 100);
}

function celebrate() {
  renderBackground(button_body, "rgb(153, 255, 102)", 100);
}

function changeButtonColour(e) {
  if (e.target && e.target.classList.contains("button")) {
    var _body = document.querySelector("body");

    if (_body.style.backgroundColor === "whitesmoke") {
      var orgColor = e.target.classList[1];
      renderBackground(e.target, "rgb(255,255,255)", 150, orgColor);
      button_getState("userInput").push(orgColor);
      button_button.prototype.check(button_getState("userInput").length - 1);
    }
  }
}

buttonsDiv.addEventListener("click", function (e) {
  return changeButtonColour(e);
});

/***/ })
/******/ ]);