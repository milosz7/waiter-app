import Home from './components/pages/Home/Home';
import { Container } from 'react-bootstrap';
import Navigation from './components/views/Navigation/Navigation';
import { Routes, Route } from 'react-router';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchTablesData, getTablesStatus } from './redux/slices/tablesSlice';
import Table from './components/pages/Table/Table';
import Footer from './components/views/Footer/Footer';
import NotFound from './components/pages/NotFound/NotFound';

function App() {
  const dispatch = useAppDispatch();
  const tablesStatus = useAppSelector(getTablesStatus);
  if (tablesStatus === 'idle') {
    dispatch(fetchTablesData());
  }

  return (
    <Container className="vh-100 d-flex flex-column">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/table/:id" element={<Table />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
