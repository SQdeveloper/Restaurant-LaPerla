import { RouterProvider, createHashRouter } from 'react-router-dom';
import Events from './Pages/Events/Events';
import Home from './Pages/Home/Home';
import RenderComponent from './Pages/RenderComponent/RenderComponent';
import './App.css';
import EventDetails1 from './Pages/PagesEventDetails/EventDetails1';


function App() {  

  const router = createHashRouter([
    {
      path: '/',
      element: <RenderComponent component={<Home/>}/>
    },
    {
      path: '/events',
      element: <RenderComponent component={<Events/>}/>
    },
    {
      path: '/events/details',
      element: <RenderComponent component={<EventDetails1/>}/>
    }
  ]);

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
