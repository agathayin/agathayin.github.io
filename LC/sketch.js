var table
var allObjects=[]
var currentLine=1001
var recordTable=[]
var gameNumber=1000
var mousePos=false
var specialChoice=false
var firstMills
var lastMills
var d = new Date();
var myMills = d.getMilliseconds();
var mySecond = d.getSeconds()
var secondMillis = myMills/1000 + mySecond 
var yPos=0
var dotlocs = [];
var xspeed = 1;
var scoreShop=0
var manX=0
var manY=0
var manActive=false
var score=0


function preload() {
  table = loadTable("text.csv", "csv","header");
  heroine = loadImage('image/heroine.png');
  hero=loadImage('image/hero.png');
  logo=loadImage('image/logo.png');
  manPic=loadImage('image/boy.png');
  

}

function setup() {
  createCanvas(windowWidth,windowHeight*0.8);
  yPos=height
  manX=0.3*width
  manY=0.36*height
//load table
  for (var i = 0; i < table.getRowCount(); i++) {
       var csvObject = new Object;
       csvObject.id = Number(table.getString(i, 0));
       csvObject.category = table.getString(i, 1);
       csvObject.speaker = table.getString(i, 2);
       csvObject.image = table.getString(i, 3);
       csvObject.lines = table.getString(i, 4);
       csvObject.request = boolean(table.getString(i, 5));
       csvObject.to = Number(table.getString(i, 6));
       csvObject.judgement = boolean(table.getString(i, 7));
       
       allObjects.push(csvObject)

     }
  print(allObjects)
//start
  startStory()
//dots
for (var i=0; i < 20;i++) {
    for (var j=0; j < 10;j++) {

    var x = random(10,width-10)
    var y = random(10,height/2-10)
    var hello = "Hello I am a j " + j;
    dotlocs.push(new Dots(x,y,hello))
  }
}

}





function startStory(){
  document.body.style.background="url(image/Cg1.png)"
  document.body.style.backgroundSize="cover"
  document.body.style.backgroundRepeat = "no-repeat";
  document.getElementById("story").innerHTML="START<br>"
  document.getElementById('story').addEventListener("click", readNext)
  document.body.addEventListener("keyup", function(event){event.preventDefault();if(event.keyCode === 13){document.getElementById('story').click();}});


}

function readNext(){
  clear()
  print('current:'+currentLine)
  for(var i=0;i<allObjects.length;i++){
    if (allObjects[i].id==currentLine && allObjects[i].id<9000){
      if(allObjects[i].category=="text"){
        //background image
        document.body.style.background="url(image/"+allObjects[i].image+")"
        document.body.style.backgroundSize="cover"
        document.body.style.backgroundRepeat = "no-repeat";
        //font color: male or female
        if(allObjects[i].speaker=="g"){
          document.getElementById("story").style.color="black"
        } else if(allObjects[i].speaker=="m"){
          document.getElementById("story").style.color="#3da7ff"
        } else if(allObjects[i].speaker=="f"){
          document.getElementById("story").style.color="#e884d5"
        } 
        //text
        document.getElementById("story").innerHTML=allObjects[i].lines
        currentLine=allObjects[i].to
        print(currentLine)
        break
      } else if(allObjects[i].category=="choice"){
        readChoice()
      } else if(allObjects[i].category=="wechat"){
        readWechat()
        break
      }
      break
      
    } else if(allObjects[i].id==currentLine && allObjects[i].id>=9000){readJudge();break}

  }
}

function readWechat(){
  clear()

  
 print('current:'+currentLine)
  for(var i=0;i<allObjects.length;i++){
    if (allObjects[i].id==currentLine){
      if(allObjects[i].category=="wechat"){
        fill(color('rgba(100%, 100%, 100%, 0.5)'))
        rect(0,0,width,0.17*height)
        //background image
        document.body.style.background="url(image/"+allObjects[i].image+")"
        document.body.style.backgroundSize="cover"
        document.body.style.backgroundRepeat = "no-repeat";
        //font color: male or female
        if(allObjects[i].speaker=="g"){
          document.getElementById("story").style.color="black"
          fill('black')
        } else if(allObjects[i].speaker=="m"){
          document.getElementById("story").style.color="#3da7ff"
          fill('#3da7ff')
          // image(hero, width/3-84, height/2-43)
          image(hero, width/3-86, 10)
        } else if(allObjects[i].speaker=="f"){
          document.getElementById("story").style.color="#e884d5"
          fill('#e884d5')
          image(heroine, width/3-86, 10)
        } 
        //text
        document.getElementById("story").innerHTML="Click or Enter to read the new message"
        textSize(30);
        text(allObjects[i].lines,width/3,0.09*height)
        // setTimeout(function(){currentLine=allObjects[i].to},1)
        currentLine=allObjects[i].to
        print(currentLine)
        break
      } else if(allObjects[i].category=="choice"){
        readChoice()
      } else if(allObjects[i].category=="text"){
        readNext()
      }
      
    }
  }

  

}


