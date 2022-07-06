require('module-alias/register');
const TeleBot = require("telebot");
const getProducts = require("@mod/products");
const createTrolley = require("@mod/trolley");
const getTrolley = require("@mod/show_trolley");
const fetchProduct = require("@mod/ask_busqueda");
const pushProduct = require('@mod/ask_push');
require('dotenv').config();
let boton=require('@mod/buttons');
const bot = new TeleBot({
    token:process.env.TOKEN,
    usePlugins: ['commandButton', 'askUser']
    });

    bot.on('/start',msg=>{
        let replyMarkup=boton(msg.text,bot);
        bot.sendMessage(msg.from.id, `¡Saludos ${msg.from.first_name}! Bienvenido a nuestra tienda`, {replyMarkup})
    }); 

    bot.on('/back',msg=>{
        let replyMarkup=boton(msg.data,bot);
        bot.sendMessage(msg.from.id, `¿Qué deseas hacer, ${msg.from.first_name}?`, {replyMarkup});
    }); 
    
    bot.on('/show',msg=>{
        let replyMarkup=boton(msg.data,bot);
        getProducts(bot,msg,replyMarkup);

    });

    bot.on('/pago',msg=>{
        let replyMarkup=boton(msg.data,bot);
        bot.sendMessage(msg.from.id,`${msg.from.first_name}, actualmente aceptamos`,{replyMarkup});
    });

    bot.on('/zona',msg=>{
        let replyMarkup=boton(msg.data,bot);
        bot.sendMessage(msg.from.id, 'Trabajamos de 9:00 A.M - 6:00 P.M de lunes a viernes, y realizamos entregas en:', {replyMarkup});
    });

    bot.on('/view',msg=>{
        getTrolley(msg,bot);
    });

    bot.on('/add',msg=>{
        let replyMarkup=boton(msg.data,bot);
        createTrolley(msg.from.id);
        bot.sendMessage(msg.from.id,"Añadiendo al carrito", {ask: 'enviar'});
    });

    bot.on('ask.enviar', msg=>{
        pushProduct(msg, bot);
    })

    bot.on('/search',msg=>{
        const id=msg.from.id;
        bot.sendMessage(msg.from.id,"Ingrese un ID para buscar producto", {ask:'busqueda'});
    });

    bot.on('ask.busqueda', msg=>{
        fetchProduct(msg,bot);
    });

    //-------------------------------------- Enviar mapas

    bot.on('/map1', msg => {
        let replyMarkup =boton(msg.data, bot);
        bot.sendLocation(msg.from.id, [10.644715920875937, -71.61821645983906], {replyMarkup});
    });

    bot.on('/map2', msg => {
        let replyMarkup = boton(msg.data, bot);
        bot.sendLocation(msg.from.id, [10.671812671276458, -71.65369837326266], {replyMarkup});
    });
    bot.on('/map3', msg => {
        let replyMarkup = boton(msg.data, bot);
        bot.sendLocation(msg.from.id, [10.59882925256173, -71.65087523348457], {replyMarkup});
    });

    //-------------------------------------- Generar factura

    // bot.on('/fact',msg=>{
    //     let replyMarkup = bot.inlineKeyboard(boton(msg.data,bot))
    //     bot.sendMessage(msg.from.id,"Reviza tu factura para confirmar tu pago", {replyMarkup});
    // });

    bot.on('/fact', (msg) => {
        const inlineKeyboard = boton(msg.data,bot);
        return bot.sendInvoice(msg.from.id, {
            title: 'Factura de compra',
            description: 'Node API Store',
            payload: 'telebot-test-invoice',
            providerToken: '284685063:TEST:MGZlNzhkZjkwOGZm',
            startParameter: 'pay',
            currency: 'USD',
            prices: [
                {label: 'Tea', amount: 125},
                {label: 'For testing!', amount: 1250},
            ],
            need: {email: true, phoneNumbe: false},
            // needShippingAdress: true,
            // isFlexible: false,
            // sendEmailToProvider: true,
            replyMarkup: inlineKeyboard
        }).then(data => {
            console.log('OK', data);
        }).catch(error => {
            console.log('ERROR', error);
        });
    
    });
    
    // bot.on('shippingQuery', (msg) => {
    //     console.log('shippingQuery', msg);
    // });
    
    // bot.on('preShippingQuery', (msg) => {
    //     console.log('preShippingQuery', msg);
    
    //     const id = msg.id;
    //     const isOk = true;
    
    //     return bot.answerPreCheckoutQuery(id, isOk);
    
    // });
    
    bot.on('successfulPayment', (msg) => {
        console.log('successfulPayment', msg);
    
        return bot.sendMessage(msg.from.id, `Gracias por tu compra, ${msg.from.first_name}!`);
    
    });
    
    
    
bot.start();