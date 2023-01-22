import Header from './components/Header';
import './App.css'
import InfoHeader from './components/InfoHeader';
import { Box ,styled} from '@mui/material';
import Articals from './components/Articals';

const Container=styled(Box)`
width:60%;
margin:40px auto 0 auto;
`

function App() {
  return (
    <Box>
      <Header/>
      <Container>
          <InfoHeader/>
      </Container>
      <Articals/>
    </Box>
  );
}

export default App;
