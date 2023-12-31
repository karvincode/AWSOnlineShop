import { Routes, Route } from "react-router-dom"
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { About } from './pages/About'
import { Navbar } from './components/Navbar'
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { Checkout } from "./pages/Checkout"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { AuthProvider } from "./context/AuthContext"
import { CategoryProvider } from "./context/HomeContext"
import { Profile } from "./pages/Profile"
import { MainBoxProvider } from "./context/ProfileContext"

function App() {

  return (
    <MainBoxProvider>
    <CategoryProvider>
    <ShoppingCartProvider>
      <AuthProvider>
        <Navbar />
        <Container className="mb-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Checkout" element={<Checkout />} />
              <Route path="/Store" element={<Store />} />
              <Route path="/About" element={<About />} />
              <Route path="/Profile" element={<Profile />}/>
            </Routes>
        </Container>

      </AuthProvider>
    </ShoppingCartProvider>
    </CategoryProvider>
    </MainBoxProvider>
  )
}

export default App
