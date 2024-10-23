function countSecond() {

  const s = document.querySelector('.second');
  const m = document.querySelector('.minute');
  const h = document.querySelector('.hour');
  
  let hour = 0;
  let minute = 0;
  let second = 0;
  
  setInterval(() => {
    second += 1;
    if (second === 60) {
      second = 1;
      minute += 1;
    }

    if (minute === 60) {
        minute = 0;
        hour += 1;
      }

    if (hour === 12) {
      hour = 1;
    }  

  s.innerText = second;
  m.innerText = minute;
  h.innerText = hour;

  }, 1000);  

  
}
countSecond();