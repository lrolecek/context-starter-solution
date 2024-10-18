import './App.css'

import { SettingsProvider } from './context/SettingsContext'

import First from './components/First'
import Second from './components/Second'

function App() {
  return (
    <>
      <SettingsProvider>
        <h1>React Context</h1>


        <First />
        <Second />

      </SettingsProvider>
    </>
  )
}

export default App
