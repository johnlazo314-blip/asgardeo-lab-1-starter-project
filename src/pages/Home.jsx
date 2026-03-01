import React from 'react'
import { User, UserProfile } from '@asgardeo/react'

const Home = () => {
  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <h3>Challenge 1</h3>
      <p>Use Asgardeo to require users to log in to see this entire website</p>
      <img 
        className="home-image"
        src='https://images.unsplash.com/photo-1684265441432-11a6ae9c27b1?q=80&w=1548&auto=format&fit=crop' 
        alt="CodeCraft Workspace"
      />
      <User>
        {(user) => (
          <div className="welcome-section">
            <p className="user-info">
              <strong>Welcome back:</strong> <span>{user.username || user.userName}</span>
            </p>
          </div>
        )}
      </User>
      <UserProfile />
    </div>
  )
}

export default Home