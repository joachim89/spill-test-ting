

function setup(){
    createCanvas(windowWidth, windowHeight);

}
function draw(){
	window.scrollTo(0,1);
  noStroke();
	background(0);
	
    fill(255, 0, 0);
    rect(0, 0, width/2, height/2);

    fill(0, 255, 0);
    rect(width/2, 0, width/2, height/2);

    fill(0, 0, 255);
    rect(0, height/2, width/2, height/2);

    fill(255, 255, 0);
    rect(width/2, height/2, width/2, height/2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}