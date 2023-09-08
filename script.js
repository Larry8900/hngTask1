
        const dayOfTheWeek = document.getElementById("current-day");
        const utcTime = document.getElementById("utc-time");

        const date = new Date();
        const day = date.toLocaleString('en-US', {weekday:"long"});
        const utcInMill = date.getUTCMilliseconds();

        dayOfTheWeek.textContent = day;
        utcTime.textContent = utcInMill;
   