function readChoice(){
  clear()
  gameNumber=1000
  document.getElementById("story").innerHTML=""
  print('current:'+currentLine)
  for(var i=0;i<allObjects.length;i++){
    if (allObjects[i].id==currentLine){
      if(allObjects[i].category=="choice"){
        if(allObjects[i].request==false){
          document.body.style.background="url(image/"+allObjects[i].image+")"
          document.body.style.backgroundSize="cover"
          document.body.style.backgroundRepeat = "no-repeat";
          document.getElementById("story").innerHTML+="<button type=\"button\" onclick=\"recordChoice("+allObjects[i].to+","+allObjects[i].judgement+","+allObjects[i].id+")\">"+allObjects[i].lines+"</button><br>"

        } else {
          gameCheck(allObjects[i].id)
          if(specialChoice){
             document.getElementById("story").innerHTML+="<button type=\"button\" onclick=\"recordChoice("+allObjects[i].to+","+allObjects[i].judgement+","+allObjects[i].id+")\">"+allObjects[i].lines+"</button><br>"
          }
        }
        
      } else {
        readNext()
      }
      
    }


    
  }

}

function recordChoice(next, judgement,from){
  print(next+"  "+judgement)
  
  print('r1:'+currentLine)
  var record={}
  record.from=from
  record.judgement=judgement
  recordTable.push(record)
  print(recordTable)
  currentLine=next
  print('r2:'+currentLine)
  clear()
}

function gameCheck(chapter){
  if (chapter<2000){
    gameNumber=0
    
   
  } else if (chapter==3004){
    gameNumber=1
    var d = new Date();
    var seconds = Math.round(d.getTime() / 1000);
    firstMills=seconds
    gameShop()
  } else if (chapter==3015){
    foodChoice()
  } else if (chapter<5000){
    gameNumber=4
  } else if (chapter<6000){
    gameNumber=5
  } else if (chapter<7000){
    gameNumber=6
  } else if (chapter<8000){
    gameNumber=7
  } else if (chapter<9000){
    gameNumber=8
  }
}

function draw() {
  
  if(gameNumber==1){

    clear()
    gameShop()
  } else if(gameNumber==7) {
    clear()
    var distance = int(dist(mouseX, mouseY, manX+93,manY+178));
    if(mouseX>=manX && mouseX<=manX+196 && mouseY>=manY && mouseY<=manY+357 && mouseIsPressed==true){
      image(manPic,manX,manY)
      // fill('red')
      // // ellipse(manX+93,manY+178,100,100)
      // rect(manX,manY,196,357)
    } else {
      manX=0.3*width
      manY=0.36*height
    }

  }


    
}

function mouseWheel() {
  if(gameNumber==5){
    specialChoice=true
    readChoice()
    gameNumber=1000
  }
}


function mouseMoved(){
  var xpos=0.4*width
  var ypos=0.22*height
  if(gameNumber==0){
    if(mouseX>0.4*width && mouseX<0.6*width && mouseY>0.2*height && mouseY<0.56*height){
      cursor(HAND)
      // image(logo,xpos, ypos)
      image(logo, width/2-202,height/2-184)
      xpos=xpos+random(-1,1)


    } else{
      cursor(ARROW)
      clear()
    }
  } else if (gameNumber==4){
    var dis=int(dist(mouseX,mouseY, 0.79*width,0.89*height))
    if(dis<=20){
      cursor(HAND)
    } else {
      cursor(ARROW)
      clear()
    }



  }else if(gameNumber==6){
    if(mouseY<0.95*height){
      cursor(HAND)
    } else {
      cursor(ARROW)
      clear()
    }
  } else if(gameNumber==8){
    if(mouseY>0.7*height && mouseY<0.95*height){
      cursor(HAND)
    }else{
      cursor(ARROW)
      clear()
    }
  }


  else {
  cursor(ARROW)
  clear()
  }
}

