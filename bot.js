// ==================================================================

 // THIS BOT [RINZLER] CREATED BY [THE RARE RANGER] - 2019© //
////////////// 🔰 THE DAMNATION™ & THE GRID™ 🔰 //////////////

// ==================================================================

const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const request = require('request');
const fs = require('fs');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const yt_api_key = "AIzaSyCncxr7q-96yc3uRT0Ib2L3aBlSHA9F0_A";
let cooldown = new Set();
let cdseconds = 5;

// ==================================================================

client.on('ready', function() {

    console.log(`IM READY TO FIGHT : ${client.user.username}`);

});

// ==================================================================

var servers = [];

var queue = [];

var guilds = [];

var queueNames = [];

var isPlaying = false;

var dispatcher = null;

var voiceChannel = null;

var skipReq = 0;

var skippers = [];

var now_playing = [];

// ==================================================================

function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}
var version = '1.2';
client.on('message', message => {
    if(message.content.startsWith(prefix + "RINZLER IS BACK ONLINE NOW")) {
 if(!message.channel.guild) return message.reply('**:x: This Command Only For Servers :x:**').then(m => m.delete(60000));
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('859900')
            .setTitle('**🚀 HI, IM BACK [ONLINE] NOW & [UPDATED] 🚀** ')
	    .addField('``Bot Version :``' , `[ v1.2 ]` , true)
            .addField('``👑 Bot Owner 👑 :``' , `[ <@480540559233122324> ]` , true)
            .addField('``Bot Uptime :``', [ timeCon(process.uptime()) ] , true)
            .addField('``Bot Ping :``' , [ `${Date.now() - message.createdTimestamp}` + 'MS' ] , true)
            .addField('``Bot RAM Usage :``', `[ ${(process.memoryUsage().rss / 1048576).toFixed()}MB ]` , true)
            .addField('``TG - Servers :``', [ client.guilds.size ] , true)
            .addField('``TG - Channels :``' , `[ ${client.channels.size} ]` , true)
            .addField('``TG - Users :``' ,`[ ${client.users.size} ]` , true)
	    .addField('``TG Server Region :``' , `[ Eu - Central ]` , true)
            .addField('``Bot Name :``' , `[ ${client.user.tag} ]` , true)
            .addField('``Bot ID :``' , `[ ${client.user.id} ]` , true)
            .addField('``Bot Node :``' , `[ ${process.version} ]` , true)
                  .addField('``Bot Prefix :``' , `👑 [ - ] 👑` , true)
                  .addField('``Bot Language :``' , `[ Java Script ]` , true)
                  .setFooter('● 🔰 [ THE GRID™ - OFFICIAL - 2019© ] 🔰 ●')
	          .setTimestamp()
    })
}
});

// ==================================================================

client.on('ready', function(){
client.channels.get("542905235241304065").send("-RINZLER IS BACK ONLINE NOW").then(m => m.delete(500));
		   
 });

// ==================================================================

function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}
var version = '1.2';
client.on('message', message => {
    if(message.content.startsWith(prefix + "stats")) {  
      if(!message.content.startsWith(prefix)) return;
        if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("**:no_entry: You have to wait [5] seconds between commands :no_entry:**")
  }
  //if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
 // }    
 if(!message.channel.guild) return message.reply('**:x: This Command Only For Servers :x:**').then(m => m.delete(60000));
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('859900')
            .setTitle('**[RINZLER] STATS** ')
	    .addField('``Bot Version :``' , `[ v1.2 ]` , true)
            .addField('``👑 Bot Owner 👑 :``' , `[ <@480540559233122324> ]` , true)
            .addField('``Bot Uptime :``', [ timeCon(process.uptime()) ], true)
            .addField('``Bot Ping :``' , [ `${Date.now() - message.createdTimestamp}` + 'MS' ] , true)
            .addField('``Bot RAM Usage :``', `[ ${(process.memoryUsage().rss / 1048576).toFixed()}MB ]` , true)
            .addField('``TG - Servers :``', [ client.guilds.size ] , true)
            .addField('``TG - Channels :``' , `[ ${client.channels.size} ]` , true)
            .addField('``TG - Users :``' ,`[ ${client.users.size} ]` , true)
	    .addField('``TG Server Region :``' , `[ Eu - Central ]` , true)
            .addField('``Bot Name :``' , `[ ${client.user.tag} ]` , true)
            .addField('``Bot ID :``' , `[ ${client.user.id} ]` , true)
            .addField('``Bot Node :``' , `[ ${process.version} ]` , true)
                  .addField('``Bot Prefix :``' , `👑 [ - ] 👑` , true)
                  .addField('``Bot Language :``' , `[ Java Script ]` , true)
                  .setFooter('● 🔰 [ THE GRID™ - OFFICIAL - 2019© ] 🔰 ●')
	          .setTimestamp()

    })
}
	
    setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)
	
});

