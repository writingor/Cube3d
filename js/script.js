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
        rotateX -= 10;
        transformCube();
    }
    document.querySelector("#toRight").onclick = function(){
        rotateY += 10;
        transformCube();
    }
    document.querySelector("#toUp").onclick = function(){
        rotateX += 10;
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
    

    if(Math.abs(d.x) > Math.abs(d.y)) //Проверяем, движение по какой оси было длиннее
    {
   	 if(Math.abs(d.x) > sensitivity) //Проверяем, было ли движение достаточно длинным
   	 {
   		 if(d.x > 0) //Если значение больше нуля, значит пользователь двигал пальцем справа налево
   		 {
            rotateY -= 10;
            transformCube();
   		 }
   		 else //Иначе он двигал им слева направо
   		 {
            rotateY += 10;
            transformCube();
   		 }
   	 }
    }
    else //Аналогичные проверки для вертикальной оси
    {
   	 if(Math.abs(d.y) > sensitivity)
   	 {
   		 if(d.y > 0) //Свайп вверх
   		 {
            rotateX += 10;
            transformCube();
   		 }
   		 else //Свайп вниз
   		 {
            rotateX -= 10;
            transformCube();
   		 }
   	 }
    }

})();