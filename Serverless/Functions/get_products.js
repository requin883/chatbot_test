const getDB = require("../Database/get_database");

const handler = async function(event, context) {
    try{
    const products = await getDB();
        return({
            statusCode:200,
            body:JSON.stringify({products})
        })
    }catch(err){
        console.log(err);
    }
}

module.exports = {handler};