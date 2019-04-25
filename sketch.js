
var n;
var realn;
var grid;


var sli;
var canv;


document.body.style.backgroundColor = "rgb(20,20,20)";

function preload() {
}

function setup() {

  canv = createCanvas(500,500);
  canv.style("display","block");
  canv.style("margin","0 auto");
  canv.style("marginTop","100px");
  canv.style("border","10px solid rgb(150,150,150)");

  createP("");
  
  sli = createSlider(2,501,2);
  sli.style("display","block");
  sli.style("margin","0 auto");
}

function draw() {

    background(200);

    n = sli.value()*2;
    realn = (n - 2)/2;
    grid = width/n;




    if (realn <= 45) {
      for (let i = 1; i < n ; i ++) {
        strokeWeight(1)
        stroke(150,150,150,255-6*realn);
        line(i*grid,grid,i*grid,height-grid);
        line(grid,i*grid,width-grid,i*grid);

      }

    push();

    fill(0,0,0,255);
    strokeWeight(3);
    stroke(0);
    line(width/2,height/2,(width/2)+(realn*grid),height/2);

    pop();

    for (let x = 1; x < n; x++) {
        for (let y = 1; y < n; y++) {

          fill(255,0,0,255-6*realn);
          circle(x*grid,y*grid,50/n);
        }
      }
  }
  else {

    push();

    fill(0,0,0,255);
    strokeWeight(3);
    stroke(0);
    line(width/2,height/2,(width/2)+(realn*grid),height/2);

    pop();

  }

    push();


    translate(width/2, height/2);

    fill(0);
    strokeWeight(0);
    textSize(25);
    text(realn,((realn/2)*grid) - 10,-5);


    noFill();
    strokeWeight(3);
    stroke(0);
    circle(0,0,grid*((n/2)-1));

    pop();

    pi = approxPi(realn);

    fill(255);
    strokeWeight(3);
    stroke(0);
    textSize(30);
    text("π " + roundTo(pi,5), width-100,height -15);

}

function approxPi(n) {

  this.n = n;
  this.allpoints = (2*this.n+1)*(2*this.n+1);
  this.pointsincircle = 0;
  this.pi;


  for (let x = -n; x <= n; x++) {
    for (let y = -n; y <= n; y++) {
      if(x*x + y*y <= n*n) {
        this.pointsincircle = this.pointsincircle + 1;
      }
    }
  }


  this.pi = (this.pointsincircle/this.allpoints)*4;

  return this.pi;

}

function roundTo(n, digits) {
    var negative = false;
    if (digits === undefined) {
        digits = 0;
    }
        if( n < 0) {
        negative = true;
      n = n * -1;
    }
    var multiplicator = Math.pow(10, digits);
    n = parseFloat((n * multiplicator).toFixed(11));
    n = (Math.round(n) / multiplicator).toFixed(2);
    if( negative ) {
        n = (n * -1).toFixed(2);
    }
    return n;
}
