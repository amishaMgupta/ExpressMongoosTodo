import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import TodoDashboard from './components/TodoDashboad/Dashboard' 
import './App.css'

function App() {
 

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/dashboard" element={<TodoDashboard/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
            </>
  )
}

export default App
