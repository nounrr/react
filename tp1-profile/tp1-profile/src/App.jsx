import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Navigation from './component/navigation/Navigation';
import Footer from './component/footer/Footer';
import Profile from './component/content/Profil';

function App() {
  return (
    <div className="App">
      <div className='head'>
      <Header/>
      <Navigation/>
      </div>
      <Profile/>
      <Footer/>
    </div>
  );
}

export default App;
