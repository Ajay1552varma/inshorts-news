import React from 'react'
import {Toolbar,AppBar,styled} from '@mui/material'
import {Menu} from '@mui/icons-material';
import Inshorts from '../images/inshorts.png'

const NewAppBar=styled(AppBar)`
background:#fff;
height:70px;
`
const MenuIcon=styled(Menu)`
color:#000;
`
const Image=styled('img')({
  height:55,
  margin:'auto',
  paddingRight:70,
})

const Header = () => {
 
  return (
    <div>
        <NewAppBar position='static'>
          <Toolbar>
           <MenuIcon/>
            <Image src={Inshorts} alt="logo"/>
          </Toolbar>
        </NewAppBar>
    </div>
  )
}

export default Header;