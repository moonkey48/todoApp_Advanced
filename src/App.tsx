import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthContainer from './auth/authContainer';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/'  element={<AuthContainer/>} />
      <Route path='/login' element={<AuthContainer/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
