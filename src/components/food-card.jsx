import styled from "@emotion/styled"
import { RiEditBoxFill, RiDeleteBinFill } from "react-icons/ri"

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 156px;
  height: 250px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 156px;
  height: 250px;
  gap: 10px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 1);
`

const Img = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  line-height: 20px;
  gap: 8px;
  width: auto;
  height: auto;
`
const Title = styled.h1`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0em;
  `
  
  const Price = styled.label`
  font-size: 15px;
  font-weight: 600;
  color: rgba(250, 74, 12, 1)
`

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 16px;
`

function handleClick(FoodId) {
  console.log(FoodId)
}

export default function FoodCard({ FoodImg, FoodPrice, FoodName, FoodId }) {
  return (
    <>
      <Container onClick={() => handleClick(FoodId)}>
        <Img src={FoodImg}/>
        <Info>
          <Title>{FoodName}</Title>
          <Price>${FoodPrice}</Price>
          <Icons>
            <RiEditBoxFill style={{color: "rgba(250, 74, 12, 1)"}}/>
            <RiDeleteBinFill style={{color: "rgba(250, 74, 12, 1)"}}/>
          </Icons>
        </Info>
      </Container>
    </>
  )
}