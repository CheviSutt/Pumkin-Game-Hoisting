


var gametitle = "Pumpkin Game";
var pumpkinpatch = "";
var numpumpkins = 0;
document.getElementById("title").innerHTML = gametitle;


function addPumpkin(event) {
    let bgMusic = new Audio('Double_Helix_Sting.mp3');
    bgMusic.play();
    //let bgmusic was added for fun
    var randomPumpkin = Math.floor((Math.random() * 4) + 1);
    var xAdjust = 360;
    var yAdjust = 8;
    var x = event.clientX - xAdjust;
    var y = event.clientY + yAdjust;
    pumpkinpatch += "<div class='pumpkin" + randomPumpkin + "' style='left: " + x + "px; top:" + y + "px;'></div>";
    document.getElementById("container").innerHTML = pumpkinpatch;
    numpumpkins ++;
    document.getElementById("numbertitle").innerHTML = numpumpkins;
}

//let bgMusic = new Audio('Double_Helix_Sting.mp3');
//bgMusic.play();



// ignore the code down here, it is Jquery.
$("#container").mousemove(function(e){
    $('.follow').css({'top': e.clientY + 20, 'left': e.clientX - 50});
});