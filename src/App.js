import { Routes ,Route } from 'react-router-dom';
import './App.css';
import Register from './Pages/Register/Register'
import Edit from './Pages/Edit/Edit'
import Profile from './Pages/Profile/Profile'
import Pagenf from './Pages/PNF/Pagenf';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import Home from './Pages/Home/Home'
function App() {
  return (
    <>
<Main />
{/* <Home/> */}
   <Routes>
    <Route path='/'  element={<Home/>} />
    {/* <Route path='/hu' element={<Home/>} /> */}
    <Route path='/register' element={<Register/>} />
    <Route path='/edit/:id' element={<Edit />} />
    <Route path='/profile/:id' element={<Profile />} />
    <Route path='*' element={<Pagenf/>} />
   </Routes>
<Footer/>
    </>
  );
}

export default App;
