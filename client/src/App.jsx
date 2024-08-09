import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import About from './pages/about'
import Register from './pages/Register';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </Layout>
    </BrowserRouter>
    </>
  )
}

export default App
