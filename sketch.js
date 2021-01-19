var canvas;
var music;
var box, surface1, surface2, surface3, surface4;
var boxColor, surface1Color, surface2Color, surface3Color, surface4Color;
var velocity

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    velocity = 10
    //create 4 different surfaces
    surface1 = createSprite(100, 585, 200, 20)
    surface1Color = "blue"
    surface1.shapeColor = (surface1Color)
    
    surface2 = createSprite(300, 585, 200, 20)
    surface2Color = "orange"
    surface2.shapeColor = (surface2Color)
    
    surface3 = createSprite(500, 585, 200, 20)
    surface3Color = "magenta"
    surface3.shapeColor = (surface3Color)
    
    surface4 = createSprite(700, 585, 200, 20)
    surface4Color = "darkgreen"
    surface4.shapeColor = (surface4Color)
    //create box sprite and give velocity
    box = createSprite(random(20, 750), 100, 20, 20)
    boxColor = "black"
    box.shapeColor = (boxColor);
    box.velocityX = velocity
    box.velocityY = velocity
}

function draw() {
    background("pink");
    //add condition to check if box touching surface and make it box
    //console.log("box.x: " + box.x + ", box.y: " + box.y);
    if ( box.x >= 790 )
        box.velocityX = -velocity;
    if ( box.y >= 565 )
        box.velocityY = -velocity;
    if ( box.x <= 10 )
        box.velocityX = velocity;
    if ( box.y <= 10 )
        box.velocityY = velocity;
    if ( box.isTouching(surface1) )
        boxColor = surface1Color;
    if ( box.isTouching(surface2) )
        boxColor = surface2Color;
    if ( box.isTouching(surface3) )
        boxColor = surface3Color;
    if ( box.isTouching(surface4) )
        boxColor = surface4Color;
    box.shapeColor = (boxColor);
    drawSprites()
}
