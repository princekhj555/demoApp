import './App.css';
import Navbar from "./components/Navbar.js"
import MainSite from './components/MainSite';
import Bottom from "./components/Bottom.js"
function App() {
  return (
    <div className="app">
     <Navbar/>
    <MainSite/>
    <Bottom/>
    </div>
  );
}

export default App;
