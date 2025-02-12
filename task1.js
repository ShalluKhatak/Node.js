let vary = 0;
const intervalId = setInterval(() => {
  vary++;
  if (vary === 5) {
    clearInterval(intervalId);
    console.log('The program ends.');
  }
}, 1000);
