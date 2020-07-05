const Engine= matter.Engine;
const World= matter.World;
const Bodies =matter.Bodies;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
function setup() {
  createCanvas(480,800);
}

function draw() {
  background(255,255,255);  
  for(var k=0;k <=width; k= k+80 ){

   divisions.push (new Divisions(k, height-divisionHeight/2, 10, divisionHeight));

  }

    for(var j=15;j<=width;j=j+50)
    {
      plinko.push(new Plinko(j,75))
    }

    for(var j=15;j<=width+10;j=j+50)
    {
      plinko.push(new Plinko(j,175))
    }

    for(var j=15;j<=width+20;j=j+50)
    {
      plinko.push(new Plinko(j,275))
    }

    for(var j=15;j<=width+30;j=j+50)
    {
      plinko.push(new Plinko(j,375))
    }

for (var j = 0; j < particles.length; j++){

  particles[j].display();

}

for (var k = 0; k < divisions.length; k++){

  divisions[k].display();

}

for(var l = 0; l< plinkos.length; l++){

plinkos[l].display();

}

 drawSprites();

}