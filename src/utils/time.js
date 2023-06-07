import { ref, onMounted, onUnmounted } from "vue";

export function zeropad(s) {
  return ("" + s).padStart(2, "0");
}

export function renderDate(date) {
  return renderRawDate(date.getFullYear(), date.getMonth(), date.getDate());
}

export function renderTime(date) {
  return renderRawTime(date.getHours(), date.getMinutes());
}

// renderRawDate renders a given year, month, and day as YYYY-MM-DD
export function renderRawDate(year, month, day) {
  return [year, zeropad(month), zeropad(day)].join('-');
}

// renderRawTime renders a given hour (from 0 to 23) and minutes (from 0 to 59)
// as a time like '04:56am' or '11:23pm'
export function renderRawTime(hour, minutes) {
  let period = 'am';
  if (hour >= 12) {
    period = 'pm';
    hour -= 12;
  }
  if (hour == 0) hour = '12';
  hour = zeropad(hour);

  minutes = zeropad(minutes);

  return `${hour}:${minutes}${period}`;
}

export function useClock(updateInterval = 1000) {
  const displayDate = ref('');
  const displayTime = ref('');
  let intervalId;

  function update() {
    let date = new Date();
    displayDate.value = renderDate(date);
    displayTime.value = renderTime(date);
  }

  onMounted(() => {
    update();
    intervalId = setInterval(update, updateInterval);
  });

  onUnmounted(() => clearInterval(intervalId));

  return {date: displayDate, time: displayTime};
}