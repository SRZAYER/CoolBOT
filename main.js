const { Client, Collection } = require('discord.js');
const { loadCommands, loadEvents } = require("./util/loader");
const { TOKEN } = require('./config');

const client = new Client();
require("./util/functions")(client);
client.mongoose = require("./util/mongoose");
client.config = require("./config");
//client.commands, client.cooldowns
["commands", "cooldowns"].forEach(x => client[x] = new Collection());

loadCommands(client);
loadEvents(client);
client.mongoose.init();

client.login(client.config.TOKEN);