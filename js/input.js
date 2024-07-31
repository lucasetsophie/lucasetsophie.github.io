(function () {
  var pressedKeys = {};

  function setKey(event, status) {
    var code = event.keyCode;
    var key;

    switch (code) {
      case 32:
        key = "SPACE";
        break;
      case 37:
        key = "LEFT";
        break;
      case 38:
        key = "UP";
        break;
      case 39:
        key = "RIGHT";
        break;
      case 40:
        key = "DOWN";
        break;
      case 88:
        key = "JUMP";
        break;
      case 90:
        key = "RUN";
        break;
      default:
        key = String.fromCharCode(code);
    }

    pressedKeys[key] = status;
  }

  document.addEventListener("keydown", function (e) {
    setKey(e, true);
  });

  document.addEventListener("keyup", function (e) {
    setKey(e, false);
  });

  document
    .getElementById("forward")
    .addEventListener("touchstart", function (e) {
      setKey({ keyCode: 39 }, true);
    });
  document.getElementById("forward").addEventListener("touchend", function (e) {
    setKey({ keyCode: 39 }, false);
  });

  document
    .getElementById("backward")
    .addEventListener("touchstart", function (e) {
      setKey({ keyCode: 37 }, true);
    });
  document
    .getElementById("backward")
    .addEventListener("touchend", function (e) {
      setKey({ keyCode: 37 }, false);
    });

  document.getElementById("up").addEventListener("touchstart", function (e) {
    setKey({ keyCode: 88 }, true);
  });
  document.getElementById("up").addEventListener("touchend", function (e) {
    setKey({ keyCode: 88 }, false);
  });

  document.getElementById("down").addEventListener("touchstart", function (e) {
    setKey({ keyCode: 40 }, true);
  });
  document.getElementById("down").addEventListener("touchend", function (e) {
    setKey({ keyCode: 40 }, false);
  });

  document.getElementById("fire").addEventListener("touchstart", function (e) {
    setKey({ keyCode: 90 }, true);
  });
  document.getElementById("fire").addEventListener("touchend", function (e) {
    setKey({ keyCode: 90 }, false);
  });

  window.addEventListener("blur", function () {
    pressedKeys = {};
  });

  window.input = {
    isDown: function (key) {
      return pressedKeys[key.toUpperCase()];
    },
    reset: function () {
      pressedKeys["RUN"] = false;
      pressedKeys["LEFT"] = false;
      pressedKeys["RIGHT"] = false;
      pressedKeys["DOWN"] = false;
      pressedKeys["JUMP"] = false;
    },
  };
})();
