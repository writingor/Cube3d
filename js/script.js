(function () {
    let rotateX = 0;
    let rotateY = 0;

    function transformCube() {
        document.querySelector(".cube").style.transform =
            "rotateY(" + rotateY + "deg)" + "rotateX(" + rotateX + "deg)";
    }

    // CHANGE VARIABLES

    // on BUTTONS
    document.querySelector("#toLeft").onclick = function () {
        rotateY -= 36;
        transformCube();
    }
    document.querySelector("#toDown").onclick = function () {
        rotateX -= 36;
        transformCube();
    }
    document.querySelector("#toRight").onclick = function () {
        rotateY += 36;
        transformCube();
    }
    document.querySelector("#toUp").onclick = function () {
        rotateX += 36;
        transformCube();
    }
    document.querySelector("#toClear").onclick = function () {
        rotateX = 0;
        rotateY = 0;
        transformCube();
    }


    // on KYE DOWN
    document.onkeydown = function (e) {
        if (e.keyCode === 37) {
            rotateY -= 36;
        } else if (e.keyCode === 38) {
            rotateX += 36;
        } else if (e.keyCode === 39) {
            rotateY += 36;
        } else if (e.keyCode === 40) {
            rotateX -= 36;
        }
        transformCube();
    }

    // TOUCH


})();