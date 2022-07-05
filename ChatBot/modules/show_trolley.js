const instance = require("@utils");
const boton = require("./buttons");

async function getTrolley(msg,bot){
    let id = msg.from.id;
    let name = msg.from.first_name || msg.from.username;
    let replyMarkup = boton(msg.data,bot);
    try{
        const res = await instance.get(`trolley?id=${10}`);
        const resData = res.data;
        if(!resData){
            replyMarkup = boton("/empty",bot);
            return bot.sendMessage(id, 
                `${name}! El carrito todavía está vació por favor ingresa algún artículo para empezar a llenar tu carrito🔥`,{replyMarkup});
            }
        let {Products} =resData[0];
        bot.sendMessage(id,Products,{replyMarkup});
    }catch(err){
    console.log(err);
    }
}
module.exports = getTrolley;