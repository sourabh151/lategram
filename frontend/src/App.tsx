import { BrowserRouter, Route, Routes } from "react-router-dom"
import RegistrationPage from "./RegistrationPage"
import Home from "./Home"
import Chats from "./Chats"
import Homepage from "./Homepage"

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center lategram_light bg-primary" style={{}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegistrationPage />}></Route>
          <Route path="/home" element={<Home />}>
            <Route index element={<Homepage />}></Route>
            <Route path="chats" element={<Chats />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
