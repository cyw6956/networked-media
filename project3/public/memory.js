colors = ["ff595e", "ff924c", "ffca3a", "8ac926", "1982c4", "6a4c93", "000000", "cccccc"];

window.onload = () => {
  //getting the html elements
  let introBttn = document.getElementById("start-bttn");
  let modal = document.getElementById("intro-modal");
  let color = document.getElementById("assigned-color");

  document.body.style.backgroundColor = "37517a";

  introBttn.onclick = () => {
    bgcolor = randInt(0, colors.length-1);
    selectedColor = colors[bgcolor];
    document.body.style.backgroundColor= selectedColor;
    modal.style.display = "none";
    color.setAttribute("value", selectedColor);
  }
  
}

function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}