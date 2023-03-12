let punkti = 0;   
let diameter = 200;
let fontSize = 32;

function OnButtonClick(){
    diameter -= 5;
    fontSize -=1;

    document.getElementById('button').style.width = diameter + "px";
    document.getElementById('button').style.height = diameter + "px";
    document.getElementById('button').style.fontSize = fontSize + "px";
    document.getElementById('button').innerHTML = "";
    if (diameter <= 5) {
      document.getElementById("score").innerHTML = "You won!";
    } else {
      punkti += 1;
      document.getElementById("score").innerHTML = punkti;
      document.getElementById("button").style.backgroundColor = randomColors();
    }
    
}

  
  function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
