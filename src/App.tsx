import Intro from './components/Intro';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
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
