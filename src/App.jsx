import { useEffect, useState } from "react"
import { getFoods } from "./services/food-service"
import styled from "@emotion/styled";

function App() {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    getFoods().then(setFoods)
  }, [])

  const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
    
  return (
    <Wrapper>
      {foods.map((food) => (
        <div>{food.name}</div>
      ))}
    </Wrapper>
  )
}

export default App
