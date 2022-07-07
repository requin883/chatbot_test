require('module-alias/register');
const TeleBot = require("telebot");
const getProducts = require("@mod/products");
const createTrolley = require("@mod/trolley");
const getTrolley = require("@mod/show_trolley");
const fetchProduct = require("@mod/ask_busqueda");
const pushProduct = require("@mod/ask_push")
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

    bot.on('/view',msg=>{
        getTrolley(msg,bot);
    });

    bot.on('/add',msg=>{
        createTrolley(msg.from.id);
        bot.sendMessage(msg.from.id,`${msg.from.first_name}, por favor indica el ID del objecto que desea agregar al carrito`, {ask: 'enviar'});
    });

    bot.on('ask.enviar', msg=>{
        pushProduct(msg,bot);
    })

    bot.on('/search',msg=>{
        const id=msg.from.id;
        bot.sendMessage(msg.from.id,"Debes escribir el 🆔 para mostrar un producto", {ask:'busqueda'});
    });

    bot.on('ask.busqueda', msg=>{
        fetchProduct(msg,bot);
    });


    //-------------------------------------- Enviar mapas

    bot.on('/zona',msg=>{
        let replyMarkup=boton(msg.data,bot);
        bot.sendMessage(msg.from.id, '¡Trabajamos de 9:00 A.M a 6:00 P.M de lunes a viernes! 😎\n\nTambién tenemos delivery gratis en estas ubicaciones 🔥, selecciona una para saber como llegar', {replyMarkup})
    });


    bot.on('/otrasZona',msg=>{
        let replyMarkup=boton(msg.data,bot);
        bot.sendMessage(msg.from.id, 'Aprende a llegar nuestros puntos de entrega', {replyMarkup});
    });

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

bot.start();