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
        <div>{food.name}</div>
      ))}
    </Wrapper>
  );
}
