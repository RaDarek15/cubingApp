const timerEl = document.getElementById("timer");
const resetBtn = document.getElementById("reset");

let startTime = 0;
let elapsed = 0;
let rafId = null;

let running = false;
let armed = true;
let holding = false;
let ready = false;
let mustRelease = false;

let holdTimeout = null;

function format(ms) {
    return (ms / 1000).toFixed(3);
}

function update() {
    if (!running) return;
    elapsed = performance.now() - startTime;
    timerEl.textContent = format(elapsed);
    rafId = requestAnimationFrame(update);
}

function startTimer() {
    startTime = performance.now();
    elapsed = 0;
    running = true;
    armed = false;
    update();
}

function stopTimer() {
    running = false;
    cancelAnimationFrame(rafId);
}

function resetTimer() {
    stopTimer();
    elapsed = 0;
    timerEl.textContent = "0.000";
    timerEl.className = "";

    armed = true;
    holding = false;
    ready = false;
    mustRelease = true;

    clearTimeout(holdTimeout);
}

document.addEventListener("keydown", (e) => {
    if (e.code !== "Space") return;

    if (running) {
        e.preventDefault();
        stopTimer();
        return;
    }

    if (!armed || holding || mustRelease) return;

    e.preventDefault();
    holding = true;
    ready = false;
    timerEl.className = "red";

    holdTimeout = setTimeout(() => {
        ready = true;
        timerEl.className = "green";
    }, 1000);
});

document.addEventListener("keyup", (e) => {
    if (e.code !== "Space") return;

    if (mustRelease) {
        mustRelease = false;
        return;
    }

    if (!holding) return;

    clearTimeout(holdTimeout);
    holding = false;

    if (ready && armed) {
        timerEl.className = "";
        startTimer();
    }
    else {
        timerEl.className = "";
    }

    ready = false;
});


