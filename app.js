var hour = document.getElementById('hour')
var minute = document.getElementById('minute')
var second = document.getElementById('second')

const myClock = setInterval(() => {
    let time_now = new Date();
    let h = time_now.getHours();
    let m = time_now.getMinutes();
    let s = time_now.getSeconds();
    // console.log(h + " : " + m + " : " + s)
    let cal_h = (h * 30) + (m / 2)
    let cal_m = (m * 6) + (s / 10)
    let cal_s = s * 6

    hour.style.transform = "rotate(" + cal_h + "deg)"
    minute.style.transform = "rotate(" + cal_m + "deg)"
    second.style.transform = "rotate(" + cal_s + "deg)"
}, 1000);