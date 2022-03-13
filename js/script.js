(function () {
    let rotateX = 0;
    let rotateY = 0;

    function transformCube () {
        document.querySelector(".cube").style.transform =
        "rotateY(" + rotateY + "deg)" + "rotateX(" + rotateX + "deg)";
    }

    // CHANGE VARIABLES

    // on BUTTONS
    document.querySelector("#toLeft").onclick = function(){
        rotateY -= 10;
        transformCube();
    }
    document.querySelector("#toDown").onclick = function(){
        rotateX += 10;
        transformCube();
    }
    document.querySelector("#toRight").onclick = function(){
        rotateY += 10;
        transformCube();
    }
    document.querySelector("#toUp").onclick = function(){
        rotateX -= 10;
        transformCube();
    }
    
    // on KYE DOWN
    document.onkeydown = function(e) {
        if (e.keyCode === 37) {
            rotateY -= 10;
        } else if (e.keyCode === 38) {
            rotateX += 10;
        } else if (e.keyCode === 39) {
            rotateY += 10;
        } else if (e.keyCode === 40) {
            rotateX -= 10;
        }
        transformCube();
    }

})();