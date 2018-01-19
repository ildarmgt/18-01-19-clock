const timeDelay = 1000; // default refresh timer

var myTimerID = setInterval(myTimer, timeDelay); // initializes & holds timer ID
var nav_lblTime = document.getElementsByClassName('nav-lblTime')[0];
var myNav = document.getElementsByClassName('nav')[0];

function myTimer () {
  let objDate = new Date();
  let nowHours = objDate.getHours();
  let nowMinutes = objDate.getMinutes();
  let nowSeconds = objDate.getSeconds();

  let nowHexTime = '#' + twoDigits(nowHours) + twoDigits(nowMinutes) + twoDigits(nowSeconds);

  nav_lblTime.innerHTML = nowHexTime;
  myNav.style.backgroundColor = nowHexTime;
}

// help convert format to 2 digits
function twoDigits (strIn) {
  return strIn.toLocaleString(undefined, {minimumIntegerDigits: 2, maximumIntegerDigits: 2});
}
