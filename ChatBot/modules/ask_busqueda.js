const boton = require("./buttons");
const instance = require("@utils");

async function fetchProduct(msg,bot){
    if(msg.text.startsWith("/")){
        return "";
    }
    const mensaje=Number(msg.text);
    const id = msg.from.id;
    let mostrarMsg = "";
    let replyMarkup = boton("/show",bot);
    if(!mensaje || mensaje<1 || mensaje>20){
        return bot.sendMessage(id,"Por favor introduzca un número entre 1 y 20",{replyMarkup});
    }else{
    try{
        let response=await instance.get(`get_products?id=${mensaje}`);
        let product=response.data.products;
        const [producto] = product.filter(product=>mensaje==product.id);    
        mostrarMsg=`Datos del producto:
        ID: ${producto.id}
        Nombre: ${producto.title}
        Precio: ${producto.price}$
        Categoria: ${producto.category}
        Imagen del Producto:${producto.image}`;
        return bot.sendMessage(msg.from.id, mostrarMsg,{replyMarkup});
    }catch(error){
        console.log(error);
    }}
}



module.exports = fetchProduct;