let canvas,ctx;

window.addEventListener('load',function(){

canvas= document.querySelector("#myCanvas");
ctx= canvas.getContext("2d");



robotStart(100,50)

})

function robotStart(x,y){

ctx.save()
 //face

 ctx.translate(x,y)
 ctx.strokeStyle="#000";
 ctx.lineWidth=3;
 ctx.fillStyle="#BF9D58";
 ctx.fillRect(160,0,90,90);
 ctx.strokeRect(160,0,90,90);

 //eyes
 
 ctx.clearRect(175,20,20,20);
 ctx.clearRect(215,20,20,20);
 //pupils
 
 ctx.fillStyle="#000";
 ctx.fillRect(180,25,10,10)
 ctx.fillRect(220,25,10,10)

 //mouth
 
 ctx.fillRect(180,60,50,15)

 //neck
 ctx.fillStyle="#FF4928";
 ctx.fillRect(185,92,40,30)
 ctx.strokeRect(185,90,40,30)

 robotBody(80,120)

ctx.restore()

}

function robotBody(x,y){

ctx.save()

ctx.translate(x,y);

//chest
ctx.fillStyle="#4F9984";
ctx.fillRect(52,0,150,100)
ctx.strokeRect(52,0,150,100)

//tronco
ctx.fillStyle="green";
ctx.fillRect(80,100,90,50)
ctx.strokeRect(80,100,90,50)

ctx.fillRect(53,150,150,50)
ctx.strokeRect(53,150,150,50)

robotArms()
robotlegs(100,50)
ctx.restore()


}

function robotArms(){

ctx.save()


//elbow
 ctx.fillStyle="#FF4928";
ctx.fillRect(1,1,50,30)
ctx.strokeRect(1,1,50,30)

ctx.fillRect(203,1,50,30)
ctx.strokeRect(203,1,50,30)

// arms

ctx.fillStyle="purple"
ctx.fillRect(1,33,40,90)
ctx.strokeRect(1,33,40,90)

ctx.fillRect(213,33,40,90)
ctx.strokeRect(213,33,40,90)

ctx.restore()

}

function robotlegs(x,y){

ctx.save()

//leg left
ctx.translate(x,y);
ctx.rotate(-1.4);

ctx.fillStyle="yellow";
ctx.fillRect(-275,-20,130,60)
ctx.strokeRect(-275,-20,130,60)

//leg right
ctx.translate(x,y);
ctx.rotate(-0.4);
ctx.fillRect(-358,-78,130,60)
ctx.strokeRect(-358,-78,130,60)

ctx.fillStyle="brown";
ctx.rotate(-0.1);
ctx.fillRect(-378,-113,35,60);
ctx.strokeRect(-378,-113,35,60);

ctx.rotate(0.5);
ctx.fillRect(-400,-70,35,60);
ctx.strokeRect(-400,-70,35,60);


ctx.restore()
}