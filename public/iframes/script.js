const targetTimestamp = 1729015200 * 1000;

function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function updateUrlParameter(param, value) {
    const url = new URL(window.location.href);
    if (value) {
        url.searchParams.set(param, value);
    } else {
        url.searchParams.delete(param);
    }
    window.history.replaceState({}, '', url);
}

function applyCustomizations() {
    const textColor = getUrlParameter('textColor');
    const backgroundColor = getUrlParameter('backgroundColor');
    const textFont = getUrlParameter('textFont');
    const timerFont = getUrlParameter('timerFont');
    const overlay = getUrlParameter('overlay');

    if (backgroundColor) {
        document.body.style.backgroundColor = `#${backgroundColor}`;
        document.getElementById('backgroundColorPicker').value = `#${backgroundColor}`;
    }

    if (textColor) {
        const countdownText = document.getElementById("countdown_text");
        const countdown = document.getElementById("countdown");
        countdownText.style.color = `#${textColor}`;
        countdown.style.color = `#${textColor}`;
        document.getElementById('textColorPicker').value = `#${textColor}`;
        updateTextShadow(`#${textColor}`);
    }

    if (textFont) {
        document.getElementById("headerText").style.fontFamily = textFont;
        document.getElementById('headerFontPicker').value = textFont;
    }

    if (timerFont) {
        document.getElementById("countdown").style.fontFamily = timerFont;
        document.getElementById('countdownFontPicker').value = timerFont;
    }

    if (overlay === 'hide') {
        document.querySelector('.controls').style.display = 'none';
    }
}

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetTimestamp - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let countdownString = '';

    if (days > 0) {
        countdownString += days + "d ";
    }
    if (hours > 0 || days > 0) {
        countdownString += hours + "h ";
    }
    if (minutes > 0 || hours > 0 || days > 0) {
        countdownString += minutes + "m ";
    }
    countdownString += seconds + "s";

    document.getElementById("countdown").innerHTML = countdownString;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Season 13 Active";
    }
}


function updateTextShadow(textColor) {
    const rgb = textColor.match(/\d+/g);
    const brightness = Math.sqrt(
        0.299 * rgb[0] * rgb[0] +
        0.587 * rgb[1] * rgb[1] +
        0.114 * rgb[2] * rgb[2]
    );

    const countdown = document.getElementById("countdown");
    countdown.style.textShadow = brightness > 127.5 ? '1px 1px 2px black' : '1px 1px 2px white';
}

document.getElementById('backgroundColorPicker').addEventListener('input', function() {
    document.body.style.backgroundColor = this.value;
    updateUrlParameter('backgroundColor', this.value.replace('#', ''));
});

document.getElementById('textColorPicker').addEventListener('input', function() {
    const countdownText = document.getElementById("countdown_text");
    const countdown = document.getElementById("countdown");
    countdownText.style.color = this.value;
    countdown.style.color = this.value;
    updateTextShadow(this.value);
    updateUrlParameter('textColor', this.value.replace('#', ''));
});

document.getElementById('headerFontPicker').addEventListener('change', function() {
    document.getElementById("headerText").style.fontFamily = this.value;
    updateUrlParameter('textFont', this.value);
});

document.getElementById('countdownFontPicker').addEventListener('change', function() {
    document.getElementById("countdown").style.fontFamily = this.value;
    updateUrlParameter('timerFont', this.value);
});

document.getElementById('toggleOverlay').addEventListener('click', function() {
    const controls = document.querySelector('.controls');
    if (controls.style.display === 'none') {
        controls.style.display = 'block';
        updateUrlParameter('overlay', '');
    } else {
        controls.style.display = 'none';
        updateUrlParameter('overlay', 'hide');
    }
});

document.addEventListener('keydown', function(event) {
    const controls = document.querySelector('.controls');
    if (event.key === 'Escape' && controls.style.display === 'none') {
        controls.style.display = 'block';
        updateUrlParameter('overlay', '');  // Remove 'overlay=hide'
    }
});

const countdownInterval = setInterval(updateCountdown, 1000);

updateCountdown();
applyCustomizations();

