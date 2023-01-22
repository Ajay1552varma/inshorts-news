import { data } from "./constant/data.js";
import news from "./model/newSchema.js";


const DefaultData=async()=>{
    try{
      await news.insertMany(data);
      console.log("Data imported successfully");
    }
    catch(error){
        console.log('Error',error.message);
    }
}
export default DefaultData;