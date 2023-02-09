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
function drawHeads() {

}



function drawTails() {

}