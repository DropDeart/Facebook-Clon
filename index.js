import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { StateProvider } from './components/StateProvider/StateProvider'
import reducer, {initialState} from './components/StateProvider/Reducer'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
  <StateProvider initialState={initialState} reducer={reducer}>
  <App />
  </StateProvider>
 
  </>
)
