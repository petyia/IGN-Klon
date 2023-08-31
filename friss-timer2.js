function updateTimer() {
  future = Date.parse("jan 31, 2023 16:31:00");
  now = new Date();
  diff = now - future;

  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours = Math.floor(diff / (1000 * 60 * 60));
  mins = Math.floor(diff / (1000 * 60));
  secs = Math.floor(diff / 1000);

  d = days;
  h = hours - days * 24;
  m = mins - hours * 60;
  s = secs - mins * 60;

  document.getElementById("timer2").innerHTML =
    // "<div>" +
    // d +
    // "<span>nap</span></div>" +
    "<div>" +
    h +
    "<span>óra</span></div>" +
    "<div>" +
    m +
    "<span>perc</span></div>";
  // +
  // "<div>" +
  // s +
  // "<span>másodperc</span></div>";
}
setInterval("updateTimer()", 1000);
