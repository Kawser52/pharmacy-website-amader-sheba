import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/HomePages/Home/Home';
import Header from './pages/Shared/Header/Header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './pages/Shared/Footer/Footer';
import Login from './pages/Login/Login';
import AuthProvider from './context/AuthProvider';
import ProductDetails from './pages/HomePages/ProductDetails/ProductDetials'
import PrivateRoute from './pages/PrivateRoute/PrivateRoute'

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
            <Header></Header>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='home' element={<Home></Home>}></Route>
            <Route path='productdetails/:productID' element={
            <PrivateRoute>
              <ProductDetails></ProductDetails>
            </PrivateRoute>
            }></Route>
            <Route path='/login' element={<Login></Login>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
