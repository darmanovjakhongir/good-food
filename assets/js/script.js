const video = document.getElementById("video");
const playBtn = document.getElementById("play-btn");

playBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playBtn.innerHTML =
      '<img src="./assets/images/pause-circle.svg" alt="Image">';
  } else {
    video.pause();
    playBtn.innerHTML =
      '<img src="./assets/images/stop-circle.svg" alt="Image">';
  }
});
