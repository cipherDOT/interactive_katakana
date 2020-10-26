var value = 0;


function mousePressed() {
    value = round(random(0, 96));
}


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    background(0);

    fill(0, 255,70);
    textSize(34);
    text(String.fromCharCode(0x30A0 + value), width / 2, height / 2);
}