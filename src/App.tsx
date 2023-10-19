import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Estonianlesson from "./components/Estonianlesson/Estonianlesson";
import Footer from './components/Footer/Footer';
import Contact from "./components/Contact/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
   <Router>
      <Header /> 
       <main>
        <Container fluid className="px-0">
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="About" element={<About/>} /> 
          <Route path="Estonianlesson" element={<Estonianlesson/>} />
          <Route path="Contact" element={<Contact/>} />
          </Routes>
        </Container>
       </main>
      <Footer/>
    </Router>
  );
}

export default App;
