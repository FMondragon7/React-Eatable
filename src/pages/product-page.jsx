import styled from "@emotion/styled";
import FoodCard from "../components/food-card";
  
  const Wrapper = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

export default function ProductsPage({ foods }) {
  return (
    <>
      <Wrapper>
        {foods.map((food, index) => (
          <FoodCard 
            key={`food${index}`} 
            FoodImg={food.picture_url} 
            FoodPrice={food.price/100} 
            FoodName={food.name} 
            FoodId={food.id}>
          </FoodCard>
        ))}
      </Wrapper>
    </>
  );
}