// ==================================================================

client.on('ready', function(){//npm i ms 
client.user.setStatus("dnd")
    var ms = 10000 ;
    var setGame = [`★ -Help | MusicBot ★`,`★ SERVERS : [${client.guilds.size}] ★`,`★ THE GRID™ ★`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`https://www.twitch.tv/TheRealPredvkill`);
    }, ms);

});

// ==================================================================

client.on('message', async msg =>{
	if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
    
    let args = msg.content.split(' ');

	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)

});


// ==================================================================

client.on("message", async message => {
	
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
	
    const command = args.shift().toLowerCase();
	
    if(message.author.id != "480540559233122324") return;
	
    if(message.author.bot) return;
	
    if (command == "leaveserver") {
	    
        if(!args[0] || args[1]) return message.reply(`| Type : **${prefix}leaveserver & <guild_id>** | :x:`);
	    	  
        let GuildId = client.guilds.get(args[0])
	
        if(!GuildId) return message.reply(`**:x: | Guild "ID" Is Not Detected | :x:**`);
	    
        GuildId.leave().then(m => message.channel.send("Done | I Have Left : **["+GuildId.name+"]** Server | ✅"))
    }     
})


// ==================================================================


client.on('guildCreate', guild => {
	
    var embed = new Discord.RichEmbed()
    
    .setThumbnail(client.user.avatarURL)
    
    .setColor('RANDOM')
    
    .setDescription(`:heart: **شكراً لك لإضافه البوت الى سيرفرك** :heart:`)
    
    .addField('**● Bot Version** :robot: :' , `**[ v1.2 ]**`)
    
    .addField('**● Bot CMD** 🔮 :' , `**Use -help For Bot Commands**`)
    
    .addField('**● Bot Owner** 👑 :' , `**[ <@480540559233122324> ]**`)
    
    .addField('**● Bot Name** 🔰 :' , `**[ ${client.user.tag} ]**`)
    
    .setFooter('🔰 [ THE GRID™ - OFFICIAL - 2019© ] 🔰')
    
    .setTimestamp()
    
    guild.owner.send(embed)
	
  });
		
// ==================================================================
		
const prefix = "-"

client.on('ready', () => {});

var download = function(uri, filename, callback) {

    request.head(uri, function(err, res, body) {

        console.log('content-type:', res.headers['content-type']);

        console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);

    });

};

// ==================================================================

