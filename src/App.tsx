import Home from './components/pages/Home/Home';
import { Container } from 'react-bootstrap';
import Navigation from './components/views/Navigation/Navigation';
import { Routes, Route } from 'react-router';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchTablesData, getTablesStatus } from './redux/slices/tablesSlice';
import Table from './components/pages/Table/Table';

function App() {
  const dispatch = useAppDispatch();
  const tablesStatus = useAppSelector(getTablesStatus);
  if (tablesStatus === 'idle') {
    dispatch(fetchTablesData());
  }

  return (
    <Container>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/table/:id" element={<Table />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
