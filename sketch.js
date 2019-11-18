let bg;
let BLOCK;
let SkubV, SkubOp, SkubNed, SkubHøjre;
let V;
let H;
let O;
let N;

function preload() {
    bg = loadImage("baggrund.jpg");
    BLOCK = loadImage("block.png");
}

function setup() {
    SkubV = createSlider(0, 10, 0);
    SkubV.position(20, 50);
    SkubHøjre = createSlider(0, 10, 0);
    SkubHøjre.position(20, 100);
    SkubOp = createSlider(0, 10, 0);
    SkubOp.position(20, 150);
    SkubNed = createSlider(0, 10, 0);
    SkubNed.position(20, 200);
}

function draw() {
    createCanvas(800,800);
    background(bg);
    spaceblock();
    let V = SkubV.value();
    let H = SkubHøjre.value();
    let O = SkubOp.value();
    let N = SkubNed.value();
    fill(255);
    text('→ Newton: ' + V, SkubV.x * 2, 50);
    text('← Newton: ' + H, SkubHøjre.x * 2, 100);
    text('↑ Newton: ' + O, SkubOp.x * 2, 150);
    text('↓ Newton: ' + N, SkubNed.x * 2, 200);
}


function spaceblock() {
    block = {
        width: 100,
        height: 100,
        x: 350,
        y: 350,
    }

    image(BLOCK, block.x, block.x, block.width,block.height);

    //CONTROLS//

    block.x = block.x + N;
}


