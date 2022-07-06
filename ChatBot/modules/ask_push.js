const instance=require('@Utils')
const enviarProducto=require('./push');

async function pushProduct(msg,bot);{
    let ID=msg.from.id;
    let objeto={};
    const numero=Number(msg.text);
    if(!numero || numero<1 || numero>20){
        return bot.sendMessage(id,"Por favor introduzca un número entre 1 y 20",{replyMarkup});
    }else{
        try{
            let response=await instance.get(`get_products?id=${numero}`);
            let product=response.data.products;
            const [producto] = product.filter(product=>numero==product.id);
            objeto.ID=JSON.stringify(producto.id);
            objeto.nombre=producto.title;
            objeto.precio=JSON.stringify(producto.price);
            console.log(objeto)
            enviarProducto(ID,objeto);
            bot.sendMessage(ID, "Producto añadido al carrito")
    }catch(error){
        console.log(error);
        }
    }
}

module.exports=pushProduct;