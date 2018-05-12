const config = require("./../config.json");

exports.run = (client, message, args) => {
	  message.channel.send("Boi make sure embeds are on or else you won't see stuff");
		message.channel.send({embed: {
			color: 3017,
			title: "__User Commands      (Last Bot Update: 5/11)__",
			fields: [{
				name: config.prefix +"help",
				value: "Do I really even need to put this here?"
			  },
			  {
				name: config.prefix + "prefix <new prefix>",
				value: "Sets the prefix for using commands"
			  },
			  {
				name: config.prefix + "owner",
				value: "Returns the ID of the bot owner"
			  },
			  {
				name: config.prefix + "ping",
				value: "Returns 'pong!' for debugging purposes"
			  },
			  {
				name: config.prefix + "reload <command name> (bot owner only)",
				value: "Reloads a command. For debugging purposes & convenience"
			  }
			],
		  }
		});
}