import React from 'react';
import { Box ,Typography,styled} from '@mui/material';

const Container=styled(Box)`
background:#f44336;
color:white;
display:flex;
align-items:center;
height:48px;
margin-bottom:30px;
`
const Typo=styled(Typography)`
font-size:14px;
font-weight:300;
margin-left:50px;
`
const Image=styled('img')({
    height:35,
    '&:last-child':{
        margin:'0 50px 0 20px'
    }
})

const InfoHeader = () => {
    const img1='https://assets.inshorts.com/website_assets/images/appstore.png';
    const img2='https://assets.inshorts.com/website_assets/images/playstore.png';
  return (
    <Container>
        <Typo>For the best experience use inshorts app on your smartphone</Typo>
        <Box style={{display:'flex',marginLeft:'auto'}}>
           <Image src={img1} alt="apple" />
           <Image src={img2} alt="appstore" />
        </Box>
    </Container>
  )
}

export default InfoHeader;