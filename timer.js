document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const resetBtn = document.getElementById('resetBtn');

    let seconds = 0;
    let interval = null;

    function pad(num) {
        return String(num).padStart(2, '0');
    }

    function updateDisplay() {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        display.textContent = pad(h) + ':' + pad(m) + ':' + pad(s);
    }

    startBtn.addEventListener('click', function() {
        if (interval !== null) {
            return;
        }
        interval = setInterval(function() {
            seconds++;
            updateDisplay();
        }, 1000);
    });

    stopBtn.addEventListener('click', function() {
        clearInterval(interval);
        interval = null;
    });

    resetBtn.addEventListener('click', function() {
        clearInterval(interval);
        interval = null;
        seconds = 0;
        updateDisplay();
    });
});
