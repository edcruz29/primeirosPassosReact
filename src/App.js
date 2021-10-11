import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import ClickMe from './components/ClickMe';
import logo from './logo.svg';
import Timer from './components/Timer';
import ListaUser from './components/ListaUser';



export default function App() {
  return (
    <div className="App">
      <Header logo ={logo} imgLogo = {""}/>
      <ClickMe/>
      <Timer/>
      <ListaUser/>
      <Main/>
      <Footer/>
    </div>
  );
}

