const instance = require("@utils");

async function enviarProducto(id,products){
    try{
        let URI = `post_products?id=${id}&data=${products}`;
        const res = await instance.post(URI);
        console.log(res);
    }catch(err){
        console.log(err);
    }
}

module.exports = enviarProducto;