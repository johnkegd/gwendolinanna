<script>
    window.onload = function(){
    
    var canvas = document.createElement("canvas"),
       c = canvas.getContext("2d");
       canvas.width = innerWidth;
       canvas.height = innerHeight; 
       width = innerWidth;
       height = innerHeight;
    document.body.appendChild(canvas);   
    
    var particles = [];
    
    function particle() {
       this.x = Math.random() * width ; 
       this.y = Math.random() * height ;
       this.vx = 0;
       this.vy = 0;
       this.ax = 0;
       this.ay = 0; 
       this.life = 0;
       this.lifemax = 75;
       this.gravity = 0;
       this.fade = 1;
       this.w = 3;
       this.h = 3;
       
       this.draw = function() {
           c.fillStyle = "rgba(255,255,255,"+this.fade+")";
           c.fillRect(this.x,this.y,this.w,this.h);
       }
       
       this.update = function() {
           this.w+=0.1;
           this.h+=0.1; 
           this.vy += this.gravity;
           this.vx += this.ax; 
           this.vy += this.ay; 
           this.vx *= 0.91;
           this.vy *= 0.91;
           this.y += this.vy;
           this.x += this.vx;
           this.life++;
       
           if (this.y > canvas.height / 2 && this.x < canvas.width / 2) {
               this.vx += 1; 
           }
       
           if (this.y < canvas.height / 2 && this.x < canvas.width / 2) {
               this.vy += 1;
           }   
         
           if (this.y > canvas.height / 2 && this.x > canvas.width / 2) {
               this.vy -= 1; 
           }   
       
          
           if (this.y < canvas.height / 2 && this.x > canvas.width / 2) {
              this.vx -= 1; 
           }
       
          deltaX = this.x - width/2
          deltaY = this.y - height/2
          
          if(Math.sqrt(deltaX**2 + deltaY**2) < 50) {
              this.fade -= 0.1;  
              this.w -= 1;
              this.h -= 1;
          } 
       }        
    };
      
    setInterval(function(){
            
        c.fillStyle = "rgba(0,0,0,0.5)";  
        c.fillRect(0,0,width,height);
        
        for(var i = 0; i < 20; i++) {
            particles.push(new particle());
        } 
        
        for(var i in particles) {
           particles[i].draw();
           particles[i].update(); 
           
           if(particles[i].life >= particles[i].lifemax) {
              delete particles[i]; 
           }
        }
        
    }, 30);
};
</script>

<canvas></canvas>