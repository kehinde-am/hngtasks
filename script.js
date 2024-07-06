document.addEventListener('DOMContentLoaded', () => {
    const utcTimeElement = document.getElementById('utc-time');
    const currentDayElement = document.getElementById('current-day');

    function updateTimeAndDay() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDay = daysOfWeek[now.getUTCDay()];

        utcTimeElement.textContent = utcTime;
        currentDayElement.textContent = currentDay;
    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000);
});
