const video = document.getElementById('video');
const playBtn = document.getElementById('play-btn');

playBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playBtn.innerHTML = '<img src="images/pause-circle.svg" alt="Pause Icon">';
  } else {
    video.pause();
    playBtn.innerHTML = '<img src="images/stop-circle.svg" alt="Stop Icon">';
  }
});