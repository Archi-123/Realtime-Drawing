noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

   canvas= createCanvas(550,500);
   canvas.position(560,90);

   poseNet=ml5.poseNet(video,modelLoaded);
   poseNet.on('pose',gotPoses);
}

function draw(){
    background('#87CEEB');
    fill('#EE82EE');
    stroke('#EE82EE');
    square(noseX,noseY,difference);
    document.getElementById("square_sides").innerHTML= "Width and Height of the square is: "+difference+"px";

}

function modelLoaded(){
console.log("PoseNet is initialized");
}

function gotPoses(results){
    if (results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX = "+noseX+" noseY = "+noseY);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX ="+leftWristX+" rightWristX = "+rightWristX+ " difference = ");

    }
}

