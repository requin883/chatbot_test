const connectDB = require("@Utils");

const handler = async (event,context)=>{
    // let {id,data} = event.queryStringParameters;
    let id = "662825635";
    let data = [1,2,3,4,5,6,7];
    let finaldata = {$set:{data}}
    try{
    const client = await connectDB();
    const trolley = client.db("NodeApiStore").collection("Trolley");
    const newTrolley = await trolley.find({id}).toArray();
    if (newTrolley.length!=0){
    const updatedTrolley = await trolley.updateOne({id},finaldata);
    return({
        statusCode:200,
        body:JSON.stringify(newTrolley)
    })
}else{
    return({
        statusCode:200,
        body:"No Existe"
    })
}
    }catch(error){
        console.log(error);
    }
}

module.exports = {handler};