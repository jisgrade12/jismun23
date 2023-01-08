// Set the date we're counting down to
var countDownDate = new Date("Feb 10, 2023 07:45:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerHTML =
    days + " : " + hours + " : " + minutes + " : " + seconds;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML =
      "The conference has started!";
    document.getElementById("countdown").style.fontSize = "5vw";
  }
}, 1000);
