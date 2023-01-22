import mongoose from 'mongoose'
// if we will not add this below line it will throw just warning
mongoose.set('strictQuery', true);
const connection=async(username,password)=>{
   
    const URL1=`mongodb://${username}:${password}@ac-lpywwwm-shard-00-00.lk6gqnt.mongodb.net:27017,ac-lpywwwm-shard-00-01.lk6gqnt.mongodb.net:27017,ac-lpywwwm-shard-00-02.lk6gqnt.mongodb.net:27017/inshort1?ssl=true&replicaSet=atlas-exzoog-shard-0&authSource=admin&retryWrites=true&w=majority`;
    //const URL=`mongodb://${username}:${password}@ac-lgdfytq-shard-00-00.zfhg3ns.mongodb.net:27017,ac-lgdfytq-shard-00-01.zfhg3ns.mongodb.net:27017,ac-lgdfytq-shard-00-02.zfhg3ns.mongodb.net:27017/inshorts-clone?ssl=true&replicaSet=atlas-s8zwvc-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
    
       await mongoose.connect(URL1,{useNewUrlParser:true})
       console.log("database connected successfully");
    }
    catch(error){
        console.log("Error While connecting" +error);
    }
}
export default connection;