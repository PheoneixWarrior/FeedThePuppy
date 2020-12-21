var dog, happyDog, food, foodS, foodStock
var PUPPY
var database
function preload(){
dog = loadImage("Dog (2).png")
happyDog = loadImage("happydog (2).png")

}

function setup() {
   database = firebase.database();
  createCanvas(500, 500);
  PUPPY = createSprite(250, 250, 20, 20)
  PUPPY.addImage(dog)
  PUPPY.scale = 0.15;
  foodStock = database.ref('food')
  foodStock.on("value",readStock)

}


function draw() {  
background (46, 139, 87)
fill("white")
text("Food remaining:"+foodS, 250,15)
  drawSprites();
  
  //add styles here
  if(keyWentDown(UP_ARROW)){
    foodS = foodS-1
    writeStock(foodS)
    PUPPY.addImage(happyDog)
  }

}
function readStock(data){
foodS=data.val();
}

function writeStock(x){
  database.ref('/')
}

