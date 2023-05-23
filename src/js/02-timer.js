<<<<<<< Updated upstream
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
=======

import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  input: document.getElementById('datetime-picker'),
  btnStart: document.querySelector('[data-start]'),
>>>>>>> Stashed changes
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

<<<<<<< Updated upstream

let userSelectedDate = null;
let userDefaultDate = null;
let intervalId = null;


refs.startBtn.setAttribute('disabled', true);
=======
let userSelectedDate = null;
let userCurrentDate = null;
let intervalId = null;

refs.btnStart.setAttribute('disabled', true);
>>>>>>> Stashed changes

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() <= options.defaultDate.getTime()) {
<<<<<<< Updated upstream
      Notiflix.Notify.failure('Please choose a date in the future');
      refs.startBtn.disabled = true;
      return;
    } else {
      refs.startBtn.disabled = false;
      const setTimer = () => {
        userSelectedDate = selectedDates[0].getTime();
        timer.start();
      }
      refs.startBtn.addEventListener('click', setTimer);      
    }
  }
};
=======
      Notiflix.Notify.failure('Please choose a date in future');
      refs.btnStart.disabled = true;
      return;
    } else {
      refs.btnStart.disabled = false;

      const setTimer = () => {
        userSelectedDate = selectedDates[0].getTime();
        timer.start();
      };
      refs.btnStart.addEventListener('click', setTimer);
    }
  },
};

>>>>>>> Stashed changes
flatpickr('#datetime-picker', options);

const timer = {
  start() {
    intervalId = setInterval(() => {
<<<<<<< Updated upstream
      userDefaultDate = Date.now();
      const deltaTime = userSelectedDate - userDefaultDate;

      if (deltaTime <= 0) {
        this.stop();
        Notiflix.Report.success('Дія лічильника скінчилась', 'Оберіть нову дату та час', 'ОК');
        return;
      }

      refs.startBtn.disabled = true;
=======
      userCurrentDate = Date.now();
      const deltaTime = userSelectedDate - userCurrentDate;

      if (deltaTime <= 0) {
        this.stop();
        Notiflix.Report.success('Action timer is end! Choose new date!');
        return;
      }

      refs.btnStart.disabled = true;

>>>>>>> Stashed changes
      const { days, hours, minutes, seconds } = convertMs(deltaTime);
      refs.days.textContent = days;
      refs.hours.textContent = hours;
      refs.minutes.textContent = minutes;
      refs.seconds.textContent = seconds;
    }, 1000);
  },
<<<<<<< Updated upstream

  stop() {
    clearInterval(intervalId);
    refs.startBtn.disabled = true;    
    intervalId = null;
  },    
};

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(
      Math.floor(((ms % day) % hour) / minute)
    );
    // Remaining seconds
    const seconds = addLeadingZero(
      Math.floor((((ms % day) % hour) % minute) / second)
    );

    return { days, hours, minutes, seconds };
};
=======
  stop() {
    clearInterval(intervalId);
    refs.btnStart.disabled = false;
    intervalId = null;
  },
};

function padNumber(value) {
    return String(value).padStart(2, '0');
  }

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = padNumber(Math.floor(ms / day));
  // Remaining hours
  const hours = padNumber(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = padNumber(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = padNumber(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}


>>>>>>> Stashed changes
