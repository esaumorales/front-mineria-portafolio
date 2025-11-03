// src/App.tsx
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0c0e14] text-white relative overflow-hidden">
      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
    </div>
  )
}
