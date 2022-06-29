import Home from './components/pages/Home/Home';
import { Container } from 'react-bootstrap';
import Navigation from './components/views/Navigation/Navigation';
import { Routes, Route } from 'react-router';
import { useAppDispatch } from './redux/hooks';
import { fetchTablesData } from './redux/slices/tablesSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => void dispatch(fetchTablesData()), [dispatch]);

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
