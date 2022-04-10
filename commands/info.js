const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setTitle("Altijdche community")
    .setDescription("Ik ben altijdche en stream vaak op twitch wat ik stream: Rust, Fivem, Phasmophobia en nog veel meer!")
    .setColor("#ff0000")
    .addField("Bot naam", client.user.username)
    .setThumbnail('https://cdn.discordapp.com/attachments/689802923156439060/962754507073257483/Ninja.png')
    .setImage('https://cdn.discordapp.com/attachments/689802923156439060/962754507073257483/Ninja.png')
    .setTimestamp()
    .setFooter("AltijdChe", 'https://cdn.discordapp.com/attachments/689802923156439060/962754507073257483/Ninja.png');

    return message.channel.send({ embeds: [botEmbed] });

}

module.exports.help = {
    name: "info",
    category: "info",
    description: "geeft informatie over de Server"
}