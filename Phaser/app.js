 var game = new Phaser.Game(800, 600, Phaser.Auto, '', {preload:preload, create:create, update:update})

var score = 0;
var lives = 5;

function preload(){
game.load.image('sky','assets/sky.png')
game.load.image('platform','assets/platform.png')
game.load.spritesheet('user','assets/dude.png')
game.load.spritesheet('enemy','assets/baddie.png')
}
 function create(){
game.physics.startSystem(Phaser.physics.ARCADE);
game.add.sprite(0,0,'sky');
platforms = game,add.physicsGroup();
platforms.enableBody = true;

var ground = platforms.create(0,550,'ground');
ground.scale.setTo(2,2);
ground.body.immovable = true;

var ledge2 = platforms.create(0,250,'ground');
ground.scale.setTo(2,2);
ground.body.immovable = true;

var ledge1 = platforms.create(300,400,'ground');
ground.scale.setTo(2,2);
ground.body.immovable = true;

var style = {font: "bold 32px Arial", fill:"#fff"};

sl = game.add.text(500,5, "score:", style);
sn = game.add.text(550,5,score,style)

ll = game.add.text(10,5,"lives:",style);
ln = game.add.text(100,5,lives,style);
 }

 function update(){

 }