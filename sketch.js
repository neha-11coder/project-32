const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var time=0;
function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    getBackgroundImg();

}

function draw(){

    if(backgroundImg)
    background(backgroundImg);
    fill ("purple")
    textSize(20)
    text("Time :"+"12 pm",100,100);
    


    Engine.update(engine);

    


}

async function getBackgroundImg(){
        var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON=await response.json();
        var datetime=responseJSON.datetime;
        var hour=datetime.slice(11,13);
        console.log(hour);
    
        if(hour>=01&&hour<=03){
            bg ="sprites/sunrise1.png";
         }else if(hour>=04&&hour<=06){
            bg="sprites/sunrise2.png"
         }else if(hour>=07&&hour<=09){
            bg="sprites/sunrise3.png"
        }else if(hour>=10&&hour<=12){
            bg="sprites/sunrise4.png"
        }else {
            bg="sprites/sunset11.png"
        }
        backgroundImg=loadImage(bg);
    
        }
        
      
