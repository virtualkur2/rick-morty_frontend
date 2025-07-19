import { Outlet } from 'react-router';
import './App.css'
import Navbar from './components/navbar/Navbar';
import { useEffect } from 'react';
import { APP_NAME } from './constants';

function App() {
  useEffect(() => {
    document.title = APP_NAME
  }, []);
  return (<>
    <Navbar />
    <main>
      <Outlet />
    </main>
  </>);
}

export default App
