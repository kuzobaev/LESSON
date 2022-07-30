import React from "react";
import "./Card.css";
import styled from "styled-components";

function Card(props) {
  const { img, link, title, description ,backgroundColor } = props.data;
  return (
    <CardBox>
      <Image src={img} />
      <Button backgroundColor={backgroundColor}> {link} </Button>
      <Title>{title}</Title>
      <div>{description}</div>
    </CardBox>
  );
}



export default Card;
const CardBox = styled.div`
  margin-top: 50px;
  width: 300px;
  height: 600px;
  background-color: red;
  text-align: center;
  border-radius: 100px;
`;
const Image = styled.img`
  width: 400px;
  height: 300px;
  border-radius: 100px;
`;
const Button = styled.button`
  width: 150px;
  height: 30px;
  background-color: ${({backgroundColor}) => backgroundColor};
  color: white;
  border: none;
  border-radius: 10px;
`;
const Title = styled.title`
  font-size: 25px;
`;
