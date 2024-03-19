document.addEventListener('DOMContentLoaded', function() {
  const clockElement = document.querySelector('.clock');
  const alarmForm = document.querySelector('.alarmForm');
  const alarmHourInput = document.querySelector('.alarmHour');
  const alarmMinuteInput = document.querySelector('.alarmMinute');
  const alarmIndicator = document.querySelector('.alarmIndicator p');

  // Display current time
  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    clockElement.textContent = timeString;

    // Check if alarm time is reached
    if (
      alarmHourInput.value === hours &&
      alarmMinuteInput.value === minutes
    ) {
      playAlarm();
    }
  }

  function playAlarm() {
    // You can replace 'alarm_sound.mp3' with your own alarm sound file
    const alarmAudio = new Audio('./assets/Audio/audio.mp3');
    alarmAudio.play();
    
      // Pause the alarm audio after 30 seconds
    setTimeout(() => {
      alarmAudio.pause();
    }, 30000); // 30 seconds in milliseconds
  }

  // Update clock every second
  setInterval(updateClock, 1000);

  // Set alarm
  alarmForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Validate inputs
    const hour = parseInt(alarmHourInput.value);
    const minute = parseInt(alarmMinuteInput.value);
    

    if (isNaN(hour) || hour < 0 || hour > 23 || isNaN(minute) || minute < 0 || minute > 59) {
      alarmIndicator.textContent = 'Please enter valid hour (0-23) and minute (0-59).';
      alarmIndicator.style.display = 'block';
      return;
    }

    const hourString = String(hour).padStart(2, '0'); // Ensure leading zero
    const minuteString = String(minute).padStart(2, '0'); // Ensure leading zero
    
  
    alarmIndicator.textContent = 'Alarm set for ' + hourString + ':' + minuteString;
    alarmIndicator.style.display = 'block';
  });

  // Function to play alarm sound
  function playAlarm() {
    // You can replace 'alarm_sound.mp3' with your own alarm sound file
    const alarmAudio = new Audio('./assets/Audio/audio.mp3');
    alarmAudio.play();
  }
});
