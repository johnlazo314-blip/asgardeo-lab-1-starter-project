import { NavLink } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@asgardeo/react'

const Header = () => {
  return (
    <header className="app-header">
      <nav className="app-nav">
        <NavLink to="/" end className="nav-link">
          Home
        </NavLink>
        <NavLink to="/employee-mgmt" className="nav-link">
          EmployeeMgmt
        </NavLink>
        <SignedIn>
          <SignOutButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </nav>
    </header>
  )
}

export default Header