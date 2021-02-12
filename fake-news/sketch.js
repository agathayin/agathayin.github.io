var array2017 = [];
var array2016 = [];
var loc2017 = [];
var loc2016 = [];
var table
var table2
var canvas
var hover=false
var url



function preload() {
  table = loadTable("data/2017.csv", "csv");
  table2 = loadTable("data/top_2016.csv", "csv");
}

function setup() {
  canvas = createCanvas(3000, 3000);
  line(0,windowHeight/2,windowWidth,windowHeight/2);
  
//data 2017
  for (var i = 0; i < table.getRowCount(); i++) {
       var csvObject = new Object;
       csvObject.title = table.getString(i, 0);
       csvObject.url = table.getString(i, 1);
       csvObject.engagement = Number(table.getString(i, 3));
       csvObject.response = Number(table.getString(i, 10));
       csvObject.category = table.getString(i, 5);
       array2017.push(csvObject)
     }
print(array2017)
//location 2017
  for (var i = 0; i < 51; i++) {
      var location = new Object;
      location.x1=i*40;
      location.x2=i*40+30;
      var engagement = array2017[i].engagement;
      var enValue = map (engagement, 184897,1204400, 0,windowHeight/2-100);
      location.h=enValue
      loc2017.push(location);
     }
print(loc2017);

//data 2016
  for (var i = 0; i < table2.getRowCount(); i++) {
       var csvObject2 = new Object;
       csvObject2.title = table2.getString(i, 0);
       csvObject2.url = table2.getString(i, 1);
       csvObject2.engagement = Number(table2.getString(i, 4));
       csvObject2.response = Number(table2.getString(i, 10));
       csvObject2.category = table2.getString(i, 5);
       array2016.push(csvObject2)
     }
print(array2016)

//location 2016
  for (var i = 0; i < 51; i++) {
      var location = new Object;
      location.x1=i*40;
      location.x2=i*40+30;
      var engagement = array2016[i].engagement;
      var enValue = map (engagement, 184897,1204400, 0,windowHeight/2-100);
      location.h=enValue
      loc2016.push(location);
     }
print(loc2016);

noFill();

}

function draw() {
background("white")
  foundation();
  chart2017();
  chart2016();
  res2017();
  res2016();
  stroke(255);
  strokeWeight(3);
  line(0,windowHeight/2,windowWidth,windowHeight/2);
  
// functions

 //ruler
  stroke(139,139,139);
  strokeWeight(1);
  line(0,mouseY,3000,mouseY);
  line(0,windowHeight-mouseY,3000,windowHeight-mouseY);
//show titles  
  fill(0);
  for (var i =1; i <51; i++){
      if(mouseY<windowHeight/2 && mouseY>windowHeight/2-loc2017[i].h && mouseX>loc2017[i].x1 && mouseX<loc2017[i].x2){
    textAlign(CENTER);
    fill("gray");
    text("Headline:",windowWidth/2,80);
    text(array2017[i].title,windowWidth/2,100);
    fill(0);
    textAlign(LEFT);
    text("Click to link to the fake news",20,20);
    text("fake news VS fact checking",loc2017[i].x1-20,windowHeight/2-loc2017[i].h-30);
    text(array2017[i].engagement+" vs "+array2017[i].response,loc2017[i].x1-5,windowHeight/2-loc2017[i].h-10);
    hover=true;
    url=array2017[i].url;
    }
  else if (mouseY>windowHeight/2 && mouseY<windowHeight/2+loc2016[i].h && mouseX>loc2016[i].x1 && mouseX<loc2016[i].x2){
    textAlign(CENTER);
    fill("gray");
    text("Headline:",windowWidth/2,80);
    text(array2016[i].title,windowWidth/2,100);
    fill(0);
    textAlign(LEFT);
    text("Click to link to the fake news",20,20);
    text("fake news VS fact checking",loc2016[i].x1-20,windowHeight/2+loc2016[i].h+30);
    text(array2016[i].engagement+" vs "+array2016[i].response,loc2016[i].x1-5,windowHeight/2+loc2016[i].h+15);
    hover=true;
    url=array2016[i].url;
    }
  }
}

