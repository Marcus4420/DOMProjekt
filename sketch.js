let bg;
let BLOCK;
let SkubV, SkubOp, SkubNed, SkubHøjre;
let V;
let H;
let O;
let N;
let block = {
    width: 50,
    height: 50,
    x: 350,
    y: 350,
}


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
    text('← Newton: ' + V, SkubV.x * 2, 50);
    text('→ Newton: ' + H, SkubHøjre.x * 2, 100);
    text('↑ Newton: ' + O, SkubOp.x * 2, 150);
    text('↓ Newton: ' + N, SkubNed.x * 2, 200);
    if (block.x < 800-block.width) {
        block.x += H/5;
    }
    if (block.x > 0) {
        block.x -= V;
    }
    if (block.y < 800-block.height) {
        block.y += N;
    }
    if (block.y > 0) {
        block.y -= O;
    }
}


function spaceblock() {
    image(BLOCK, block.x, block.y, block.width,block.height);
}



