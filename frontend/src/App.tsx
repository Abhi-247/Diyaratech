import { Routes, Route } from 'react-router-dom'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { HomePage } from './pages/HomePage'
import { HireDevelopersPage } from './pages/HireDevelopersPage'
import { IndustriesPage } from './pages/IndustriesPage'
import { ContactPage } from './pages/ContactPage'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hire-developers" element={<HireDevelopersPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
