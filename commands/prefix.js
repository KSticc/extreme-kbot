const config = require("./../config.json");
const fs = require("fs");

exports.run = (client, message, args, pre, own) => {
	  let newPrefix = message.content.split(" ").slice(1, 2)[0];
	  config.prefix = newPrefix;
	  fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
	  message.channel.send("New prefix is " + config.prefix);
	  console.log("Prefix changed to " + config.prefix);
}