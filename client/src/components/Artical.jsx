import React from 'react'
import { Card,CardContent,Grid,styled ,Typography} from '@mui/material'

const StyleCard=styled(Card)`
width:60%;
margin:40px auto 0 auto;
margin-bottom:20px;
box-shadow:0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0/ 12%)
`
const Container=styled(CardContent)`
padding:8px;
padding-bottom:4px !important;
`
const Text=styled(Typography)`
font-weight:300;
font-size:22px;
line-height:27px;
`

const Image=styled('img')({
    height:268,
    width:'88%',
    objectFit:'cover',
    borderRadius:5,

})

const RightContainer=styled(Grid)`
margin:5px 0 0 -25px;
`
const Auther=styled(Grid)`
color:#808290;
font-size:12px;
line-height:22px;
`
const Discription=styled(Typography)`
line-height:22px;
color:#44444d;
margin-top:5px;
`




const Artical = ({data}) => {
  return (
    <StyleCard>
        <Container>
           <Grid container>
            <Grid lg={5} sm={5} xs={12} item>
               <Image src={data.url} alt="error"/>
            </Grid>
            <RightContainer lg={7} md={7} sm={7} xs={12} item>
               <Text>{data.title}</Text>
               <Auther>
                <b>Short</b> by {data.author}/ {new Date(data.timestamp).toDateString()}
               </Auther>
               <Discription>{data.description}</Discription>
               <Typography>read more at <a rel="noreferrer" href={data.link} target="_blank">{data.publisher}</a></Typography>
            </RightContainer>
           </Grid>
        </Container>
    </StyleCard>
  )
}

export default Artical