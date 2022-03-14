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

    // Вешаем на прикосновение функцию handleTouchStart
    document.addEventListener('touchstart', handleTouchStart, false);
    // А на движение пальцем по экрану - handleTouchMove      
    document.addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;
    var yDown = null;

    function handleTouchStart(evt) {
        xDown = evt.touches[0].clientX;
        yDown = evt.touches[0].clientY;
    };

    function handleTouchMove(evt) {
        if (!xDown || !yDown) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;
        
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                rotateY -= 36;
            } else {
                rotateY += 36;
            }
        } else {
            if (yDiff > 0) {
                rotateX += 36;
            } else {
                rotateX -= 36;
            }
        }
        transformCube();

        xDown = null;
        yDown = null;
    };


})();



// WAWE INSIDE BUTTONS ON CLICK

var btns = document.getElementsByClassName("btn");
var forEachBtns = Array.prototype.forEach;

forEachBtns.call(btns, function (btn) {
    btn.addEventListener("click", addWaveToBtn);
});

function addWaveToBtn(e) {
    var wave = document.createElement("div");
    var waveMaxSize = Math.max(this.clientWidth, this.clientHeight);
    var toStyleWave = wave.style;
    var px = "px";
    var btnRect = this.getBoundingClientRect();

    toStyleWave.height = toStyleWave.width = waveMaxSize + px;
    toStyleWave.left = e.clientX - btnRect.left - (waveMaxSize/2) + px;
    toStyleWave.top = e.clientY - btnRect.top - (waveMaxSize/2) + px;
    
    wave.classList.add("wave");
    this.appendChild(wave);

    setTimeout(
        () => {
            this.removeChild(wave);
        },
        700
    );
}

