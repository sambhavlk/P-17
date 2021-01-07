var tower, door, climber, ghost, ib

var towerimg, ghostimg, climberimg, doorimg

var doorgroup, climbergroup, ibgroup

var gameState = "play"

function preload(){
  
  towerimg = loadImage("tower.png")
  ghostimg = loadImage("ghost-standing.png")
  climberimg = loadImage("climber.png")
  doorimg = loadImage("door.png")
  
}

function setup(){

  createCanvas(600, 600)
  
  tower = createSprite(300, 250)
  tower.addImage(towerimg)
  tower.velocityY = 2
  
  doorgroup = new Group()
  climbergroup = new Group()
  ibgroup = new Group()
  
  ghost = createSprite(200, 200)
  ghost.addImage(ghostimg)
  ghost.scale = 0.3
  
}

function draw(){
  
  background(0)
  
  
  if(gameState === "play"){
    
  
  if(tower.y > 600){
     tower.y = 300
     }
  
  if(keyDown("space")){
    ghost.velocityY = -5
  }
  
  ghost.velocityY += 2
  
  if(keyDown("left")){
     ghost.velocityX = -3
     }
  
    if(keyDown("right")){
     ghost.velocityX = 3
     }
  
  if(climbergroup.isTouching(ghost)){
     ghost.velocityY = 0
     }
  
  if(ibgroup.isTouching(ghost)||ghost.y>600){
     ghost.destroy()
    gameState = "end"
     }
  
  spawndoor()

}
 
 drawSprites()
  
  if(gameState === "end") {
    
    fill("yellow")
    text("game over", 250, 250)
    
  }
}

function spawndoor(){
  
  if(frameCount%240 === 0){
     door = createSprite(200, -50)
    door.addImage(doorimg)
    door.x = random(120, 400)
    door.velocityY = 2
    door.lifetime = 300
    doorgroup.add(door)
    
    climber = createSprite(200, 10)
    climber.addImage(climberimg)
    climber.x = door.x
    climber.velocityY = 2
    climber.lifetime = 300
    climbergroup.add(climber)
    ghost.depth = door.depth
    ghost.depth = ghost.depth + 1
    
    ib = createSprite(200, 15)
    ib.width = climber.width
    ib.height = 2
    ib.x = door.x
    ib.velocityY = 2
    ibgroup.add(ib)
     }
}