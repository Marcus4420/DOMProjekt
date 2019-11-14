let bg;
let BLOCK;

function preload() {
    bg = loadImage("baggrund.jpg");
    BLOCK = loadImage("block.png");
}

function setup() {

}

function draw() {
    createCanvas(800,800);
    background(bg);
    spaceblock();
}


function spaceblock() {
    block = {
        width: 100,
        height: 100,
    }

    image(BLOCK, width/2-block.width/2, height/2-block.height/2, block.width,block.height);

}