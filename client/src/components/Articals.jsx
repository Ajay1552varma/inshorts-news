import {useEffect,useState} from 'react';
import { Box } from '@mui/material';
import { getNews } from '../service/api.js';
import Artical from './Artical';

const Articals = () => {
  const [news,setNews]=useState([]);
    useEffect(()=>{
       dailyNews(); 
    },[])
    const dailyNews=async()=>{
        let response=await getNews();
        setNews(response.data);
        console.log(response.data);
    }
  return (
    <Box>
        {
          news.map(data=>(
            <Artical data={data}/>
          ))
        }
    </Box>
  )
}

export default Articals