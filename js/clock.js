function Time() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checktheTime(m);
    s = checktheTime(s);
    document.getElementById('siteclock').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(Time, 500);
}
function checktheTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
}
