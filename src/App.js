import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Menubar from './components/menubar';
import Banner from './components/Card';

const App = () => {
  return (
    <div className="app">
      <Header />      
      <div className="main-content">
        <Menubar/>
        <div className='content'>
          <Banner 
          type="Grille"
          title="Some long name of Grid goes here"
          objective="Objective goes here"
          category="Catégorie 1"
          score={712}
        />
        </div>
      </div>
      
    </div>
  );
}


export default App;
