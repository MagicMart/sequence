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

// CONCATENATED MODULE: ./src/button.js


var button_button = function button(color) {
  var node = document.querySelector(".".concat(color));
  var obj = Object.create(button.prototype);
  obj.color = color;
  obj.node = node;
  return obj;
};

button_button.prototype.clickable = false;

button_button.prototype.check = function (i, state) {
  if (state.userInput[i] === state.sequence[i]) {
    rightOne();

    if (state.userInput.length === state.sequence.length) {
      button_button.prototype.clickable = false;
      celebrate();
      oneUp();
    } else {
      return;
    }
  } else {
    button_button.prototype.clickable = false;
    wrongOne();
    loseALife();
  }
};

var buttons = {
  blue: button_button("blue"),
  green: button_button("green"),
  gold: button_button("gold"),
  red: button_button("red")
};
var scorePanel = document.querySelector(".score-panel");
var startButton = document.querySelector(".start");
var buttonsDiv = document.getElementById("buttons");
var body = document.querySelector("body");

function renderBackground(node, color, time) {
  var orgColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "rgb(255,255,255)";
  node.style.backgroundColor = color;
  setTimeout(function () {
    node.style.backgroundColor = orgColor;
  }, time);
}

function wrongOne() {
  renderBackground(body, "red", 100);
  startButton.style.visibility = "visible";
}

function rightOne() {
  renderBackground(scorePanel, "rgb(153, 255, 102)", 100);
}

function celebrate() {
  renderBackground(body, "rgb(153, 255, 102)", 100);
}

function changeButtonColour(e) {
  if (e.target && e.target.classList.contains("button")) {
    if (button_button.prototype.clickable) {
      var orgColor = e.target.classList[1];
      renderBackground(e.target, "rgb(255,255,255)", 150, orgColor);
      src_state.userInput.push(orgColor);
      button_button.prototype.check(src_state.userInput.length - 1, src_state);
    }
  }
}

buttonsDiv.addEventListener("click", function (e) {
  return changeButtonColour(e);
});
/* harmony default export */ var src_button = (button_button);
// CONCATENATED MODULE: ./src/sequence.js
// A random colour is chosen from the colors array.
// It is pushed to the sequence array.

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
  buttons[el].node.style.backgroundColor = "white";
  setTimeout(function () {
    buttons[el].node.style.backgroundColor = orginalColor;
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
    src_button.prototype.clickable = false;
    start = timestamp;
  }

  var progress = timestamp - start;

  if (progress > 600) {
    progress = 0;
    start = timestamp;
    count += 1;
    clickSimulator(colors[rand()]);
  }

  if (count >= sequenceLength) {
    start = null;
    count = 0;
    setTimeout(function () {
      src_button.prototype.clickable = true;
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return src_state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oneUp", function() { return oneUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loseALife", function() { return loseALife; });



var src_state = {
  score: 0,
  lives: 3,
  seqLength: 3,
  sequence: [],
  userInput: []
};
var score = document.querySelector(".score");
var lives = document.querySelector(".lives");
var src_startButton = document.querySelector(".start");

function updateScore() {
  score.innerText = String(src_state.score).padStart(3, "0");
}

function updateLives() {
  lives.innerText = String(src_state.lives);
}

function oneUp() {
  src_state.score += src_state.seqLength;
  updateScore();
  src_state.seqLength += 1;
  src_state.sequence = [];
  src_state.userInput = [];
  setTimeout(function () {
    src_state.sequence = src_sequence(src_state.seqLength);
  }, 500);
}
function loseALife() {
  src_state.seqLength = 3;
  src_state.lives -= 1;
  updateLives();
  src_state.sequence = [];
  src_state.userInput = [];

  if (src_state.lives <= 0) {
    endgame(src_state.score);
    src_state.score = 0;
    src_state.lives = 3;
    updateScore();
    updateLives();
  }
}

function startGame() {
  src_startButton.style.visibility = "hidden";
  setTimeout(function () {
    src_state.sequence = src_sequence(src_state.seqLength);
  }, 500);
}

src_startButton.addEventListener("click", startGame);

/***/ })
/******/ ]);