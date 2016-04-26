var speed = 1;
var run_requestAnimation;
    

    /*
    * load image in canvas#background
    */
    function drawBackground() {
        
        var img = new Image();
        img.onload = function() {
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
        img.src = "images/background.jpg";
    }

    function drawPanel() {

    }

    function drawSprite() {
        var Sprite = new Image();
        updatesprite(sprite1);
        Sprite.onload = function() {
            //context.clearRect(0, 0, canvas.width, canvas.height);
            //context.drawImage(Sprite, 0, 0, 130, 100);
            context.drawImage(Sprite, sprite1.startX, sprite1.startY, 110, 110);
        };
        Sprite.src = "images/Cyndaquil.png";
    }

var sprite1 = {
    beginX: 0,
    beginY: 0,
    endX: 100,
    endY: 100,
    startX: 0,
    startY: 0,
    stopX: 100,
    stopY: 100,
    speed: speed,
    click: false,
    show: true,
    dieX: 0,
    dieY:0
}
var sprite2 = {
    beginX: 190,
    beginY: 0,
    endX: 190,
    endY: 70,
    startX: 190,
    startY: 0,
    stopX: 190,
    stopY: 70,
    speed: speed,
    click: false,
    show: false,
    dieX: 0,
    dieY:0
}
var sprite3 = {
    beginX: 390,
    beginY: 0,
    endX: 280,
    endY: 80,
    startX: 390,
    startY: 0,
    stopX: 280,
    stopY: 80,
    speed: speed,
    click: false,
    show: false,
    dieX: 0,
    dieY:0,
    stop: false
}
var sprite4 = {
    beginX: 390,
    beginY: 170,
    endX: 290,
    endY: 150,
    startX: 390,
    startY: 180,
    stopX: 290,
    stopY: 150,
    speed: speed,
    click: false,
    show: false,
    dieX: 0,
    dieY:0
}
var sprite5 = {
    beginX: 390,
    beginY: 390,
    endX: 280,
    endY: 280,
    startX: 390,
    startY: 390,
    stopX: 280,
    stopY: 280,
    speed: speed,
    click: false,
    show: false,
    dieX: 0,
    dieY:0
}
var sprite6 = {
    beginX: 170,
    beginY: 390,
    endX: 170,
    endY: 300,
    startX: 170,
    startY: 390,
    stopX: 170,
    stopY: 300,
    speed: speed,
    click: false,
    show: false,
    dieX: 0,
    dieY:0
}
var sprite7 = {
    beginX: 0,
    beginY: 390,
    endX: 110,
    endY: 280,
    startX: 0,
    startY: 390,
    stopX: 110,
    stopY: 280,
    speed: speed,
    click: false,
    show: false,
    dieX: 0,
    dieY:0
}
var sprite8 = {
    beginX: 0,
    beginY: 170,
    endX: 90,
    endY: 170,
    startX: 0,
    startY: 170,
    stopX: 90,
    stopY: 170,
    speed: speed,
    click: false,
    show: false,
    dieX: 0,
    dieY:0
}


    function updatesprite(sprite) {
    sprite.click = true;
    if (sprite.startX > sprite.stopX) {
        sprite.startX -= sprite.speed;
    } else if (sprite.startX < sprite.stopX) {
        sprite.startX += sprite.speed;
    }

    if (sprite.startY > sprite.stopY) {
        sprite.startY -= sprite.speed;
    } else if (sprite.startY < sprite.stopY) {
        sprite.startY += sprite.speed;
    }

    if (sprite.startX == sprite.stopX && sprite.startY == sprite.stopY) {
        sprite.startX = sprite.stopX;
        sprite.startY = sprite.stopY;
        sprite.stopX = sprite.beginX;
        sprite.stopY = sprite.beginY;
    }

    if (sprite.startX == sprite.beginX && sprite.startY == sprite.beginY) {
        sprite.show = false;
        sprite.stop = true;
        sprite.startX = sprite.beginX;
        sprite.startY = sprite.beginY;
        sprite.stopX = sprite.endX;
        sprite.stopY = sprite.endY;
        //score -= 5;
        //heart_number--;
        //random();
    }
}
    /*var render = function() {
    //draw background
    
        if(sprite1.show) {
            context.drawImage(sprite1, sprite1.startX, sprite1.startY, 110, 110);
        }
    }*/

    function main() {
        drawBackground();
        drawSprite();

        //render();
        if(true) {
        cancelAnimationFrame(run_requestAnimation);
        run_requestAnimation = requestAnimationFrame(main);
        }
    }

    window.onload = function(){
        canvas = document.getElementById("canvas");
        context = canvas.getContext("2d");
        var windows = window;
        requestAnimationFrame = windows.requestAnimationFrame || windows.webkitRequestAnimationFrame || windows.msRequestAnimationFrame || windows.mozRequestAnimationFrame;
        
        main();

    }