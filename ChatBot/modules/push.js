const instance = require("@utils");

async function enviarProducto(id,objeto){
    try{
    await instance.post(`post_products?id=${id}&info=${objeto}`)
    }catch(err){
        console.log(err);
    }
}
module.exports = enviarProducto;