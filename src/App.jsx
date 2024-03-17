import { RouterProvider, createHashRouter } from 'react-router-dom';
import RenderComponent from './Pages/RenderComponent/RenderComponent';
import EventDetails1 from './Pages/PagesEventDetails/EventDetails1';
import EventDetails2 from './Pages/PagesEventDetails/EventDetails2';
import EventDetails3 from './Pages/PagesEventDetails/EventDetails3';
import EventDetails4 from './Pages/PagesEventDetails/EventDetails4';
import EventDetails5 from './Pages/PagesEventDetails/EventDetails5';
import EventDetails6 from './Pages/PagesEventDetails/EventDetails6';
import Events from './Pages/Events/Events';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Reserve from './Pages/Reserve/Reserve';
import AngeBot from './Pages/AngeBot/AngeBot';
import ContactUs from './Pages/ContactUs/ContactUs';
import './App.css';


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
      path: '/events/details/1',
      element: <RenderComponent component={<EventDetails1/>}/>
    },
    {
      path: '/events/details/2',
      element: <RenderComponent component={<EventDetails2/>}/>
    },    
    {
      path: '/events/details/3',
      element: <RenderComponent component={<EventDetails3/>}/>
    },
    {
      path: '/events/details/4',
      element: <RenderComponent component={<EventDetails4/>}/>      
    },
    {
      path: '/events/details/5',
      element: <RenderComponent component={<EventDetails5/>}/>
    },
    {
      path: '/events/details/6',
      element: <RenderComponent component={<EventDetails6/>}/>
    },
    {
      path: '/aboutus',
      element: <RenderComponent component={<AboutUs/>}/>
    },
    {
      path: '/reserve',
      element: <RenderComponent component={<Reserve/>}/>
    },
    {
      path: '/angebot',
      element: <RenderComponent component={<AngeBot/>}/>
    },
    {
      path: '/contact',
      element: <RenderComponent component={<ContactUs/>}/>
    }
  ]);

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
