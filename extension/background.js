
browser.hello.hello().then(
  message => console.log(`hello sez: "${message}"`)
);

browser.browserAction.setTitle({ title: 'changed title' });
