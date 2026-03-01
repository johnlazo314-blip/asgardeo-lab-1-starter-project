import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import EmployeeMgmt from './pages/EmployeeMgmt'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@asgardeo/react'


function App() {

  return (
    <><SignedIn>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee-mgmt" element={<EmployeeMgmt />} />
        </Routes>
      </Router>
    </SignedIn>
      <SignedOut>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </SignedOut>
      </>
  )
}

export default App
