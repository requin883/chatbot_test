const connectDB = require("../Utils/connect_DB");
const handler = async function(event, context) {
    try{
        let {id} = event.queryStringParameters;
        if(event.httpMethod=="POST"){
    const client = await connectDB();
    const trolley = client.db("NodeApiStore").collection("Trolley");
    const newTrolley = await trolley.find({id}).toArray();
    if(newTrolley.length == false){
        await trolley.insertOne({id});
        return({
            statusCode:200,
            body:"Inserción completada"
        })
    }
    return({
        statusCode:202,
        body:"Este carrito ya existe"
    })
    }
    }catch(err){
        console.log(err);
    }
}

module.exports = {handler};