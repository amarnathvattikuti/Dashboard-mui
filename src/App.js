import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/navbar';
import Box from '@mui/material/Box';
import ContentView from './components/contenView';
import ListView from './components/ListView';

function App() {
  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <BrowserRouter>
      <ResponsiveAppBar />
        <Routes>
        <Route path="/" element={<ContentView />} />
          <Route path="/list" element={<ListView />} />
        </Routes>
      </BrowserRouter>
      </Box>
    </>
  );
}

export default App;
