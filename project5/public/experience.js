window.onload = () => {
  let dialogue = [
    "hey, did you even read? tea reading is literally to be done by oneself.",
    "you people these days, cant even take a little time to do something",
    "are you scared that you wont be able to do it right or what? there is really no pressure",
    "...",
    "is that really all you have to say, can you say something different for the love of god",
    "yea... obviously you would just say that. ok lets just do this my way then ok?",
    "just sit tight ok, i will go pour you a cup."
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

  //button to get to next page
  nextBtn.addEventListener("click", () => {
    if (typing) return;

    index++;

    if (index < dialogue.length) {
      typeLine(dialogue[index]);
    } else {
      textBox.textContent = "tea?";
      nextBtn.textContent = "ok";
      nextBtn.onclick = () => {
      window.location.href = "/relax";  
    };
    }
  });
};
