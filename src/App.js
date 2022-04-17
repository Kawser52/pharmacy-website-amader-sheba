import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="">
      <BrowserRouter>
          <Header></Header>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