function mousePressed(){
  specialChoice=false
   if(gameNumber==0){
    if(mouseX>0.4*width && mouseX<0.6*width && mouseY>0.2*height && mouseY<0.56*height){
      specialChoice=true
      readChoice()
      gameNumber=1000
    }
  } else if(gameNumber==4){
    if(int(dist(mouseX,mouseY, 0.79*width,0.89*height))<=20){
      specialChoice=true
      readChoice()
      gameNumber=1000
    }
  } else if(gameNumber==6){
    if(mouseY<0.95*height){
      specialChoice=true
      readChoice()
      gameNumber=1000
    }
  } else if(gameNumber==7){
    if(mouseX>=manX && mouseX<=manX+196 && mouseY>=manY && mouseY<=manY+357){
      manActive=true
      cursor(CROSS)
    } else {
      manActive=false
      cursor(ARROW)
    }
  } else if(gameNumber==8){
     if(mouseY>0.7*height && mouseY<0.95*height){
      specialChoice=true
      readChoice()
    }
  }

}

function mouseDragged() {
  if(gameNumber==7){
    if(manActive){
    manX=mouseX-93
    manY=mouseY-178
    if(mouseX>2*width/3 && mouseY>0.4*height){
      specialChoice=true
      readChoice()
      document.body.style.background="url(image/7-2.png)"
        document.body.style.backgroundSize="cover"
        document.body.style.backgroundRepeat = "no-repeat";
      gameNumber=1000
      }
    }
  }
  return false

}

function gameShop(){
  if(gameNumber==1){
  var d = new Date();
  var seconds = Math.round(d.getTime() / 1000);
  lastMills=seconds
  document.getElementById("story").innerHTML="Get as many yellow stars as you can!"
  // text(myMills,10,30)
  // text(mySecond,10,60)
  // text(secondMillis,10,90)
  // text(firstMills,10,120)
  // text(mySecond*1000+myMills,10,150)
  // text(firstMills-(mySecond*1000+myMills),10,180)
  // text(seconds,10,270)
  text((10-(lastMills-firstMills))+"s",20,30)


  if(lastMills-firstMills<10){
    for (var myDot of dotlocs) {
      var d = int(dist(myDot.x, myDot.y, mouseX, mouseY));
            if (d < 10 && mouseIsPressed==true) {
                fill('blue')
                cursor(HAND);
                myDot.update()
                if(myDot.color=='yellow'){scoreShop++}
                

              } else {
                fill(myDot.color)
                cursor(ARROW);
              }
              myDot.display()
              //ellipse(myDot.x,myDot.y,20,20)
     }
  } else{
    currentLine=3005
    readChoice()
    for (var i=0; i < 20;i++) {
        for (var j=0; j < 10;j++) {

        var x = random(10,width-10)
        var y = random(10,height/2-10)
        var hello = "Hello I am a j " + j;
        dotlocs.push(new Dots(x,y,hello))

      }
    }
  }
  }

  print('gameshop:'+currentLine)
  
}



function Dots(xpos,ypos,hellos) {
  var words = ['yellow', 'black'];
  var word = random(words)
  this.x = xpos
  this.y = ypos
  this.hello = hellos
  this.moving = false
  this.color = word
  this.update = function() {
    if (this.moving == false) {
      this.moving = true
    }
  }

}

Dots.prototype.display = function() {
    if (this.moving) {
      this.x += xspeed
    }
      var angle = TWO_PI / 5;
      var halfAngle = angle/2.0;
      beginShape();
      for (var a = 0; a < TWO_PI; a += angle) {
        var sx = this.x + cos(a) * 10;
        var sy = this.y + sin(a) * 10;
        vertex(sx, sy);
        sx = this.x + cos(a+halfAngle) * 5;
        sy = this.y + sin(a+halfAngle) * 5;
        vertex(sx, sy);
      }
      endShape(CLOSE);



    this.y=this.y+1

  }
