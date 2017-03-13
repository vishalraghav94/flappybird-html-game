/**
 * Created by RAGHAV on 2/18/2017.
 */
function Bird(x,y,color){
    this.x = x;
    this.y = y;
    this.gravity = 0.3;
    this.lift = 2;
    this.speed = 0;
    this.newpos = function(){
        this.speed+=this.gravity;
        this.y += this.speed;
        if(this.y>574) {
            this.speed = 0;
            this.y = 574;
        }
        if(this.y<15) {
            this.speed = 0;
            this.y = 15;
        }
    }
    this.draw = function(){
        var ctx = myGameArea.context;
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.arc(this.x,this.y,15,0,2*Math.PI);
        ctx.fill();
    }
    this.up = function(){
        this.speed += -this.lift;
    }
}
var obj = {
    show: function () {
        var ctx = myGameArea.context;
        ctx.fillStyle = "black";
        ctx.fillRect(0,589,400,11);
    }
}

function Pipe(y,height){
    this.x = 420;
    this.y = y;
    this.height = height;
    this.speed = -1;
    this.newpos = function(){
        this.x += this.speed;
    }
    this.draw = function(){
        var ctx = myGameArea.context;
        ctx.fillStyle = "red";
        ctx.fillRect(this.x,this.y,20,this.height);
    }
}
var score = {
    value : 0,
    show: function(){
        var ctx = myGameArea.context;
        var str = "Score: " + this.value;
        ctx.font = "30px Arial";
        ctx.fillStyle = "black";
        ctx.fillText(str,180,50);
    }
}
var gameOver = {
    value : 0,
    show: function(){
        var ctx = myGameArea.context;
        var str = "Game Over";
        ctx.font = "60px Arial";
        ctx.fillStyle = "yellow";
        ctx.fillText(str,40,300);
    }
}