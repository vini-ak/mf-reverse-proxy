import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import { HomePage } from './pages/home/home.page'
import { TestPage } from "./pages/test.page"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/test" element={<TestPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
