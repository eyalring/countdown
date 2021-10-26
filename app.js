const countdown = () => {
    const countdownDate = new Date('Oct 27, 2021 18:00:01').getTime();
    const nowDate = new Date().getTime();
    const timeToDate = countdownDate-nowDate;
    const timeToDateSeconds = Math.floor(timeToDate/1000);
    const timeToDateMinutes = Math.floor(timeToDateSeconds/60)
    const timeToDateHours = Math.floor(timeToDateMinutes/60)
    const timeToDateDays = Math.floor(timeToDateHours/24)
    const days = timeToDateDays; 
    const hours = timeToDateHours - days*24;
    const minutes = timeToDateMinutes - days*24*60 - hours*60;
    const seconds = timeToDateSeconds - days*24*60*60 - hours*60*60- minutes*60;
    
    document.querySelector(".day").innerText = days;
    document.querySelector(".hour").innerText = hours;
    document.querySelector(".minutes").innerText = minutes;
    document.querySelector(".seconds").innerText = seconds;
    
    console.log('countdown date is ', days,hours,minutes,seconds);
}

setInterval(countdown,1000);