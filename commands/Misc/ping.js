module.exports.run = (client, message, args) => {
  message.channel.send("Pong !");
};

module.exports.help = {
  name: "ping",
  aliases: ["ping"],
  category: 'misc',
  description: "Pong !",
  cooldown: 3,
  usage: "",
  isUserAdmin: false,
  permissions: false,
  args: false,
};