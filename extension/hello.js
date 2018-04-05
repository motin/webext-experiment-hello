ChromeUtils.import("resource://gre/modules/ExtensionCommon.jsm");
ChromeUtils.import("resource://gre/modules/ExtensionUtils.jsm");

const { EventManager } = ExtensionCommon;
const { EventEmitter } = ExtensionUtils;

class HelloEventEmitter extends EventEmitter {
  emitHelloEvent() {
    console.log("Emitting hello-event from HelloEventEmitter");
    this.emit("hello-event");
  }
}

this.hello = class extends ExtensionAPI {
  getAPI(context) {
    const helloEventEmitter = new HelloEventEmitter();
    return {
      hello: {
        async hello() {
          helloEventEmitter.emitHelloEvent();
          return "Hello, world!";
        },
        onSomething: new EventManager(context, "hello.onSomething", fire => {
          const callback = value => {
            console.log("Firing hello-event from hello experiments API");
            fire.async(value);
          };
          helloEventEmitter.on("hello-event", callback);
          return () => {
            helloEventEmitter.off("hello-event", callback);
          };
        }).api()
      }
    };
  }
}
