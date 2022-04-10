const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setTitle("Altijdche Community")
    .setDescription("Ik ben altijdche en stream vaak op twitch wat ik stream: Rust, Fivem, Phasmophobia en nog veel meer!")
    .setColor("#ff0000")
    .addFields(
        {name:"Bot naam", value:client.user.username},
        {name:"Je bent de server gejoined op", value: message.member.joinedAt.toString() },
        {name:"Totaal members", value: message.guild.memberCount.toString() },
    )
    .addField("Bot naam", client.user.username)

    return message.channel.send({ embeds: [botEmbed] });

}

module.exports.help = {
    name: "serverinfo",
    category: "info",
    description: "Geeft info wanneer u ben gejoined"
}