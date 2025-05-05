import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import { HomePage } from "./pages/home.page"
import { AddProductPage } from "./pages/add-product.page"

function App() {
  return (
    <BrowserRouter basename="/remote">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/add-product" element={<AddProductPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
