import './App.css';
import Header from './Components/Header/Header';
import Container from './Components/Container/Container';
import Works from './Components/Container/Works/Works';
import About from './Components/Container/About/About';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Container/>
      <About/>
      <Works/>
      <Footer/>
    </div>
  );
}

export default App;
