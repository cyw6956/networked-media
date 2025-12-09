window.onload = () => {
  let textBox = document.getElementById("dialogue-text");
  let nextBtn = document.getElementById("next-btn");

  textBox.style.display = "none";
  nextBtn.style.display = "none";

  let imageCount = Math.floor(Math.random() * 10) + 5;
  let imageURL = ["tealeaf1.png", "tealeaf2.png", "tealeaf3.png"];
  let cup = document.getElementById("cup");
  let radius = cup.clientWidth / 2;

  // getting a random point
  function randomPointInCup() {
    let x, y;
    do {
      x = Math.random() * cup.clientWidth;
      y = Math.random() * cup.clientHeight;
      // Check distance from center
    } while ((x - radius) ** 2 + (y - radius) ** 2 > radius ** 2);
    return { x, y };
  }

  // spawn the leaves
  let leafInterval = setInterval(() => {
    for (let i = 0; i < imageCount; i++) {
      const img = document.createElement("img");
      img.src = imageURL[Math.floor(Math.random() * 3)];
      img.className = "leaf";

      let { x, y } = randomPointInCup();
      let rotation = Math.floor(Math.random() * 360);

      img.style.left = `${x - 20}px`;
      img.style.top = `${y - 20}px`;
      img.style.transform = `rotate(${rotation}deg)`;

      cup.appendChild(img);
    }
  }, 2000);

  setTimeout(() => {
    clearInterval(leafInterval);
    textBox.style.display = "block";
    nextBtn.style.display = "block";
  }, 20000);

  let rotationAngle = 0;

  window.addEventListener("wheel", (event) => {
    rotationAngle += event.deltaY * 0.2;
    cup.style.transform = `rotate(${rotationAngle}deg)`;
  });
  let dialogue = [
    "you done now?",
    "youve dranken enough for the leaves to show at least, id say you are done.",
    "now, stir it three time counterclockwise",
    "...",
    "what? you don't know how to stir?",
    "oh right, you exist over there...",
    "ok ill make it easy for you, to stir, use the scroll bar...",
    "you done? alright now it is time to seek your answers, what symbols do you see in the leaves?",
    "oh right, you dont read... well symbols can really be anything that speaks to you",
    "if you had any sort of conviction i guess",
    "... they can be letters, numbers, whatever, the wall had a bunch on it.",
    "you can draw them out with your... mouse? yea try that",
    "actually, ill send it off with you to reference after.",
    "once youve finished, just leave.",
  ];

  let index = 0;
  let typing = false;

  // look like typewriter
  function typeLine(text, speed = 35) {
    typing = true;
    textBox.textContent = "";
    let i = 0;

    let typer = setInterval(() => {
      textBox.textContent += text.charAt(i);
      i++;

      if (i >= text.length) {
        clearInterval(typer);
        typing = false;
      }
    }, speed);
  }

  typeLine(dialogue[index]);

  //button for next line
  nextBtn.addEventListener("click", () => {
    if (typing) return;

    index++;

    if (index < dialogue.length) {
      typeLine(dialogue[index]);
    } else {
      textBox.textContent = "leave?";
      nextBtn.textContent = "ok";
      nextBtn.onclick = () => {
        let link = document.createElement("a");
        link.download = "reading.png";
        link.href = canvas.toDataURL("image/png");
        link.click();

        window.location.href = "/";
      };
    }
  });

  //drawing part
  let canvas = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d");

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;

  canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]; 
  });

  canvas.addEventListener("mousemove", (e) => {
    if (!isDrawing) return; 

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY); 
    ctx.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY]; 
  });

  canvas.addEventListener("mouseup", () => {
    isDrawing = false;
  });

  canvas.addEventListener("mouseout", () => {
    isDrawing = false;
  });

  ctx.strokeStyle = "#ffffffff";
  ctx.lineWidth = 2;
  ctx.lineCap = "round";
  ctx.lineJoin = "round"; 
};
