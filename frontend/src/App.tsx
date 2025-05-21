import { BrowserRouter, Route, Routes } from "react-router-dom"
import RegistrationPage from "./RegistrationPage"
import Home from "./Home"

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center lategram_dark bg-primary" style={{}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegistrationPage />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
