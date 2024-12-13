const leadingZeros = (t) => {
  return (t < 10) ? "0" + t : t;
}

const startClock = () => {
  let date = new Date();
  document.getElementById("clock").innerText = [date.getHours(), date.getMinutes(), date.getSeconds()].map(leadingZeros).join(':');
  setTimeout(function(){ startClock() }, 1000);
}

startClock();
