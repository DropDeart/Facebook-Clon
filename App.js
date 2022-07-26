import './App.css'
import React from 'react'
import Feed from './components/Feed/Feed'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import SideBar from './components/Sidebar/SideBar'
import Widgets from './components/Widgets/Widgets'
import { useStateValue } from './components/StateProvider/StateProvider'

function App() {
  const [{ user }, dispatch] = useStateValue()
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app_body">
            <SideBar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  )
}

export default App
