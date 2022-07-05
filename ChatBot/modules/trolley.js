const instance = require("../Utils/Utils");

async function createTrolley(id){
    try{
    const res = await instance.post(`trolley?id=${id}`)
    }catch(err){
        console.log(err);
    }
}
module.exports = createTrolley;