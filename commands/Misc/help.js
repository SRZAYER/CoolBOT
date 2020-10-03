const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");
const { PREFIX } = require("../../config");
const { readdirSync } = require("fs");
const categoryList = readdirSync('./commands');

module.exports.run = (client, message, args) => {
  if (!args.length) {
    const embed = new MessageEmbed()
      .setAuthor("Commandes de CoolBOT", client.user.avatarURL())
      .setColor("#a38659")
      .setThumbnail(client.user.avatarURL())
      .addField("Plus d'infos, tapez :",`\`${PREFIX}help <command_name>\`.`)
      .setTimestamp()
      .setFooter(client.user.username);

    for (const category of categoryList) {
      embed.addField(
        `${category}`,
        `${client.commands.filter(cat => cat.help.category === category.toLowerCase()).map(cmd => cmd.help.name).join(', ')}`
      );
    };

    return message.channel.send(embed);
  } else {
    const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]));
    if (!command) return message.reply("Cette commande n'existe pas !");

    const embed = new MessageEmbed()
      .setColor("#a38659")
      .setThumbnail(client.user.avatarURL())
      .setTitle(`\`${command.help.name}\``)
      .addField("Description", `${command.help.description} (Cooldown: ${command.help.cooldown} secs)`)
      .addField("Utilisation", command.help.usage ? `${PREFIX}${command.help.name} ${command.help.usage}` : `${PREFIX}${command.help.name}`, true)
      .setTimestamp()
      .setFooter(client.user.username)

    if (command.help.aliases.length > 1) embed.addField("Alias", `${command.help.aliases.join(', ')}`, true );
    return message.channel.send(embed);
  }
};

module.exports.help = MESSAGES.COMMANDS.MISC.HELP;