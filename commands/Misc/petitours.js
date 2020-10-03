const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
  message.channel.send(
    "Oh, oh, Tiens voilà quelqu'un \n Petit Ours Brun \n Coucou c'est toi mon copain \n Petit Ours Brun \n Tu fais toujours ton coquin \n Mon petit ours malin, \n tape dans tes mains \n Petit Ours Brun \n Saute, saute les pieds joints \n Petit Ours Brun \n Petit Ours \n Petit, Petit Ours Brun"
  );
};

module.exports.help = MESSAGES.COMMANDS.MISC.PETITOURS;