const getRandomHexColor = function () {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

let intervalId = null;

const WHITE_BODY_COLOR = '#ffffff';

const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};

refs.btnStart.addEventListener('click', onBtnStartClick);
refs.btnStop.addEventListener('click', onBtnStopClick);

function onBtnStartClick() {
  if (!refs.btnStart.disabled) {
    intervalId = setInterval(
      () => (refs.body.style.backgroundColor = getRandomHexColor()),
      1000
    );
  }
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;
}

function onBtnStopClick() {
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;

  clearInterval(intervalId);
}
