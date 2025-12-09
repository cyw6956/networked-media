window.onload = () =>{
    let dialogue = [
    "ok see here, ive made you a cup",
    "take your time drinking it ok?",
    "i dont wanna see you tryna go someplace else to get done quicker or something. you should at least do this much for yourself",
    "...",
    "remember to be thinking about what you want to be answered while drinking.",
    "ill leave you to it then."
  ];

  let index = 0;
  let textBox = document.getElementById("dialogue-text");
  let nextBtn = document.getElementById("next-btn");
  let typing = false; 

  // look like typewriter
  function typeLine(text, speed = 35) {
    typing = true;
    textBox.textContent = "";
    let i = 0;

    const typer = setInterval(() => {
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
      textBox.textContent = "start drinking?";
      nextBtn.textContent = "ok";
      nextBtn.onclick = () => {
      window.location.href = "/sip";  
    };
    }
  });
}