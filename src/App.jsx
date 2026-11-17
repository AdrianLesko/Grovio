
import './App.css'


import { Routes, Route } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout.jsx'
import DashboardLayout from './layouts/DashboardLayout.jsx'
import LandingPage from './pages/LandingPage.jsx'
import AuthPage from './pages/AuthPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import ProtectedRoute from './components/publicUI/ProtectedRoute.jsx'
import NotFound from './pages/NotFound.jsx'

import {AuthProvider} from './context/AuthProvider.jsx'

function App() {
 
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/' element={ <PublicLayout />}>
            <Route index element={ <LandingPage />} />
            <Route path='/login' element={ <AuthPage /> } />
          </Route>
          <Route path='/dashboard' element={ 
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }>
            <Route index element={ <DashboardPage />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
