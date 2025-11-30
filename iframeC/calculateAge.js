let result = document.getElementById("age-text");

function getISTDate() {
    const now = new Date();
    const currentOffset = now.getTimezoneOffset(); // in minutes (IST = -330)
    const IST_OFFSET = -330; // IST = UTC+5:30
    const diffMinutes = IST_OFFSET - currentOffset;
    return new Date(now.getTime() + diffMinutes * 60 * 1000);
}

let todayIST = getISTDate();
function calculateAge() {
    let birthday = new Date("2004-12-10");
    let today = getISTDate();

    if (birthday > today) {
        result.innerHTML = "Please select a valid past date!";
        return;
    }

    // Years, months, days logic
    let d1 = birthday?.getDate();
    let m1 = birthday?.getMonth();
    let y1 = birthday?.getFullYear();

    let d2 = today?.getDate();
    let m2 = today?.getMonth();
    let y2 = today?.getFullYear();

    let d3, m3, y3;
    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    // Calculate hours, minutes, seconds from total milliseconds
    let diffMs = today - birthday;

    let totalSeconds = Math.floor(diffMs / 1000);
    let totalMinutes = Math.floor(totalSeconds / 60) + 30;
    let totalHours = Math.floor(totalMinutes / 60) + 5;

    let hours = totalHours % 24;
    let minutes = totalMinutes % 60;
    let seconds = totalSeconds % 60;
    result.innerHTML = `
        <span>${y3}</span>y
        <span>${m3}</span>m
        <span>${d3}</span>d
        <span>${hours}</span>h
        <span>${minutes}</span>min
        <span>${seconds}</span>s
    `;
}

function getDaysInMonth(year, month) {
    // month is 0-indexed, so month=1 gives days of January, etc.
    return new Date(year, month + 1, 0)?.getDate();
}

setInterval(calculateAge, 1000);