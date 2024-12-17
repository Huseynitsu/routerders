import { Link, Route, Routes } from 'react-router'
import './App.css'
import About from './components/About'
import BlogList from './components/BlogList'
import BlogDetail from './components/BlogDetail'

function NotFound() {
  return <h2>Səhifə tapılmadı</h2>
}

function App() {

  return (
    <>
      <nav>
        <Link to="/">Ana səhifə</Link>
        <Link to="/about">Haqqımızda</Link>
        <Link to="/bloqlar">Bloqlar</Link>
      </nav>
      <Routes>
        <Route path='/' element={<h2>Ana səhifə</h2>} />
        <Route path='/about' element={<About />} />
        <Route path='/bloqlar' element={<BlogList />} />
        <Route path="/bloqlar/:id" element={<BlogDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
