import { useEffect, useState } from "react"
import { getFoods } from "./services/food-service"
import { Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/product-page";
import styled from "@emotion/styled";

const Section = styled("section")`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 390px;
  gap: 20px;
  padding: 20px 0;
  `

function App() {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    getFoods().then(setFoods)
  }, [])
    
  return (
    <Section>
      <h1>Products Dashboard</h1>
      <Routes>
        <Route path="/" element={<ProductsPage foods={foods}/>}>
        </Route>
      </Routes> 
      <button>Create Product</button>
    </Section>
  )
}



export default App