client.on('message', function(message) {

    const member = message.member;

    const mess = message.content.toLowerCase();

    const args = message.content.split(' ').slice(1).join(' ');

    if (mess.startsWith(prefix + 'play')) {

        if (!message.member.voiceChannel) return message.channel.send('**:no_entry: | يجب ان تكون في روم صوتي**');

        if (args.length == 0) {

            let play_info = new Discord.RichEmbed()

                .setAuthor(message.author.username,message.author.avatarURL)
	    
	        .setThumbnail(client.user.avatarURL)
		
	        .addField(':notes: | **قم بإدراج رابط او اسم الأغنيه | :notes:**')
		            
                .setColor('RANDOM')
	    
	        .addField('**● BOT CMD** :robot: :' , `**Use -help For Bot Commands**`)
	    
	    	.addField('**● MUSIC CMD** :musical_note: : :' , `**Use -play For Playing Music**`)

	        .addField('**● BOT - VERSION** :robot: :' , `**[ v1.2 ]**`)
		
	        .setFooter('🔰 [ THE GRID™ - OFFICIAL - 2019© ] 🔰')
		 
                 message.channel.sendEmbed(play_info)

            return;

        }

        if (queue.length > 0 || isPlaying) {

            getID(args, function(id) {

                add_to_queue(id);

                fetchVideoInfo(id, function(err, videoInfo) {

                    if (err) throw new Error(err);

                    let play_info = new Discord.RichEmbed()

                        .setAuthor(message.author.username,message.author.avatarURL)

                        .addField(':play_pause: | **تمت إضافة الاغنيه بقائمة الإنتظار**', `:musical_note: **${videoInfo.title}** :musical_note:`)

                        .setColor("RANDOM")
		    
                        .setThumbnail(videoInfo.thumbnailUrl)
		    		    
                        .setFooter('🔰 [ THE GRID™ - OFFICIAL - 2019© ] 🔰')

                        message.channel.sendEmbed(play_info);

                        queueNames.push(videoInfo.title);

                        now_playing.push(videoInfo.title);

                });

            });

        }
	    
// ==================================================================

        else {

            isPlaying = true;

            getID(args, function(id) {

                queue.push('placeholder');

                playMusic(id, message);

                fetchVideoInfo(id, function(err, videoInfo) {

                    if (err) throw new Error(err);

                    let play_info = new Discord.RichEmbed()

                        .setAuthor(message.author.username,message.author.avatarURL)

                        .addField('**:arrow_forward: | تم التشغيل الموسيقى**' , `**Playing :notes: ${videoInfo.title} - Now!**`)

                        .setColor("RANDOM")
		 
		        .addField('● ``Channel ID :id: :``' , `${videoInfo.raw.channelId}`, true)
		    
		        .addField('● ``Like 👍 :``' , `${videoInfo.likeCount}`, true)
		    
		        .addField('● ``Dislike 👎 :``' , `${videoInfo.raw.dislikeCount}`, true)
		    
		        .addField('● ``Time The Video :clock11: :``' , `${videoInfo.duration.hours}:${videoInfo.duration.minutes}:${videoInfo.duration.seconds}`, true)
		    
                        .setThumbnail(videoInfo.thumbnails.high.url)
		    		    
                        .setFooter('🔰 [ THE GRID™ - OFFICIAL - 2019© ] 🔰')

                        message.channel.sendEmbed(play_info)
			

                });

            });

        }

    }
	
// ==================================================================

else if (mess.startsWith(prefix + 'next')) {

        if (!message.member.voiceChannel) return message.channel.send(':no_entry: | **يجب ان تكون في روم صوتي**');
	
            skip_song(message);

            var server = server = servers[message.guild.id];

            if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
	
	    message.channel.send({
	  
	    embed: new Discord.RichEmbed()
		    
	    .setThumbnail(client.user.avatarURL)
				
	    .addField(':track_next: | **تم تجآوز هذآ المقطع**')
		      
            .setAuthor(message.author.username,message.author.avatarURL)
      
            .setColor('RANDOM')
		
	    .setFooter('🔰 [ THE GRID™ - OFFICIAL - 2019© ] 🔰')
		 
	    .setTimestamp()				     
})
	
}
	
// ==================================================================
			
    else if (message.content.startsWith(prefix + 'volume')) {

        if (!message.member.voiceChannel) return message.channel.send(':no_entry: | **يجب ان تكون في روم صوتي**');

        if (args > 100) return message.channel.send(':sound: | **[1 - 100] : لا أكثر ولا أقل** | :sound:')

        if (args < 1) return message.channel.send(':sound: | **[1 - 100] : لا أكثر ولا أقل** | :sound:')

        dispatcher.setVolume(1 * args / 50);

        message.channel.sendMessage(`:loud_sound: | **[${dispatcher.volume*50}%] : مستوى الصوت** | :loud_sound:`);

    }
	
// ==================================================================

    else if (mess.startsWith(prefix + 'pause')) {

        if (!message.member.voiceChannel) return message.channel.send(':no_entry: | **يجب ان تكون في روم صوتي**');

            dispatcher.pause();
	    
	    message.channel.send({
	  
	    embed: new Discord.RichEmbed()
		    
	    .setThumbnail(client.user.avatarURL)

            .setAuthor(message.author.username,message.author.avatarURL)
				
	    .addField(':pause_button: | **تم إيقاف الموسيقى مؤقتا**')
		            
            .setColor('RANDOM')
		
	    .setFooter('🔰 [ THE GRID™ - OFFICIAL - 2019© ] 🔰')
		 
	    .setTimestamp()
		    
  })
	
}
	
// ==================================================================

    else if (mess.startsWith(prefix + 'resume')) {

        if (!message.member.voiceChannel) return message.channel.send(':no_entry: | **يجب ان تكون في روم صوتي**');

            dispatcher.resume();
	    
	    message.channel.send({
	  
	    embed: new Discord.RichEmbed()
		    
	    .setThumbnail(client.user.avatarURL)

            .setAuthor(message.author.username,message.author.avatarURL)
				
	    .addField(':arrow_forward: | **الان يتم تشغيل الموسيقى**')
		            
            .setColor('RANDOM')
		
	    .setFooter('🔰 [ THE GRID™ - OFFICIAL - 2019© ] 🔰')
		 
	    .setTimestamp()
		    
  })
	
}
	
// ==================================================================

    else if (mess.startsWith(prefix + 'stop')) {

        if (!message.member.voiceChannel) return message.channel.send(':no_entry: | **يجب ان تكون في روم صوتي**');

        var server = server = servers[message.guild.id];

        if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
	    
	    message.channel.send({
	  
	    embed: new Discord.RichEmbed()
		    
	    .setThumbnail(client.user.avatarURL)

            .setAuthor(message.author.username,message.author.avatarURL)
				
	    .addField(':stop_button: | **تم إيقآف الموسيقى**')
		            
            .setColor('RANDOM')
		
	    .setFooter('🔰 [ THE GRID™ - OFFICIAL - 2019© ] 🔰')
		 
	    .setTimestamp()
		    
  })
	
}
	
// ==================================================================

    else if (mess.startsWith(prefix + 'join')) {

        if (!message.member.voiceChannel) return message.channel.send(':no_entry: | **يجب ان تكون في روم صوتي**');
	    
	    message.member.voiceChannel.join()
	    
	    message.channel.send({
	  
	    embed: new Discord.RichEmbed()
		    
	    .setThumbnail(client.user.avatarURL)

            .setAuthor(message.author.username,message.author.avatarURL)
				
	    .addField(':ballot_box_with_check: | **● I AM READY FOR FIGHT ●**')
		    
	    .addField('**● BOT CMD** 🔮 :' , `**Use -help For Bot Commands**`)
                
            .setColor('RANDOM')
		
	    .setFooter('🔰 [ THE GRID™ - OFFICIAL - 2019© ] 🔰')
		 
	    .setTimestamp()
		    
  })
	
}
	
// ==================================================================

    else if (mess.startsWith(prefix + 'play')) {

        if (!message.member.voiceChannel) return message.channel.send(':no_entry: | **يجب ان تكون في روم صوتي**');

        if (isPlaying == false) return message.channel.send(':stop_button: | ** تم التوقيف الموسيقى**');

        let playing_now_info = new Discord.RichEmbed()

            .setAuthor(message.author.username,message.author.avatarURL)

            .addField(':play_pause: | تمت إضافة الاغنيه بقائمة الإنتظار', `**${videoInfo.title}**`)

            .setColor("RANDOM")

            .setThumbnail(videoInfo.thumbnailUrl)

        message.channel.sendEmbed(playing_now_info);

    }

});

