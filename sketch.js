//Billeder
let bg;
let BLOCK;

//Sliders
let SkubVenstre, SkubOp, SkubNed, SkubHøjre;

//Slider Værdier
let V;
let H;
let O;
let N;

//Retning speed
let Hspeed = 0;
let Vspeed = 0;
let Nspeed = 0;
let Ospeed = 0;

//Block specs
let block = {
    width: 50,
    height: 50,
    x: 350,
    y: 350,
}


function preload() {
    //Billeder preload
    bg = loadImage("baggrund.jpg");
    BLOCK = loadImage("block.png");
}

function setup() {
    //Skabelse af sliders
    SkubVenstre = createSlider(0, 10, 0);
    SkubVenstre.position(20, 50);
    SkubHøjre = createSlider(0, 10, 0);
    SkubHøjre.position(20, 100);
    SkubOp = createSlider(0, 10, 0);
    SkubOp.position(20, 150);
    SkubNed = createSlider(0, 10, 0);
    SkubNed.position(20, 200);
}

function draw() {
    createCanvas(800,730);
    //Baggrund til billed
    background(bg);
    //Block
    spaceblock();
    //Values til variable
    let V = SkubVenstre.value();
    let H = SkubHøjre.value();
    let O = SkubOp.value();
    let N = SkubNed.value();
    //Tekst farve
    fill(255);

    //Variable display
    text('← Newton: ' + V, SkubVenstre.x * 2, 50);
    text('→ Newton: ' + H, SkubHøjre.x * 2, 100);
    text('↑ Newton: ' + O, SkubOp.x * 2, 150);
    text('↓ Newton: ' + N, SkubNed.x * 2, 200);
    //Konstant bevægelse check

    //Højre
    if (block.x < 800-block.width) {
        if (Hspeed < H) {
            Hspeed = H;
        }
        block.x += Hspeed;
    }
    //Venstre
    if (block.x > 0) {
        if (Vspeed < V) {
            Vspeed = V;
        }
        block.x -= Vspeed;
    }
    //Ned
    if (block.y < 800-block.height) {
        if (Nspeed < N) {
            Nspeed = N;
        }
        block.y += Nspeed;
    }
    //Op
    if (block.y > 0) {
        if (Ospeed < O) {
            OSpeed = O;
        }
        block.y -= Ospeed;
    }
}


function spaceblock() {
    //Tegn blockx½
    image(BLOCK, block.x, block.y, block.width,block.height);
}



