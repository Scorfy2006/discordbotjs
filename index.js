var Discord = require("discord.js");
const colors = require('colors')
var bot = function discordbot(option) {
    this.token = option.token

    this.client = new Discord.Client();
}

bot.prototype.connect = function (cb) {
    try {
        this.client.login(this.token)
    } catch(err) {
        console.log(String(err).red)
    }
}