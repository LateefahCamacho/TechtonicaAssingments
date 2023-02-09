function flipCoin(){
    let flip = Math.floor(Math.random() * 2)
    console.log(flip);

    if(flip === 0 ) {
        drawHeads(200 , 200, "gold");
    }
    else {
        drawTails(400, 400 , "silver");
    }
}
function drawHeads(xloc, yloc, color) {
 c.clearRec(0, 0, W, H);  
 c.beginPath();
 c.fillStyle = color;
 c.strokeStyle = "Black";
 c.arc(xloc, yloc,100, 0 , 2* Math.PI);
 c.fill();
 c.stroke();
 c.closepath();
 // Draw Black H on the coin
  c.fillStyle = "black";
  c.font = "72px Arial";
  c.fillText("H", xLoc, yLoc);
}



function drawTails(xloc, yloc, color) {
    c.clearRec(0, 0, W, H);
    c.beginPath();
    c.fillStyle = color;
    c.strokeStyle = "Black";
    c.arc(xloc, yloc,100, 0 , 2* Math.PI);
    c.fill();
    c.stroke();
    c.closepath();
    // Draw Black H on the coin
     c.fillStyle = "black";
     c.font = "72px Arial";
     c.fillText("T", xLoc, yLoc);
}