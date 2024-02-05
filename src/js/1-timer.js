import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const datetimePicker = document.getElementById("datetime-picker");
const startButton = document.querySelector('[data-start]');
const timerFields = document.querySelectorAll('.timer [data-days], .timer [data-hours], .timer [data-minutes], .timer [data-seconds]');

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];

    if (userSelectedDate < new Date()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
};

flatpickr("#datetime-picker", options);

startButton.addEventListener('click', startTimer);

function startTimer() {
  startButton.disabled = true;
  datetimePicker.disabled = true;

  const intervalId = setInterval(updateTimer, 1000);

  function updateTimer() {
    const timeRemaining = userSelectedDate - new Date();
    const { days, hours, minutes, seconds } = convertMs(timeRemaining);

    timerFields[0].textContent = addLeadingZero(days);
    timerFields[1].textContent = addLeadingZero(hours);
    timerFields[2].textContent = addLeadingZero(minutes);
    timerFields[3].textContent = addLeadingZero(seconds);

    if (timeRemaining <= 0) {
      clearInterval(intervalId);
      iziToast.success({
        title: 'Countdown Finished',
        message: 'The countdown has reached the end!',
      });
      startButton.disabled = false;
      datetimePicker.disabled = false;
    }
  }
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

