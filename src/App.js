import "./App.css";
import styled from "styled-components";
import Card from "./components/Card";
import Car from "./images/auto.png";
import Food from "./images/food.jpg";
import Tech from "./images/tech.jpg";

const data = [
  {
    img: Car,
    link: "AutoMobile",
    title: "Race To Your Heart Content",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!",

    backgroundColor: "black",
  },
  {
    img: Food,
    link: "Food",
    title: "Delicious Food",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!",
    backgroundColor: "yellow",
  },
  {
    img: Tech,
    link: "Technology",
    title: "What's New In 2022 Tech",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!",
    backgroundColor: "green",
  },
];

function App() {
  return (
    <div className="App">
      <Container>
        {data.map((el) => {
          return <Card key={el.link} data={el} />;
        })}
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: space-around;

  & img {
    width: 300px;
  }
`;
