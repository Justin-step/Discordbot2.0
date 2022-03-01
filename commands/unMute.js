const fs = require("fs");
const tempMute = JSON.parse(fs.readFileSync("./tempMutes.json", "utf8"));

module.exports.run = async (client, message, args) => {

    if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply("Helaas heeft u deze machtiging niet");

    if (!args[0]) return message.reply("U moet een gebruiker opgeven");

    var mutePerson = message.guild.members.cache.get(message.mentions.users.first().id || message.guild.get(args[0]).id);

    if (!mutePerson) return message.reply("Kan gebruiker niet vinden");

    if (mutePerson.permissions.has("MANAGE_MESSAGES")) return message.reply("Sorry y kunt deze persoon geen mute geven");

    let muteRole = message.guild.roles.cache.get("938161234933592066");

    if (!muteRole) return message.channel.send("De rol bestaat niet"); 

    if (!mutePerson.roles.cache.some(role => role.name == "muted")) {
        message.channel.send("Deze persoon is al geunmuted");
    } else {
        mutePerson.roles.add(muteRole.id);
        message.channel.send(`${mutePerson} is geunmuted`);

        tempMute[mutePerson].time = 0;

        fs.writeFile("./tempMutes.json", JSON.stringify(tempMute), (err) => {
            if (err) console.log(err);
        });
     

    }

}

module.exports.help = {
    name: "unmute",
    category: "general",
    description: "Unmute u"
}