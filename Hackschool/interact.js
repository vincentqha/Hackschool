console.log("pi");

const clockFace = document.querySelector("#clock-face");

clockFace.innerHTML = "03:14:15 PM";
clockFace.style.color = "white";

const tick = () => {
    const date = new Date();
    const time = date.toLocaleTimeString('en-US');
    clockFace.innerHTML = time;
};

setInterval(tick, 1000);
