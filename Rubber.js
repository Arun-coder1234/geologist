class Rubber{

    constructor(x,y){
            var options = {
                restitution: 0.3,
                friction : 5,
                density : 1
              }
             
              this.body = Matter.Bodies.circle(x, y, 70, options);
              this.radius = 70;
              World.add(world,this.body);
        }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x, pos.y);
        rotate (angle);
        strokeWeight(4);
        stroke("green")
        ellipseMode(CENTER);
        fill("pink");
        ellipse(0, 0, this.radius);
        pop();
    }
    
    }