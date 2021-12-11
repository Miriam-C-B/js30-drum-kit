const keys = document.querySelectorAll(".key");

//function to play the sound
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // selects the audio element when a key is pressed
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //selects a css class when the key is pressed
    if (!audio) return; //stops the function from running if we press a key that isn't linked to a sound
    audio.currentTime = 0; //rewinds function to the start so it'll play a sound over and over again when you press it quickly
    audio.play();
    key.classList.add("playing");
}

//function that removes the "playing" class changes again
function removeTransition(e) {
    if(e.propertyName !== "transform") return; // skips other properties that are not important
    this.classList.remove("playing");  //this refers to the const key, because that's the one the event listener was attached to below
};

//transitionend loop that loops over all the keys to check if they have been pressed and if the class "playing" is activated
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
//event listener to listen for a key being pressed
window.addEventListener("keydown", playSound);