function mousePressed() {
  // if (hover){
  //   window.open(url);
  // }
   for (var i =1; i <51; i++){
      if(mouseY<windowHeight/2 && mouseY>windowHeight/2-loc2017[i].h && mouseX>loc2017[i].x1 && mouseX<loc2017[i].x2){
        window.open(url);
      }
      else if (mouseY>windowHeight/2 && mouseY<windowHeight/2+loc2016[i].h && mouseX>loc2016[i].x1 && mouseX<loc2016[i].x2){
        window.open(url)
        }
    }
}

 



//bars 2017
function chart2017(){
  noStroke();
  var max =1204400;
  var min = 184897;
  var maxHeight = 500;
  var width = 30;
  var margin = 40;
  var ypoint = windowHeight/2;
  var colorCategory
  push();
  for (var i=1; i < 51; i++){
    //color
    if (array2017[i].category=="Music"){colorCategory = color(246,253,240)}
      else if (array2017[i].category=="Religion"){colorCategory = color(219,244,219)}
        else if (array2017[i].category=="Sexuality"){colorCategory = color(196,237,196)}
          else if (array2017[i].category=="Business"){colorCategory = color(155,222,180)}
            else if (array2017[i].category=="Race"){colorCategory = color(104,204,196)}
              else if (array2017[i].category=="Medical"){colorCategory = color(50,176,209)}
                else if (array2017[i].category=="World"){colorCategory = color(0,136,187)}
                  else if (array2017[i].category=="Politics"){colorCategory = color(0,99,169)}
                    else if (array2017[i].category=="Crime"){colorCategory = color(5,60,127)}
                      else {colorCategory = color(0,0,0)};

    //bar chart
    fill(colorCategory);
    push();
    translate(margin*i,0);
    var engagement = array2017[i].engagement;
    var enValue = map (engagement, min,max, 0,windowHeight/2-100);
    rect(0, ypoint, width, -enValue);

    fill("black");
    // textSize(8);
    // text(engagement,-1,ypoint-enValue-3);

    
    pop();
    }

  pop();

}

function chart2016(){
  var max =1204400;
  var min = 184897;
  var maxHeight = 500;
  var width = 30;
  var margin = 40;
  var ypoint = windowHeight/2;
  var colorCategory
  push();
  for (var i=1; i < 51; i++){
     //color
    
    push();
    
    translate(margin*i,0);
    var engagement = array2016[i].engagement;
    //color ?
    if (array2016[i].category=="Music"){colorCategory = color(246,253,240)}
      else if (array2016[i].category=="Religion"){colorCategory = color(219,244,219)}
        else if (array2016[i].category=="Sexuality"){colorCategory = color(196,237,196)}
          else if (array2016[i].category=="Business"){colorCategory = color(155,222,180)}
            else if (array2016[i].category=="Race"){colorCategory = color(104,204,196)}
              else if (array2016[i].category=="Medical"){colorCategory = color(50,176,209)}
                else if (array2016[i].category=="World"){colorCategory = color(0,136,187)}
                  else if (array2016[i].category=="Politics"){colorCategory = color(0,99,169)}
                    else if (array2016[i].category=="Crime"){colorCategory = color(5,60,127)}
                      else {colorCategory = color(0,0,0)};
    var enValue = map (engagement, min,max, 0,windowHeight/2-100);
    fill(colorCategory);
    rect(0, ypoint, width, enValue);
    fill("black");
    // textSize(8);
    // text(engagement,-1,ypoint+enValue+13);
    
    pop();
    }
  pop();

}


  function res2017(){
    noStroke();
    var from
    var to
    var colorRes
  
    push();
    for (var i=1; i < 51; i++){
    //color
    var res=array2017[i].response;
    var resValue = map (res,0,100,0,1);
    if (res<100){
      from = color(0,0,0);
      to = color(255,0,0);
      colorRes=lerpColor(from,to,resValue);
    }
    else if(res>100 && res<5000){
      from = color(255,0,0);
      to = color(255,69,0);
      colorRes=lerpColor(from,to,resValue);
    }
    else if(res>5000){
      rom = color(255,69,0);
      to = color(255,215,0);
      colorRes=lerpColor(from,to,resValue);
    }
    

      noFill();
      
      
  
      
      strokeWeight(5);
      stroke(colorRes)
     
      line(loc2017[i].x2,windowHeight/2,loc2017[i].x2,windowHeight/2-loc2017[i].h+2)


    }

    pop();
  };

  function res2016(){
    noStroke();
  
    push();
    for (var i=1; i < 51; i++){
    //color
      noFill();
      var res=array2016[i].response;
    var resValue = map (res,0,100,0,1);
    if (res<100){
      from = color(0,0,0);
      to = color(255,0,0);
      colorRes=lerpColor(from,to,resValue);
    }
    else if(res>100 && res<5000){
      from = color(255,0,0);
      to = color(255,69,0);
      colorRes=lerpColor(from,to,resValue);
    }
    else if(res>5000){
      rom = color(255,69,0);
      to = color(255,215,0);
      colorRes=lerpColor(from,to,resValue);
    }
      strokeWeight(5);
      stroke(colorRes)
     
      line(loc2016[i].x2,windowHeight/2,loc2016[i].x2,windowHeight/2+loc2016[i].h-2)
      strokeWeight(1);
      // text(res2, loc2016[i].x2,windowHeight/2+loc2016[i].h-2)


    }

    pop();
  };


