
this.hello = class extends ExtensionAPI {
  getAPI(context) {
    return {
      hello: {
        async hello() {

          const resourceUrl = context.extension.getURL("Services.jsm");
          console.log("resourceUrl to embedded Services.jsm: ", resourceUrl);
          Cu.import(resourceUrl);
          console.log("./Services.jsm loaded: ", Services);

          return "Hello, world!";
        }
      }
    };
  }
}
