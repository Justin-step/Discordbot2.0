const ms = require("ms");

const fs = require("fs");
const tempMute = JSON.parse(fs.readFileSync("./tempMutes.json", "utf8"));

module.exports.run = async (client, message, args) => {

    if(!message.member.permissions.has("KICK_MEMBERS")) return message.reply("Helaas heeft u deze machtiging niet");

    if (!args[0]) return message.reply("U moet een gebruiker opgeven");

    var mutePerson = message.guild.members.cache.get(message.mentions.users.first().id || message.guild.get(args[0]).id);

    if (!mutePerson) return message.reply("Kan gebruiker niet vinden");

    if (mutePerson.permissions.has("MANAGE_MESSAGES")) return message.reply("Sorry y kunt deze persoon geen mute geven");

    let muteRole = message.guild.roles.cache.get("938161234933592066");

    if (!muteRole) return message.channel.send("De rol bestaat niet");

    var muteTime = args[1];

    if (!muteTime) return message.channel.send("Geef een tijd mee");

    if (mutePerson.roles.cache.some(role => role.name == "muted")) {
        message.channel.send("Deze persoon is al gemuted");
    } else {
        mutePerson.roles.add(muteRole.id);
        message.channel.send(`${mutePerson} is gemute voor ${muteTime}`);

        if (!tempMute[mutePerson]) tempMute[mutePerson] = {
            time: 0
        };

        let date = new Date();
        let dateMilli = date.getTime();
        let dateAdded = dateMilli + ms(muteTime);

        tempMute[mutePerson].time = dateAdded;

        fs.writeFile("./tempMutes.json", JSON.stringify(tempMute), (err) => {
            if (err) console.log(err);
        });
     
        // setTimeout(() => {

           // mutePerson.roles.remove(muteRole.id);

        // }, ms(muteTime));
    }

}

module.exports.help = {
    name: "tempmute",
    category: "general",
    description: "De bot mute u"
}