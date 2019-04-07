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
function playSequence(num, cb) {
  function randomColor() {
    var col = ["red", "green", "blue", "gold"];
    return col[Math.floor(Math.random() * 4)];
  }

  function randColorArr(size, fn) {
    return new Array(size).fill().map(function () {
      return fn();
    });
  }

  var sequence = randColorArr(num, randomColor);

  function spit(arr) {
    var body = document.querySelector("body");
    body.style.backgroundColor = "rgba(120,120,120)";
    var scorePanel = document.querySelector(".score-panel");
    var start = null;
    var progress;
    var i = 0;
    var node;
    requestAnimationFrame(function change(timestamp) {
      node = document.querySelector(".".concat(arr[i]));

      if (!start) {
        start = timestamp;
      }

      progress = timestamp - start;

      if (progress > 400) {
        scorePanel.style.backgroundColor = arr[i];
        node.style.cssText = "background-color: white;border: 10px solid ".concat(arr[i]);
        node.style.boxShadow = "0 5px #666";
        node.style.transform = "translateY(4px)";
      }

      if (progress > 800) {
        node.style.backgroundColor = arr[i];
        scorePanel.style.backgroundColor = "white";
        node.style.cssText = "border: 10px solid black";
        i += 1;
        progress = 0;
        start = timestamp;
      }

      if (i < arr.length) {
        requestAnimationFrame(change);
      } else {
        cb(sequence);
        setTimeout(function () {
          body.style.backgroundColor = "whitesmoke";
        }, 300);
      }
    });
  }

  spit(sequence);
}

/* harmony default export */ var sequence = (playSequence);
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



var handleState = function () {
  var game = {
    score: 0,
    lives: 3,
    sequence: [],
    seqLength: 3,
    userInput: []
  };
  return function () {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    game = Object.assign(game, obj);
    return game;
  };
}();

function scoreDisplay(num) {
  var scoreEl = document.querySelector(".score");
  scoreEl.innerText = String(num).padStart(3, "0");
}

function livesDisplay(num) {
  var livesEl = document.querySelector(".lives");
  livesEl.innerText = String(num);
}

function oneUp() {
  var _handleState = handleState(),
      score = _handleState.score,
      seqLength = _handleState.seqLength;

  handleState({
    score: score + seqLength,
    seqLength: seqLength + 1,
    sequence: [],
    userInput: []
  });
  scoreDisplay(score + seqLength);
  setTimeout(function () {
    sequence(seqLength + 1, function (arr) {
      return handleState({
        sequence: arr
      });
    });
  }, 500);
}

function loseALife() {
  var _handleState2 = handleState(),
      lives = _handleState2.lives,
      score = _handleState2.score;

  handleState({
    seqLength: 3,
    lives: lives - 1,
    sequence: [],
    userInput: []
  });

  if (lives - 1 <= 0) {
    endgame(score);
    handleState({
      score: 0,
      lives: 3
    });
    scoreDisplay(0);
    livesDisplay(3);
  } else {
    livesDisplay(lives - 1);
  }
}

function startGame() {
  var _handleState3 = handleState(),
      seqLength = _handleState3.seqLength;

  document.querySelector(".start").style.visibility = "hidden";
  setTimeout(function () {
    sequence(seqLength, function (arr) {
      return handleState({
        sequence: arr
      });
    });
    document.querySelector(".start").addEventListener("click", startGame, {
      once: true
    });
  }, 500);
}

document.querySelector(".start").addEventListener("click", startGame, {
  once: true
});
/* harmony default export */ var src = (Object.freeze({
  handleState: handleState,
  oneUp: oneUp,
  loseALife: loseALife
}));
// CONCATENATED MODULE: ./src/button.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



var button_handleState = src.handleState,
    button_loseALife = src.loseALife,
    button_oneUp = src.oneUp;
var scorePanel = document.querySelector(".score-panel");
var buttonsDiv = document.getElementById("buttons");
var body = document.querySelector("body");

function renderBackground(node, color, time) {
  var orgColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "rgb(255,255,255)";
  node.style.backgroundColor = color;
  var start = null;
  requestAnimationFrame(function change(timestamp) {
    if (!start) {
      start = timestamp;
    }

    if (timestamp - start >= time) {
      node.style.backgroundColor = orgColor;
    } else {
      requestAnimationFrame(change);
    }
  });
}

function wrongOne() {
  var startButton = document.querySelector(".start");
  renderBackground(body, "red", 150);
  startButton.style.visibility = "visible";
}

function rightOne() {
  renderBackground(scorePanel, "rgb(153, 255, 102)", 150);
}

function celebrate() {
  renderBackground(body, "rgb(153, 255, 102)", 150);
}

function handleButtonClick(e) {
  if (e.target && e.target.classList.contains("button")) {
    if (body.style.backgroundColor === "whitesmoke") {
      var orgColor = e.target.classList[1];
      renderBackground(e.target, "rgb(255,255,255)", 150, orgColor);
      button_handleState({
        userInput: _toConsumableArray(button_handleState().userInput).concat([orgColor])
      }); // Check

      var _handleState = button_handleState(),
          userInput = _handleState.userInput,
          sequence = _handleState.sequence;

      var i = userInput.length - 1;

      if (userInput[i] === sequence[i]) {
        rightOne();

        if (userInput.length === sequence.length) {
          celebrate();
          button_oneUp();
        }
      } else {
        wrongOne();
        button_loseALife();
      }
    }
  }
}

buttonsDiv.addEventListener("click", function (e) {
  return handleButtonClick(e);
});

/***/ })
/******/ ]);