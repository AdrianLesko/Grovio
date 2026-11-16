
import './App.css'


import { Routes, Route } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout.jsx'
import DashboardLayout from './layouts/DashboardLayout.jsx'
import LandingPage from './pages/LandingPage.jsx'
import AuthPage from './pages/AuthPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'


function App() {
 
  return (
    <>
      <Routes>
        <Route path='/' element={ <PublicLayout />}>
          <Route index element={ <LandingPage />} />
          <Route path='/login' element={ <AuthPage /> } />
        </Route>
        <Route path='/dashboard' element={ <DashboardLayout />}>
          <Route index element={ <DashboardPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
