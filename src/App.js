import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/MainRoute/MainRoute';
import { Toaster } from 'react-hot-toast';
import AOS from 'aos';
AOS.init();


function App() {
  return (
    <div className='overflow-x-hidden'>
      <Toaster />
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
