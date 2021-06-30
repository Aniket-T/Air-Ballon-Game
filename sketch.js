var balloon;
var balloonImage;
var background;
var backgroundImage;
var database;
var databaseref;
var position;




function setup() {
  createCanvas(1200,800);
  ballon = createSprite(400, 200, 50, 50);
  ballonImage = loadImage('Hot Air Ballon-03.png');
  ballon.addImage(ballonImage);
  backgroundimg = loadImage('Hot Air Ballon-01.png')
  database = firebase.database();
  databaseref = database.ref('balloon/position');
  databaseref.on('value', readPosition, showError);

}

function draw() {

  background(backgroundimg);

  if(keyDown(LEFT_ARROW)){
    writePosition(-1,0);
  }
  if(keyDown(RIGHT_ARROW)){
    writePosition(1,0);
  }
  if(keyDown(UP_ARROW)){
    writePosition(0,1);
  }
  if(keyDown(DOWN_ARROW)){
    writePosition(0,-1);
  }
  drawSprites();
}
function writePosition(x,y){
  database.ref('balloon/position').set({
    'x': position.x + x,
    'y': position.y + y
  })
}

  function readPosition(data){
    position = data.val();
    ballon.x = position.x;
    ballon.y = position.y;
  }

  function showError(){
    console.log('There was a error in writing to the database');
  }

