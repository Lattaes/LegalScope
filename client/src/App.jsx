import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Prediksi from './pages/Prediksi';
import Chatbot from './pages/Chatbot';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from './context/userContext';
import Dashboard from './pages/Dashboard';
import Peraturan from './pages/Peraturan';
import DaftarPeraturan from './pages/DaftarPeraturan';
import DetailPeraturan from './pages/DetailPeraturan';
import Profile from './pages/Profile';
import TentangKami from './pages/TentangKami';
// import EditProfile from './pages/EditProfile';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;

function App() {
  const location = useLocation();

  const hideNavbarPaths = ['/login', '/register'];

  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      <UserContextProvider>
        {!shouldHideNavbar && <Navbar />}
        <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          {/* <Route path='/edit-profile' element={<EditProfile />} /> */}
          {/* Rute untuk komponen Peraturan */}
          <Route path='/peraturan' element={<Peraturan />} />
          {/* Rute untuk komponen DaftarPeraturan */}
          <Route path="/daftar-peraturan" element={<DaftarPeraturan />} />
          <Route path="/detail-peraturan/:id" element={<DetailPeraturan />} />
          <Route path='/prediksi' element={<Prediksi />} />
          <Route path='/chatbot' element={<Chatbot />} />
          <Route path='/tentang-kami' element={<TentangKami />} />
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
