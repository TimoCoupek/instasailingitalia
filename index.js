const Discrod = require("discord.js");
const bot = new Discrod.Client();
bot.login("ODI1MTA0MjM3NDEwNTE3MDE0.YF5EMw.syakfzqUC4-XY1V61LmGkgzo9Dc");

bot.on('message',(message) => {
    switch(message.content){
        case ("-!start_vr"):
            const member = message.mentions.user;
            member.roles.add('824948327287226389');
            message.channel.send("LE REGATE VR INSHORE SONO SATE AVVIATE");
            break;
        case ("grappolo"):
            let user = message.author.username;
            message.channel.send("Ciao " + user + " ha appena sbloccato il grappolo sacro");
            break;
        case ("!likeavelista"):
            message.channel.send("Ciao se vuoi seguire likeavelista ecco il link " + '\n' + 
            "https://www.instagram.com/likeavelista/?hl=it");
            break;
        case ("!movimento5nodi"):
            message.channel.send("Ciao se vuoi seguire movimento5nodi ecco il link " + '\n' + 
            "https://www.instagram.com/movimento5nodi/?hl=it");
            break;
    }
})