function foodChoice(){
  if(scoreShop>0 && scoreShop<=2){
    document.getElementById("story").innerHTML+="<button type=\"button\" onclick=\"recordChoice("+allObjects[81].to+","+allObjects[81].judgement+")\">"+allObjects[81].lines+"</button><br>"
  } else if(scoreShop<=4){
     
    document.getElementById("story").innerHTML+="<button type=\"button\" onclick=\"recordChoice("+allObjects[82].to+","+allObjects[82].judgement+")\">"+allObjects[82].lines+"</button><br>"
  } else if(scoreShop<=6){
    
    document.getElementById("story").innerHTML+="<button type=\"button\" onclick=\"recordChoice("+allObjects[83].to+","+allObjects[83].judgement+")\">"+allObjects[83].lines+"</button><br>"
  } else if(scoreShop<=8){
    specialChoice=true
    

    document.getElementById("story").innerHTML+="<button type=\"button\" onclick=\"recordChoice("+allObjects[84].to+","+allObjects[84].judgement+")\">"+allObjects[84].lines+"</button><br>"
  }
  specialChoice=true

}


function readJudge(){
  clear()
  print('current:'+currentLine)
  for(var i=0;i<allObjects.length;i++){
    if (allObjects[i].id==currentLine){
      //background image
        document.body.style.background="url(image/"+allObjects[i].image+")"
        document.body.style.backgroundSize="cover"
        document.body.style.backgroundRepeat = "no-repeat";
        //font color: male or female
        if(allObjects[i].speaker=="g"){
          document.getElementById("story").style.color="black"
        } else if(allObjects[i].speaker=="m"){
          document.getElementById("story").style.color="#3da7ff"
        } else if(allObjects[i].speaker=="f"){
          document.getElementById("story").style.color="#e884d5"
        }
        //text
      if(allObjects[i].category=="text"){
        document.getElementById("story").style.color="black"
        document.getElementById("story").innerHTML=allObjects[i].lines
        currentLine=allObjects[i].to
        print(currentLine)
        break
      } else if (allObjects[i].category=="end"){
        //end
        document.getElementById("story").style.color="#660066"
          print('check ends')
          if(score==8){
              document.getElementById("story").innerHTML=allObjects[172].lines
              document.body.style.background="url(image/9-4.png)"
              document.body.style.backgroundSize="cover"
              document.body.style.backgroundRepeat = "no-repeat";
              currentLine=allObjects[172].to
          } else if(score<8 && score>=4){
              document.getElementById("story").innerHTML=allObjects[169].lines
              document.body.style.background="url(image/9-3.png)"
              document.body.style.backgroundSize="cover"
              document.body.style.backgroundRepeat = "no-repeat";
              currentLine=allObjects[169].to
          } else if(score<4){
              document.getElementById("story").innerHTML=allObjects[163].lines
              document.body.style.background="url(image/9-2.png)"
              document.body.style.backgroundSize="cover"
              document.body.style.backgroundRepeat = "no-repeat";
              currentLine=allObjects[163].to
          }
        print(currentLine)
        break
        

      } else {
        var arrays=[]
        for(var m=0;m<allObjects.length;m++){
          if(allObjects[m].id==currentLine){
            arrays.push(allObjects[m])
          }
        }
        for(var n=0;n<arrays.length;n++){
          for(var j=0;j<recordTable.length;j++){
          if (recordTable[j].from==arrays[n].category){
            print(recordTable[j].judgement)
            if(recordTable[j].judgement){
              print("HERE");
              print(arrays[n].speaker)
              if(arrays[n].speaker=="good" ){
                score++
                print("bad1")
                print("current Score:"+score)
                document.getElementById("story").style.color="#009933"
                document.getElementById("story").innerHTML=arrays[n].lines
                currentLine=arrays[n].to
          
              }
            } else {
              if(arrays[n].speaker=="bad"){
                print("bad2")
                document.getElementById("story").style.color="#cc0000"
                document.getElementById("story").innerHTML=arrays[n].lines
                currentLine=arrays[n].to
              }
            }
            
          }
          
        }
        }
        print(currentLine)
          break


      
      }
      
      
      }
      
    } 
  

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}





