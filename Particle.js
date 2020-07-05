




class Particle {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
        this.body=Bodies.circle(x,y,this.r,options);
        this.color=(random(0,255),random(0,255),random(0,255));
        world.add(world,this.body);
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
