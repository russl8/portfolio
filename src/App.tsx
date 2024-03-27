import Intro from './components/Intro';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <div>
        <Intro />
        <About />
        <Projects/>
        <Footer/>
      </div>
      <Sidebar />
    </>



  );
}

export default App;
