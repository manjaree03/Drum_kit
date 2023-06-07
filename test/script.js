window.addEventListener('DOMContentLoaded', function() {
    const keys = document.querySelectorAll('.key');

  
    function playSound(key) {
      const keyData = key.getAttribute('data-key');
      const audio = document.querySelector(`audio[data-key="${keyData}"]`);
      if (audio) {
        audio.currentTime = 0;
        audio.play();
      }
    }
  
    keys.forEach(function(key) {
      key.addEventListener('click', function() {
        playSound(this);
      });
    });
  
    window.addEventListener('keydown', function(e) {
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      if (key) {
        playSound(key);
      }
    });
  });
  