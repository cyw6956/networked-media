window.onload = () => {
    let readyButton = document.getElementById("start-bttn");
    let modal = document.getElementById("intro-modal");

    document.body.style.backgroundColor = "000000";

    readyButton.onclick = () => {
        document.body.style.backgroundColor = "white";
        modal.style.display = "none";
    }
}