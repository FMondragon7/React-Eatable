import { useEffect, useState } from "react"
import { getFoods } from "./services/food-service"
import { Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/product-page";

function App() {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    getFoods().then(setFoods)
  }, [])
    
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductsPage foods={foods}/>}>
        </Route>
      </Routes>
    </>
  )
}



export default App
