function countSecond() {

  const s = document.querySelector('.second');
  const m = document.querySelector('.minute');
  const h = document.querySelector('.hour');

  let hour = Number(h.value);
  let minute = Number(m.value);
  let second =  Number(s.value);
  
  setInterval(() => {
    second += 1;
    if (second === 60) {
      second = 0;
      minute += 1;
    }

    if (minute === 60) {
        minute = 0;
        hour += 1;
      }

    if (hour === 12 && minute === 60) {
      hour = 1;
    }  

  s.value = second + 's';
  m.value = minute + 'm';
  h.value = hour + 'h';

  }, 1000);
  

  
}
countSecond();