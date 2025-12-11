module.exports = function({bot, commands, config}) {
  commands.addInboxServerCommand('ping', '',(msg) => {
		bot.createMessage(msg.channel.id, "Pinging...").then(m =>{
			const ping = m.timestamp - msg.timestamp;
			m.edit(`Pong! Your ping is \`${ping}ms\``);
		});
	});
};
