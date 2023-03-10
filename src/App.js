import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header.jsx'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
