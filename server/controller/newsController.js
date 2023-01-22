import news from "../model/newSchema.js"

export const getnews=async(req,res)=>{
try{
  let data=await news.find({})
  res.status(200).json(data);
}
catch(error){
res.staus(500).json({message:data.message})
}
}