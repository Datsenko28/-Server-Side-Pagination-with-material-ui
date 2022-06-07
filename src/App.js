
import { Container} from '@mui/material'
import {Route, Routes} from 'react-router-dom'
import HomePage from './HomePage';
import About from './About';
import NotFound from './NotFound';
function App() {
  

  return (
    <Container sx={{marginTop: 5}} maxWidth="md">
      <Routes>
        <Route  path='/' element={<HomePage/>}/>
        <Route  path='/About' element={<About/>}/>
        <Route  path='*' element={<NotFound/>}/>
      </Routes>
    </Container>
  );
};

export default App;