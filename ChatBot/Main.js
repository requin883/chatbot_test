const TeleBot = require("telebot");
const getProducts = require("./modules/products")
require('dotenv').config();
let {boton}=require('./Buttons/buttons');
const bot = new TeleBot({
    token:process.env.TOKEN,
    usePlugins: ['commandButton']
    });

    bot.on('/start',msg=>{
        let replyMarkup=bot.inlineKeyboard(boton(msg.text,bot))
        bot.sendMessage(msg.from.id,"Menu Principal",{replyMarkup});
    }); 

    bot.on('/back',msg=>{
        let replyMarkup=bot.inlineKeyboard(boton(msg.data,bot))
        bot.sendMessage(msg.from.id,"Menu Principal",{replyMarkup});
    }); 
    
    bot.on('/show',msg=>{
        let replyMarkup=bot.inlineKeyboard(boton(msg.data,bot))
        getProducts(bot,msg,replyMarkup);
    });

    bot.on('/pago',msg=>{
        let replyMarkup=bot.inlineKeyboard(boton(msg.data,bot))
        bot.sendMessage(msg.from.id,"Mostrando metodos de Pago",{replyMarkup});
    });

    bot.on('/zona',msg=>{
        let replyMarkup=bot.inlineKeyboard(boton(msg.data,bot))
        bot.sendMessage(msg.from.id,"Mostrando delivery",{replyMarkup});
    });

    bot.on('/view',msg=>{
        let replyMarkup=bot.inlineKeyboard(boton(msg.data,bot))
        bot.sendMessage(msg.from.id,"Mostrando Carrito",{replyMarkup});
    });

    bot.on('/add',msg=>{
        let replyMarkup=bot.inlineKeyboard(boton(msg.data,bot))
        bot.sendMessage(msg.from.id,"Añadiendo al carrito",{replyMarkup});
    });

    bot.on('/fact',msg=>{
        let replyMarkup=bot.inlineKeyboard(boton(msg.data,bot))
        bot.sendMessage(msg.from.id,"Mostrando Factura",{replyMarkup});
    });

    bot.on('/search',msg=>{
        let replyMarkup=bot.inlineKeyboard(boton(msg.data,bot))
        bot.sendMessage(msg.from.id,"Mostrando informacion",{replyMarkup});
    });
    
bot.start();