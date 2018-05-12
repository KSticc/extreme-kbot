const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs")
const config = require("./config.json");


//Display Message when turned on
client.on("ready", () => {
  console.log("Fool this is the wrong one");
});

client.on("message", (message) => {
	
	//Exit if no prefix or if message author is bot
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;
	const args = message.content.slice(config.prefix.length).trim().split(/ + /g);
	const command = args.shift().toLowerCase();
	
	//Check User Messages
  if (command === "prefix") {
	  let newPrefix = message.content.split(" ").slice(1, 2)[0];
	  config.prefix = newPrefix;
	  fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
	  message.channel.send("New prefix is " + config.prefix);
  } else

  if (command === "help"){
	  message.channel.send("Boi make sure embeds are on or else you won't see stuff");
		message.channel.send({embed: {
			color: 3017,
			title: "*Help*",
			fields: [{
				name: config.prefix +"Help",
				value: "Do I really even need to put this here?"
			  },
			  {
				name: config.prefix + "Prefix <New Prefix>",
				value: "Sets the prefix for using commands"
			  },
			  {
				name: config.prefix + "Owner",
				value: "Returns the ID of the bot owner"
			  }
			],
		  }
		});
  } else
	  
  if (command === "owner"){
	  if(message.author.id !== config.ownerID) return;
	  message.channel.send(config.ownerID + " is owner");
  }
});

//Bot Key
client.login(config.token);