browser.hello.onSomething.addListener(param1 => {
  console.log(`Something happened: ${param1}`);
});

browser.hello.hello().then(
  message => console.log(`hello sez: "${message}"`)
);
