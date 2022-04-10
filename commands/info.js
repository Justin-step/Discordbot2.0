const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setTitle("Altijdche community")
    .setDescription("Ik ben altijdche en stream vaak op twitch wat ik stream: Rust, Fivem, Phasmophobia en nog veel meer!")
    .setColor("#ff0000")
    .addField("Bot naam", client.user.username)
    .setThumbnail('foto')
    .setImage('foto')
    .setTimestamp()
    .setFooter("AltijdChe", 'Foto');

    return message.channel.send({ embeds: [botEmbed] });

}

module.exports.help = {
    name: "info",
    category: "info",
    description: "geeft informatie over de Server"
}