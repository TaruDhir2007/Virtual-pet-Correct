var dog, happyDog, database, foodS, foodStock
var dogImg, happyDogImg;
var milkImg;
function preload()
{
happyDogImg = loadImage("../images/dogImg1.png");
dogImg = loadImage("../images/Dog.png");
milkImg = loadImage("../images/Milk.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250, 250, 50, 50);
  dog.addImage("Dog Image", dogImg)
  dog.scale = 0.5;
  foodStock = database.ref("Food");
  foodStock.on('value', readStock);
}


function draw() {  
  background(46, 139, 87)

  if(keyWentDown(UP_ARROW)){

    writeStock(foodS);
    dog.addImage("Dog Image",happyDogImg);
   
 

  }
 
  drawSprites();
  fill(0)
  text("Food Left: " + foodS, 250, 50);
  fill(0)
  text("PRESS UP ARROW TO FEED HEDWIG", 250, 100);
}
 function readStock(data){
   foodS = data.val();
 }
 function writeStock(x){
   if(x <= 0){
     x = 0
   }
   else{
     x = x-1;
   }
   database.ref('/').update({
     Food : x

   })
  }

