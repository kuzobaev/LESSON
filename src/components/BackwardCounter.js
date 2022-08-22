import { useCounter } from "../Helpers/useCounter";
import Card from "./Card";



const BackwardCounter = () => {

  const counter = useCounter(false);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
