require('module-alias/register');
const instance = require("@utils");
const boton = require("./buttons");

async function getTrolley(msg,bot){
    let id = msg.from.id;
    let name = msg.from.first_name || msg.from.username;
    let replyMarkup = boton(msg.data,bot);
    try{
        const res = await instance.get(`trolley?id=${id}`);
        const products = res.data[0].data;
        if(products.length==0){
            replyMarkup = boton("/empty",bot);
            return bot.sendMessage(id,`${name}! El carrito todavía está vació por favor ingresa algún artículo para empezar a llenar tu carrito🔥`,{replyMarkup});
            }
        products = products.join("\n");
        bot.sendMessage(id,products,{replyMarkup});
    }catch(err){
    console.log(err);
    }
}

module.exports = getTrolley;