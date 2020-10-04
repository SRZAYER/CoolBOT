const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
  message.channel.send(
   "Wejdene\n\nAlors comme ça tu m'as trompé\nT'as cru qu'j'allais pas capter?\nEt t'as changé d'parfum, d'numéro\nComme si par les keufs t'étais recherché\nApparemment tu n'm'aimes pas\n C'est une autre que t'aimes Tu parles avec une Anissa\n Mais moi j'm'appelle Wejdene\n\n Tu prends tes caleçons sales (sales)\n Et tu hors de ma vue (ma vue)\n Tu n'as pas de principes (principes)\n J'te jure sur ma vie (sur ma vie)\n Me tromper avec ma cousine\n Mais t'as pas de valeurs\n J'ai appelé mon grand frère\n Et il vient t'à'l'heure\n\n Nous deux c'est terminé, eh eh\n Tu me cherches, mais je suis plus là, ah ah\n J'étais déterminée, eh eh\n À construire quelque chose avec toi, ah ah\n Nous deux c'est terminé, eh eh\n Tu me cherches, mais je suis plus là, ah ah\n J'étais déterminée, eh eh\n À construire quelque chose…"
   );
};

module.exports.help = MESSAGES.COMMANDS.MISC.WEJDENE;