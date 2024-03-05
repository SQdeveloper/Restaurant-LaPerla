import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header.jsx/Header';
import Home from './Pages/Home/Home';

function App() {  

  return (
    <div className='app'>
      <Header/>            
      <Home/>
      <Footer/>
    </div>
  )
}

export default App