// ==================================================================

function skip_song(message) {

    if (!message.member.voiceChannel) return message.channel.send(':no_entry: | **يجب ان تكون في روم صوتي**');

    dispatcher.end();

}

function playMusic(id, message) {

    voiceChannel = message.member.voiceChannel;

    voiceChannel.join().then(function(connectoin) {

        let stream = ytdl('https://www.youtube.com/watch?v=' + id, {

            filter: 'audioonly'

        });

        skipReq = 0;

        skippers = [];

        dispatcher = connectoin.playStream(stream);

        dispatcher.on('end', function() {

            skipReq = 0;

            skippers = [];

            queue.shift();

            queueNames.shift();

            if (queue.length === 0) {

                queue = [];

                queueNames = [];

                isPlaying = false;

            }

            else {

                setTimeout(function() {

                    playMusic(queue[0], message);

                }, 500);

            }

        });

    });

}

// ==================================================================

function getID(str, cb) {

    if (isYoutube(str)) {

        cb(getYoutubeID(str));

    }

    else {

        search_video(str, function(id) {

            cb(id);

        });

    }

}

// ==================================================================

function add_to_queue(strID) {

    if (isYoutube(strID)) {

        queue.push(getYoutubeID(strID));

    }

    else {

        queue.push(strID);

    }

}

