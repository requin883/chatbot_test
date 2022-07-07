async function processProduct(objeto){
    objeto = await objeto;
    objeto=objeto.map(items=>{
        label=items.nombre;
        amount=items.precio;
    });

    console.log(objeto)
    return objeto;
}

module.exports=processProduct;