import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Menubar from './components/menubar';

const App = () => {
  return (
    <div className="app">
      <Header />      
      <div className="main-content">
        <Menubar/>
        <div className='content'>
          
        </div>
      </div>
      
    </div>
  );
}


export default App;
