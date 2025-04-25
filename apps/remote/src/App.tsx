import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import { HomePage } from "./pages/home.page"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/remote" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
