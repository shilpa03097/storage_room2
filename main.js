img = "";

function preload(){
 img=loadImage("dog_cat.jpg");
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}
function draw(){
    image(img,0 ,0 , 640, 420);
    fill("#FF0000");
    text("dog",45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);

    fill("#FF0000");
    text("cat", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90 ,270 ,320);
}
function Living_room() {
    window.location = "2index.html";
}
function Kitchen() {
    window.location = "3index.html";
}
function Storage_room() {
    window.location = "4index.html";
}
function Bedroom() {
    window.location = "5index.html";
}