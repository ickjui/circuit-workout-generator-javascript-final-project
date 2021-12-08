function startTimer(duration, display) {
  let timer = duration, minutes, seconds;
    setInterval(function () {
      minutes = Math.floor(timer / 60, 10);
      seconds = Math.floor(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer === 1) {
        {document.querySelector("#timer-text").innerHTML = "Way to go! 💪  "}
          {const btn = document.createElement("button");
            btn.innerHTML = "Go again?";
            document.querySelector('#timer-text').appendChild(btn);
            btn.addEventListener('click', function(){location.reload();})
            alert ("You did it!");
          }}
// I have this set to run very quickly for demo purposes!
  }, 100);
}

window.onkeydown = function () {
  let sevenMinutes = 60 * 7,
    display = document.querySelector('#time');
  startTimer(sevenMinutes, display);
};
