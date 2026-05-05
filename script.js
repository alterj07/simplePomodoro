let timerRunning = false;


function startTimer(duration, display) {
    if (!timerRunning){
        return new Promise((resolve) => {
            var timer = duration, minutes, seconds;//duration is in seconds;
            timerRunning = true;
            const interval = setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.textContent = minutes + ":" + seconds;

                if (--timer < 0) {
                    timer = 0;
                    timerRunning = false;
                    clearInterval(interval);
                    resolve();
                }
            }, 1000);
        });
    }
}

async function startBreak(display) {
    await startTimer(10, display);
}

async function startThreeHourTimer(display) {
    await startTimer(50, display);
    await startBreak(display);
    await startTimer(40, display);
    await startBreak(display);
    await startTimer(30, display);
    await startBreak(display);
    await startTimer(20, display);
    await startBreak(display);
    await startTimer(10, display);
    await startBreak(display);
}

