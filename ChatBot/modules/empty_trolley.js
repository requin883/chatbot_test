require('module-alias/register');
const instance = require("@utils/utils");

async function emptyTrolley(id){
    // let id = msg.from.id;
    const updateTrolley = await instance.put(`trolley?id=${id}`);
    console.log(updateTrolley);
}
emptyTrolley("1882082654");