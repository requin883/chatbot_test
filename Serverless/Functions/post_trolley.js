const connectDB = require("../Utils/connect_DB");
const handler = async function(event, context) {
    try{
        if(event.httpMethod=="POST"){
    const client = await connectDB();
    const trolley = client.db("NodeApiStore").collection("Trolley");
    const newTrolley = await trolley.find({id:3}).toArray();
    if(newTrolley.length == false){
        await trolley.insertOne({id:3});
        return({
            statusCode:200,
            body:"Inserción completada"
        })
    }
    return({
        statusCode:202,
        body:"Inserción no completada"
    })
    }
    }catch(err){
        console.log(err);
    }
}

module.exports = {handler};