// ==================================================================

function search_video(query, cb) {

    request("https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=" + encodeURIComponent(query) + "&key=" + yt_api_key, function(error, response, body) {

        var json = JSON.parse(body);

        cb(json.items[0].id.videoId);

    });

}

function isYoutube(str) {

    return str.toLowerCase().indexOf('youtube.com') > -1;

}
	
   
// ==================================================================


client.on('message', message => {
	
  if (message.author.bot) return;
	
   if (message.content === prefix + "help") {
	   
  if(!message.content.startsWith(prefix)) return;
	   
  if(cooldown.has(message.author.id)){
	  
  message.delete();
	  
    return message.reply("**:no_entry: You have to wait [5] seconds between commands :no_entry:**")
  }
  //if(!message.member.hasPermission("ADMINISTRATOR")){
	   
    cooldown.add(message.author.id);
 // }      
   message.channel.send('**:white_check_mark: ● Done , تــــم ارســالك في الخــاص ● :e_mail:**').then(m => m.delete(60000));
	   
   const embed = new Discord.RichEmbed()
   
  .setThumbnail(client.user.avatarURL)
   
  .addField('**● BOT - VERSION** :robot: :' , `**[ v1.2 ]**`)
   
  .addField('**● BOT - OWNER** 👑 :' , `**[ <@480540559233122324> ]**`)
   
  .setAuthor(message.author.username,message.author.avatarURL)
   
  .setColor('RANDOM')
   
  .setDescription(`**

:notes:  [❖═══ ● برفكس البوت ( - ) & أوامر الميوزك ● ════❖] :notes: 
  
❖═════════════════════════════════════❖  

● :headphones: : ${prefix}play :arrow_right: لتشغيل اغنية ●

● :headphones: : ${prefix}next :arrow_right: للإنتقاال الى الاغنيه التاليه اذا كان هناك بقائمة الانتظار ●

● :headphones: : ${prefix}volume :arrow_right: لتغير حجم الصوت ●

● :headphones: : ${prefix}resume :arrow_right: لاعادت تشغيل الاغنية الموجودة ●

● :headphones: : ${prefix}stop :arrow_right: الخروج من رومك الصوتي ●

● :headphones: : ${prefix}pause :arrow_right: ايقاف الاغنية مؤقتا ●

❖═════════════════════════════════════❖

:tools:   [❖═══ ● 🔰 [ RINZLER STATS ] 🔰 ● ═══❖] :tools:  

● :rocket: : ${prefix}Rinzler :arrow_right: STATS BOT ●


❖═════════════════════════════════════❖

:heavy_plus_sign: [❖═════ ● Other Bot Commands ● ═══════❖] :heavy_plus_sign:   

● :books: : سيرفر دعم :arrow_right: https://discord.gg/PzbDJwx ●

:hearts: [❖══════ ● المزيد قريبا ان شاء الله! ● ═══════❖] :hearts:**`)
   
.setFooter('❖══ ● 🔰 [ THE GRID™ - OFFICIAL - 2019© ] 🔰 ● ══❖')
.setTimestamp()   
   
message.author.sendEmbed(embed)
   
    setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)
	   
  }
		  
});

// ==================================================================


