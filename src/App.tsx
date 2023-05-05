import { useState } from 'react'
import Update from '@/components/update'
import logoVite from './assets/logo-vite.svg'
import logoElectron from './assets/logo-electron.svg'
import './App.css'
import SidePanel from './components/Sidepanel'
import Setup from './components/Setup'


console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`)

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div className="flex flex-row">
    <SidePanel />
    <Setup />
    </div>

    </>
  )
}

export default App
