function init(){
    

     canvas = document.getElementById('mycanvas');
     pen = canvas.getContext('2d');
     W = canvas.width;
     H = canvas.height;
     
     box = {
         x:20,
         y:20,
         w:20,
         h:30,
         speed:5,
     }
     
 }
 
 function draw(){
     pen.clearRect(0,0,W,H);
     console.log("Draw");
     pen.fillStyle = "green";
     pen.fillRect(box.x,box.y,box.w,box.h);
     
 }
 
 function update(){
     
     console.log("Update");
     box.x += box.speed;
     box.y += 3;
     
     if(box.x>=W){
         box.speed *= -1;
     }
 }
 
 function gameLoop(){
     draw();
     update();
 }
 
 init();
 setInterval(gameLoop,100);
 
 