const discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    const categoryID = "938161241636085818";

    if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply("Sorry u kunt dit niet doen");

    if (message.channel.parentId == categoryID) {

        message.channel.delete();

        var embedTicket = new discord.MessageEmbed()
            .setTitle("Ticket, " + message.channel.name)
            .setDescription("De ticket is gemarkeerd als **Compleet**")
            .setFooter("Ticket gesloten");
          
        var  ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "log");
        if (!ticketChannel) return message.reply("Kanaal bestaat niet");
        
        return ticketChannel.send({ embeds: [embedTicket] });

    } else {
       return message.channel.send("Gelieve dit commando in een ticket kanaal uitvoeren.");
    }

}

module.exports.help = {
    name: "close",
    category: "general",
    description: "Sluit ticket"
}