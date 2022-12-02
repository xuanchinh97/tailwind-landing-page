import { useEffect, useState } from 'react';
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Section from './components/Section';
import Slogan from './components/Slogan';

function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener("resize", handleSize)
    handleSize()
    return () => window.removeEventListener("resize", handleSize)
  }, [])

  useEffect(() => {
    if (windowSize.width < 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [windowSize])


  return (
    <div className="font-sora overflow-hidden  px-4 py-8 bg-gradient-to-b dark:from-purple-900 dark:to-purple-700 from-white to-pink-500  dark:text-white text-black md:px-20">
      <NavBar isMobile={isMobile} />
      <Slogan />
      <Content />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
