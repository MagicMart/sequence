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
var sequenceLength;
var sequenceArray;
var timerId;

function randomColor() {
  var colors = ["blue", "green", "gold", "red"];
  return colors[Math.floor(Math.random() * 4)];
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

function playSequence(num) {
  sequenceLength = num;
  sequenceArray = [];
  timerId = setInterval(sequence, 800);
  return sequenceArray;
}

function sequence() {
  if (sequenceArray.length === 0) {
    body.style.backgroundColor = "rgba(120,120,120)";
  }

  sequenceLength -= 1;
  clickSimulator(randomColor());

  if (sequenceLength === 0) {
    clearInterval(timerId);
    setTimeout(function () {
      body.style.backgroundColor = "whitesmoke";
    }, 300);
    return;
  }
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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }




var handleState = function () {
  var game = {
    score: 0,
    lives: 3,
    sequence: [],
    seqLength: 3,
    userInput: []
  };
  return function (obj) {
    if (obj !== undefined) {
      game = Object.assign(game, obj);
    }

    return game;
  };
}();

var src_score = document.querySelector(".score");
var src_lives = document.querySelector(".lives");
var startButton = document.querySelector(".start");

function updateScore() {
  src_score.innerText = String(handleState().score).padStart(3, "0");
}

function updateLives() {
  src_lives.innerText = String(handleState().lives);
}

function getSequence() {
  var _handleState = handleState(),
      sequence = _handleState.sequence;

  return sequence;
}

function getUserInput() {
  var _handleState2 = handleState(),
      userInput = _handleState2.userInput;

  return userInput;
}
/**
 * When a button is clicked,
 * its color is added to the array,
 * state.userInput
 * @param {string} color - button color
 */


function userInput(color) {
  var _handleState3 = handleState(),
      userInput = _handleState3.userInput;

  handleState({
    userInput: _toConsumableArray(userInput).concat([color])
  });
}

function oneUp() {
  var _handleState4 = handleState(),
      score = _handleState4.score,
      seqLength = _handleState4.seqLength;

  handleState({
    score: score + seqLength,
    seqLength: seqLength + 1,
    sequence: [],
    userInput: []
  });
  updateScore();
  setTimeout(function () {
    handleState({
      sequence: src_sequence(seqLength + 1)
    });
  }, 500);
}

function loseALife() {
  var _handleState5 = handleState(),
      lives = _handleState5.lives,
      score = _handleState5.score;

  handleState({
    seqLength: 3,
    lives: lives - 1,
    sequence: [],
    userInput: []
  });
  updateLives();

  if (lives - 1 <= 0) {
    endgame(score);
    handleState({
      score: 0,
      lives: 3
    });
    updateScore();
    updateLives();
  }
}

function startGame() {
  var _handleState6 = handleState(),
      seqLength = _handleState6.seqLength;

  startButton.style.visibility = "hidden";
  setTimeout(function () {
    handleState({
      sequence: src_sequence(seqLength)
    });
  }, 500);
}

startButton.addEventListener("click", startGame);
/* harmony default export */ var src = (Object.freeze({
  getSequence: getSequence,
  getUserInput: getUserInput,
  userInput: userInput,
  oneUp: oneUp,
  loseALife: loseALife
}));
// CONCATENATED MODULE: ./src/button.js


var button_getUserInput = src.getUserInput,
    button_getSequence = src.getSequence,
    button_userInput = src.userInput,
    button_loseALife = src.loseALife,
    button_oneUp = src.oneUp;

var check = function check(i) {
  var input = button_getUserInput();
  var sequence = button_getSequence();

  if (input[i] === sequence[i]) {
    rightOne();

    if (input.length === sequence.length) {
      celebrate();
      button_oneUp();
    } else {
      return;
    }
  } else {
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
  renderBackground(button_body, "red", 150);
  button_startButton.style.visibility = "visible";
}

function rightOne() {
  renderBackground(button_scorePanel, "rgb(153, 255, 102)", 150);
}

function celebrate() {
  renderBackground(button_body, "rgb(153, 255, 102)", 150);
}

function changeButtonColour(e) {
  if (e.target && e.target.classList.contains("button")) {
    var _body = document.querySelector("body");

    if (_body.style.backgroundColor === "whitesmoke") {
      var orgColor = e.target.classList[1];
      renderBackground(e.target, "rgb(255,255,255)", 150, orgColor);
      button_userInput(orgColor);
      check(button_getUserInput().length - 1);
    }
  }
}

buttonsDiv.addEventListener("click", function (e) {
  return changeButtonColour(e);
});

/***/ })
/******/ ]);