class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1 = loadImage("sprites/smoke.png");
    this.trajectory = []
  }

  display() {
   
    super.display();
    
    if(this.body.position.x>250 && this.body.velocity.x>10){
      var position=[this.body.position.x,this.body.position.y]
      this.trajectory.push(position)
    }
   
   
    //initialization,condition,icrement/decrement
    for(var i=0;i<this.trajectory.length;i++){
      image(this.image1,this.trajectory[i][0],this.trajectory[i][1])
    }

    // t = [    0       1         2        3]
    // t = [ [x1,y1], [x2,y2], [x3,y3], [x41y4]...]
    //          0,1       0,1     0,1      0,1
    // 00 01
    // 10 11
    // 20 21
    // 30 31
    // [i]0   [i][1]
  }
}
