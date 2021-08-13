
var iss;
var spacecraft1,spacecraft2,spacecraft3,spacecraft4;
var hasDocked;
var issimg;
var spacecraftimg1,spacecraftimg2,spacecarftimg3,spacecraft4img;
var bg = ("image/spacebg.png");

var hasDocked = false;




function preload(){
  issImg = loadImage("image/iss.png");
  spacecraft1_Img = loadImage("image/spacecraft1.png");
  spacrcraft2_Img = loadImage("image/spacecraft2.png");
  spacecraft3_Img = loadImage("image/spacecraft3.png");
  spacecraft4_Img = loadImage("image/spacecraft4.png");
  getBackgroundImg();

}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  iss = createSprite(330,130);
  iss.addImage(issimg);
  iss.scale = 0.25;

  spacecraft = craeteSprite(285,240);
  spacecraft.addImage(spacecraftimg);
  spacecraft.scale = 0.15;

}

function draw() {
  background(255,255,255); 
  if(!hasDocked) {
    spacecraft.x = spacecarft.x + random (-1,1);
  
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y -2;
  }
if(keyDown("LEFT_ARROW")){
  spacecraft.addImage(spacecarftimg3);
}
if(keyDown("RIGHT_ARROW")){
  spacecraft.addImage(spacecraftimg2);
if(keyDown("DOWN_ARROW")){
  spacecraft.addImage(spacecraftimg1);
  if(keyDown("UP_ARROWW")){

  }
}


}
  drawSprites();
}