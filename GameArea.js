/**
 * Created by RAGHAV on 2/18/2017.
 */
var bird;
var pipe =[];
function startGame(){
    bird = new Bird(40,300,"red");
    myGameArea.start();
}
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function(){
        this.canvas.width = 400;
        this.canvas.height = 600;
        this.canvas.style.border = "2px solid black";
        this.canvas.style.backgroundColor = "lightblue";
        this.context = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);
        this.frameNo = 0;
        this.interval = setInterval(updategamearea,1000/60);
        window.addEventListener('keydown',function (e) {
            e.preventDefault();
            myGameArea.keys=(myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type == "keydown")
        })
        window.addEventListener("keyup",function (e) {
            myGameArea.keys[e.keyCode] = (e.type == "keydown")
        })
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function(){
        clearInterval(this.interval);
    }

}
var i;
var j =450;
var pipe_height;
var height_arr = [50,100,150,200,250,300,250,400];
function updategamearea(){
    myGameArea.clear();
    pipe_height = height_arr[Math.floor(Math.random()*8)];
    if((myGameArea.frameNo%180)==0) {
        pipe.push(new Pipe(0, pipe_height));
        pipe.push(new Pipe(600-(j-pipe_height),j-pipe_height));
        if(j<500)
        j = j+1;
    }
    if (myGameArea.keys && myGameArea.keys[32]) {
        bird.up();
    }
    bird.newpos();
    bird.draw();
    obj.show();

    for(i=0;i<pipe.length;(i=i+2)) {
        if(pipe[i].x<-15){
            pipe.shift();
            pipe.shift();
        }
        pipe[i].newpos();
        pipe[i+1].newpos();
        pipe[i].draw();
        pipe[i+1].draw();
    }
    score.value++;
    score.show();
    myGameArea.frameNo++;
    if(collision(bird,pipe[0],pipe[1])){
        gameOver.show();
        myGameArea.stop();
    }

}
function collision(objA,collide1,collide2){
    if(((objA.x+15>collide2.x)&&(objA.x-15<collide2.x+20))&&((objA.y-15<collide1.height)||(objA.y+15>collide2.y)))
        return true;
    else
        return false;
}