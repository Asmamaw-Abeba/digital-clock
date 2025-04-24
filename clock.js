// function countSecond() {

//   const s = document.querySelector('.second');
//   const m = document.querySelector('.minute');
//   const h = document.querySelector('.hour');

//   let hour = Number(h.value);
//   let minute = Number(m.value);
//   let second =  Number(s.value);
  
//   setInterval(() => {
//     second += 1;
//     if (second === 60) {
//       second = 0;
//       minute += 1;
//     }

//     if (minute === 60) {
//         minute = 0;
//         hour += 1;
//       }

//     if (hour === 12 && minute === 60) {
//       hour = 1;
//     }  

//   s.value = second + 's';
//   m.value = minute + 'm';
//   h.value = hour + 'h';

//   }, 1000);
  

  
// }
// countSecond();
document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const hourInput = document.querySelector('.hour-button');
  const minuteInput = document.querySelector('.minute-button');
  const secondInput = document.querySelector('.second-button');
  const timezoneButton = document.querySelector('.timezone-mode');
  const formatButton = document.querySelector('.settings-mode');
  const ropeButtons = document.querySelectorAll('.rope-1, .rope-2, .rope-3, .rope-4');

  // State Variables
  let is24Hour = true; // Default to 24-hour format
  let timezoneOffset = 0; // Default to local timezone (offset in hours)
  const timezones = [
    { name: 'Local', offset: 0 },
    { name: 'UTC', offset: 0 - (new Date().getTimezoneOffset() / 60) },
    { name: 'New York', offset: -5 },
    { name: 'Tokyo', offset: 9 }
  ];
  let currentTimezoneIndex = 0;

  // Update Clock Function
  function updateClock() {
    const now = new Date();
    // Adjust for timezone
    const adjustedTime = new Date(now.getTime() + (timezoneOffset * 60 * 60 * 1000));
    let hours = adjustedTime.getUTCHours();
    const minutes = adjustedTime.getUTCMinutes();
    const seconds = adjustedTime.getUTCSeconds();

    // Handle 12/24-hour format
    if (!is24Hour) {
      hours = hours % 12 || 12; // Convert to 12-hour format
    }
    hourInput.value = String(hours).padStart(2, '0');
    minuteInput.value = String(minutes).padStart(2, '0');
    secondInput.value = String(seconds).padStart(2, '0');

    // Add animation class to second input for smooth transition
    secondInput.classList.add('animate-second');
  }

  // Initial clock update and set interval
  updateClock();
  setInterval(updateClock, 1000);

  // Timezone Toggle Functionality
  timezoneButton.addEventListener('click', () => {
    currentTimezoneIndex = (currentTimezoneIndex + 1) % timezones.length;
    timezoneOffset = timezones[currentTimezoneIndex].offset;
    updateClock(); // Update immediately
    timezoneButton.style.backgroundColor = getRandomColor(); // Visual feedback
    alert(`Timezone switched to: ${timezones[currentTimezoneIndex].name}`);
  });

  // 12/24-Hour Format Toggle
  formatButton.addEventListener('click', () => {
    is24Hour = !is24Hour;
    updateClock(); // Update immediately
    formatButton.style.backgroundColor = getRandomColor(); // Visual feedback
    alert(`Time format switched to: ${is24Hour ? '24-hour' : '12-hour'}`);
  });

  // Rope Button Interactivity
  ropeButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.add('rope-animate');
    });
  });

  // Helper Function to Generate Random Color for Visual Feedback
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color + '33'; // Add some transparency
  }
});