client.on('message', message => {
	
    if(message.content === prefix + "restart") {
	    
	     if(!message.channel.guild) return message.reply('**:x: This Command Only For Servers :x:**').then(m => m.delete(60000));
          client.channels.get("542905235241304065").send({
		  
	     embed: new Discord.RichEmbed()
		  
	    .setAuthor(client.user.username,client.user.avatarURL)
		  
            .setThumbnail(client.user.avatarURL)
		  
            .setColor('b58900')
		  
	    .setFooter('● 🔰 [ THE GRID™ - OFFICIAL - 2019© ] 🔰 ●')
		  
	    .setTimestamp()
		  
            .setTitle('**● :robot: [RINZLER] IS REBOOTING NOW BY THE OWNERS !**')
		  
	    .setDescription(`**⚠️ PLEASE WAIT TILL EVERYTHING SETUP ⚠️**`)
		  
		 });
	    
	    console.log(`${message.author.tag} [ ${message.author.id} ] Rinzler Has Restarted Successfully.`);
            console.log(`Rinzler Is Restarting Now..`);
            setTimeout(() => {
            client.destroy();
            client.login(process.env.BOT_TOKEN);
            },3000);

}
});

// ==================================================================


 client.on('message', message => {
	 
    if(message.content === prefix + "shutdown") {
	    
	    if(!message.channel.guild) return message.reply('**:x: This Command Only For Servers :x:**').then(m => m.delete(60000));
	    
            client.channels.get("542905235241304065").send({
		    
	    embed: new Discord.RichEmbed()
		    
	    .setAuthor(client.user.username,client.user.avatarURL)
		    
            .setThumbnail(client.user.avatarURL)
		    
            .setColor('dc322f')
		    
	    .setFooter('● 🔰 [ THE GRID™ - OFFICIAL - 2019© ] 🔰 ●')
		    
	    .setTimestamp()
		    
            .setTitle('**● :robot: [RINZLER] IS SHUTDOWN NOW BY THE OWNERS !**')
		    
	    .setDescription(`**⚠️ PLEASE WAIT TILL EVERYTHING SETUP ⚠️**`)
		    
		    });
	    
            console.log(`${message.author.tag} [ ${message.author.id} ] Rinzler Has ShutDown Successfully.`);
            setTimeout(() => {
            client.destroy();
            },3000);
}
	 
});    

// ==================================================================

client.on('message', message => {
	
  if (message.content === ('-Rinzler')) {
	  
  if(!message.content.startsWith(prefix)) return;
	  
  if(cooldown.has(message.author.id)){
	  
    message.delete();
	  
    return message.reply("**:no_entry: You have to wait [5] seconds between commands :no_entry:**")
  }
  //if(!message.member.hasPermission("ADMINISTRATOR")){
	  
    cooldown.add(message.author.id);
 // }        
  message.channel.send({
	  
      embed: new Discord.RichEmbed()
	  
          .setAuthor(client.user.username,client.user.avatarURL)
	  
          .setThumbnail(client.user.avatarURL)
	  
          .setColor('RANDOM')
	  .addField('**Bot Version** :robot: :' , `[ v1.2 ]`, true)
          .addField('**Bot Ping** 🚀 :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
          .addField('**Servers** 📚 :', [client.guilds.size], true)
          .addField('**Channels** 📝 :' , `[ ${client.channels.size} ]` , true)
          .addField('**Users** 🔮 :' ,`[ ${client.users.size} ]` , true)
          .addField('**Bot Name** 🔰 :' , `[ ${client.user.tag} ]` , true)
          .addField('**Bot Owner** 👑 :' , `[ <@480540559233122324> ]` , true)
	  .setFooter('🔰 [ THE GRID™ - OFFICIAL - 2019© ] 🔰')
          .setTimestamp()   
  
  })
}

    setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)
	
	
});

// ==================================================================

client.on('ready',async () => {

  client.channels.find(ch => ch.id === "541630258139365378" && ch.type === 'voice').join();

});

// ==================================================================

client.on('message', message =>{

    if(message.content === '-BOTMS'){
	    
 if(!message.channel.guild) return message.reply('**:x: This Command Only For Servers :x:**').then(m => m.delete(60000));    

let start = Date.now(); message.channel.send('pong').then(message => { 

message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);

    });

    }

});

// ==================================================================

                 client.login(process.env.BOT_TOKEN);

// ==================================================================

 // THIS BOT [RINZLER] CREATED BY [THE RARE RANGER] - 2019© //
////////////// 🔰 THE DAMNATION™ & THE GRID™ 🔰 //////////////

// ==================================================================
