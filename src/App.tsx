import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthContainer from './auth/authContainer';
import TodoPage from './pages/todoPage';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/'  element={<AuthContainer/>} />
      <Route path='/login' element={<AuthContainer/>} />
      <Route path='/todoPage' element={<TodoPage/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
