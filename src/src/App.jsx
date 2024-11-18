import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import MainPage from './pages/MainPage'
import Header from './components/header/Header'

const App = () => {

  return (
    <Router>
      <Header />
      <Routes >
        <Route path='/' element={<MainPage />} />
        <Route path="/*" element={<MainPage />} />
      </Routes>
    </Router>
  )
}

export default App
