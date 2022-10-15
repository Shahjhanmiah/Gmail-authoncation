import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './component/layout/Main';
import RegisterReactBootstrap from './component/RegisterReactBootstrap';
import LoginBootstrap from './component/LoginBootstrap';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<RegisterReactBootstrap></RegisterReactBootstrap>
      },
      {
        path:'/register',
        element:<RegisterReactBootstrap></RegisterReactBootstrap>
      },
      {
        path:'/login',
        element:<LoginBootstrap></LoginBootstrap>
      },
    ]
  },

])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
     
    </div>
  );
}

export default App;
