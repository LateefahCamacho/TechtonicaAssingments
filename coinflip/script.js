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
 c.beginPath();
 c.fillStyle = color;
 c.strokeStyle = "Black";
 c.arc(xloc, yloc,100, 0 , 2* Math.PI);
 c.fill();
 c.stroke();
 c.closepath();
}



function drawTails(xloc, yloc, color) {

}