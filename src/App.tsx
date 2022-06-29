import Home from './components/pages/Home/Home';
import { Container } from 'react-bootstrap';
import Navigation from './components/views/Navigation/Navigation';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <Container>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
