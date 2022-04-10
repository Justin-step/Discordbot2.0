const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setTitle("Altijdche community")
    .setDescription("Ik ben altijdche en stream vaak op twitch wat ik stream: Rust, Fivem, Phasmophobia en nog veel meer!")
    .setColor("#ff0000")
    .addField("Bot naam", client.user.username)
    .setThumbnail('https://cdn.discordapp.com/attachments/689802923156439060/943981948806791178/IMG_5048.png')
    .setImage('https://cdn.discordapp.com/attachments/689802923156439060/943981948806791178/IMG_5048.png')
    .setTimestamp()
    .setFooter("OnzDorp-RP", 'https://cdn.discordapp.com/attachments/689802923156439060/943981948806791178/IMG_5048.png');

    return message.channel.send({ embeds: [botEmbed] });

}

module.exports.help = {
    name: "info",
    category: "info",
    description: "geeft informatie over de Server"
}