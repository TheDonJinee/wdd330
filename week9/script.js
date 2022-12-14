const keyboardKeys = document.querySelectorAll('.key');

  keyboardKeys.forEach(keyboardKey => keyboardKey.addEventListener('click', function() {
    let btnClicked = this.firstElementChild.innerHTML.toLowerCase()
    playAndAnimate(btnClicked)
  }))

  document.addEventListener('keypress', function(e) {
    let keyPressed = e.key.toLowerCase();
    playAndAnimate(keyPressed)
  })

  function playAndAnimate(key) {
    switch (key) {
      case `a`:
        playKit(key);
        addAnimation(key)
        break
      case `s`:
        playKit(key);
        addAnimation(key)
        break
      case `d`:
        playKit(key);
        addAnimation(key)
        break
      case `f`:
        playKit(key);
        addAnimation(key)
        break
      case `g`:
        playKit(key);
        addAnimation(key)
        break
      case `h`:
        playKit(key);
        addAnimation(key)
        break
      case `j`:
        playKit(key);
        addAnimation(key)
        break
      case `k`:
        playKit(key);
        addAnimation(key)
        break
      case `l`:
        playKit(key);
        addAnimation(key)
        break
      default:
        console.log(key)
    }
  }

  function playKit(key) {
      let sound = document.querySelector(`audio.${key.toLowerCase()}`);
      sound.currentTime = 0
      sound.play()
  }

  function addAnimation(aKey) {
    let btn = document.querySelector(`.key#${aKey}`);
    btn.classList.add('playing')
    setTimeout(function () {
      btn.classList.remove('playing')
    }, 100)
  }