const instance = require("../Utils/Utils");
const boton = require("./buttons");
const numero='5017414673';

async function getfactura(ID){
    try {
        const res=await instance.get(`trolley?id=${ID}`)
        let products=res.data[0].data;
        let objeto=products.map(items=>({
            "label":items.nombre,
            'amount':parseInt(items.precio.slice(1,items.precio.lenght))*100,
        }
        ));
        console.log(objeto)
        return objeto;
    }catch (error) {
        console.log(error)
    }
}

getfactura(numero);

module.exports=getfactura;