function foundation(){
  push();
  textAlign(CENTER);
  textSize(24);
  text("Fake News",windowWidth/2,30)
  textSize(12);
  text("How many people have spread fake news and its fact checking",windowWidth/2,60);
  fill(0);
  text("Year 2017",10,windowHeight/4,25,windowHeight/4+10)
  text("Year 2016",10,3*windowHeight/4,25,3*windowHeight/4+10)
  text("News Category",windowWidth-210,60)
  textAlign(RIGHT);
  text("Music",windowWidth-200,90);
  text("Religion",windowWidth-200,120);
  text("Sexuality",windowWidth-200,150);
  text("Business",windowWidth-200,180);
  text("Race",windowWidth-200,210);
  text("Medical",windowWidth-200,240);
  text("World",windowWidth-200,270);
  text("Politics",windowWidth-200,300);
  text("Crime",windowWidth-200,330);
  noStroke();
  fill(246,253,240);
  rect(windowWidth-200+10,90-10,10,10)
  fill(219,244,219);
  rect(windowWidth-200+10,120-10,10,10)
  fill(196,237,196);
  rect(windowWidth-200+10,150-10,10,10)
  fill(155,222,180);
  rect(windowWidth-200+10,180-10,10,10)
  fill(104,204,196);
  rect(windowWidth-200+10,210-10,10,10)
  fill(50,176,209);
  rect(windowWidth-200+10,240-10,10,10)
  fill(0,136,187);
  rect(windowWidth-200+10,270-10,10,10)
  fill(0,99,169);
  rect(windowWidth-200+10,300-10,10,10)
  fill(5,60,127);
  rect(windowWidth-200+10,330-10,10,10)

  //line
  stroke(0);
  strokeWeight(0.5);
  textAlign(CENTER);
  fill(0);
  text("Fact Checking",windowWidth-95,45)
  text("Color Scale",windowWidth-95,60)
  textAlign(LEFT);
  strokeWeight(1);
  text("— 0",windowWidth-100+2,80+5);
  for (var i=80;i<=80+50;i++){
    var inter = map(i,80,130,0,1);
    var c=lerpColor(color(0,0,0),color(255,0,0),inter);
    stroke(c)
    line(windowWidth-100,i,windowWidth-100+5,i);
  }
  text("— 100",windowWidth-100+2,130+5);
  for (var i=130;i<=130+100;i++){
    var inter = map(i,130,230,0,1);
    var c=lerpColor(color(255,0,0),color(255,69,0),inter);
    stroke(c)
    line(windowWidth-100,i,windowWidth-100+5,i);
  }
  text("— 5000",windowWidth-100+2,230+5);
  for (var i=230;i<=230+100;i++){
    var inter = map(i,230,330,0,1);
    var c=lerpColor(color(255,69,0),color(255,215,0),inter);
    stroke(c)
    line(windowWidth-100,i,windowWidth-100+5,i);
  }
  text("— 5000",windowWidth-100+2,330+5);




  pop();
}