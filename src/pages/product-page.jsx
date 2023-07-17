import styled from "@emotion/styled";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function ProductsPage({ foods }) {
  return (
    <Wrapper>
      {foods.map((food) => (
        <div>
          <img src={food.picture_url}/>
          <h3>{food.name}</h3>
          <label>${food.price/100}</label>
        </div>
      ))}
    </Wrapper>
  );
}
