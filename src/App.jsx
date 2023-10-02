import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HalamanHome from './pages/HalamanHome';
import HasilPencarian from './pages/HasilPencarian';
import DetailFilm from './pages/DetailFilm';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HalamanHome />} />
          <Route path='/hasil-pencarian' element={<HasilPencarian />} />
          <Route path='/detail-film' element={<DetailFilm />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
