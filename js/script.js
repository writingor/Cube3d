(function () {
    let rotateX = 0;
    let rotateY = 0;

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
        document.querySelector(".cube").style.transform =
        "rotateY(" + rotateY + "deg)" + "rotateX(" + rotateX + "deg)";
    }
})();