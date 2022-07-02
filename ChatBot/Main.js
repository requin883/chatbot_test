const TeleBot = require("telebot");
const axios = require("axios");
require('dotenv').config();
const bot = new TeleBot({
    token:process.env.TOKEN,
    usePlugins: ['commandButton']
    });

    bot.on('/start',msg=>{
        bot.sendMessage(msg.from.id,"Hello World!");
    }); 
    
    
    
    
    
    
    
    
    
    bot.start();