//change time: line 45 && 93
//current time: line 54-58
var building=[]
var starLoc=[]


function setup() {
//   These lines set up the basic background and color
	createCanvas(windowWidth,windowHeight)
	background(155)
	stroke('gray')
	textSize(12)
	buildingArray()
	frameRate(30)

		for(var i=0;i<59;i++){	
			var y= random(height/2,height)
			starLoc[i]={
			xpoint:random(width),
			ypoint:y,
			speed: y/((60-i))
			}
		}
	
  // console.log(starLoc)
 


}

  



// don't work and draw() we are not ready yet!
function draw() {
	var d = new Date();
	var myMills = d.getMilliseconds();
	var mySecond = d.getSeconds()
	var secondMillis = myMills/1000 + mySecond 

	if(second()==0){resetArray()}

  // put drawing code here
  if(hour()>5 && hour()<18){
  	background('#53bcff');
  }else {
  	background('MidnightBlue');
}

  
  // var theTime = hour() + ":" + minute() + ":" + second();
  // text(theTime,40,40)
  // var theDate = year() + "/" + month() + "/" + day();
  // text(theDate,20,20)

  




//hour
	if(hour()<10){
		building[8]=0
		building[9]=hour()
	} else {
		for(i=0;i<hour().toString().length;i++){
		building[8+i]=parseInt(hour().toString().substr(i,1))
		}
	}
//minute
	if(minute()<10){
		building[10]=0
		building[11]=minute()
	} else {
		for(i=0;i<minute().toString().length;i++){
		building[10+i]=parseInt(minute().toString().substr(i,1))
		}
	}
//draw buildings
fill('grey')
noStroke()

  for(i=0;i<building.length;i++){
  	// text(building[i],50+40*i,100)
  	var h=map(building[i],0,10,0,height)
  	rect(width/14+width/14*i,height,20,-h)
  }


//stars or balloons
if(hour()>5 && hour()<18){
	
  	//balloon
	for(var i=0;i<second();i++){
		var h=map(secondMillis,i,60,starLoc[i].ypoint,-3)
		balloon(starLoc[i].xpoint,h); 
		starLoc[i].xpoint=starLoc[i].xpoint+random(-1,1)

		// starLoc[i].ypoint=starLoc[i].ypoint-starLoc[i].speed
	}
  }else {
	//stars
	for(var i=0;i<second();i++){
		star(starLoc[i].xpoint,starLoc[i].ypoint,5, 10); 
		starLoc[i].xpoint=starLoc[i].xpoint+random(-1,1)
		starLoc[i].ypoint=starLoc[i].ypoint+random(-1,1)
	}
}

  


}





function buildingArray(){
	var y=[];
	var m=[];
	var d=[];
	fill('grey')

	for(i=0;i<4;i++){
		y[i]=parseInt(year().toString().substr(i,1))
	}
	building=building.concat(y)
	for(i=0;i<month().toString().length;i++){
		m[i]=parseInt(month().toString().substr(i,1))
	}
	if(month()<10){m.unshift(0)}
	building=building.concat(m)
	for(i=0;i<day().toString().length;i++){
		d[i]=parseInt(day().toString().substr(i,1))
	}
	if(day()<10){d.unshift(0)}
	building=building.concat(d)

}

function star(x,y,radius1, radius2) {
	if(second()>55 && second()<60){
		fill(255,255,0,85*(60-second()))
	} else {
		fill('yellow')
		stroke('#D7DBDD')
	}
  var angle = TWO_PI / 5;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
function balloon(x,y) {
	this.x=x
	this.y=y
	if(second()>55 && second()<60){
		fill(255,192,203,85*(60-second()))
	} else {
		fill('pink')
		stroke('#D7DBDD')
	}
  	ellipse(this.x,this.y,10,10)
    noFill()
  	bezier(x,this.y+5,x,this.y+8,x-8,this.y+10,x-10,this.y+10);
  	endShape(CLOSE);


}

function resetArray(){
	for(var i=0;i<59;i++){	
			var y= random(height/2,height)
			starLoc[i]={
			xpoint:random(width),
			ypoint:y,
			speed: y/((60-i)*30)
			}
		}
}