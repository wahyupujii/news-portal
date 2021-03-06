import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { DetailArticle } from "./pages";
import { Routes } from './config';
import { Nav } from "./components";

const App = () => {
  const size = useWindowSize();

  return (
    <div>
      <Nav />
      {/* <DetailArticle size={size} /> */}
      <Routes size={size} />
    </div>
  )
}

const useWindowSize = () => {
  const [windowSize , setWindowSize] = useState({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener("resize" , handleResize);

    handleResize();

    return () => window.removeEventListener("resize" , handleResize);

  } , [])

  return windowSize;

}

export default App