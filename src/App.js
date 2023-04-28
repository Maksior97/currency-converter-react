import Container from "./Container";
import Form from "./Form";
import { useState } from "react";
import currencies from "./currencies";

function App() {
  const [total, setTotal] = useState();
  
  const calculateTotal = (currency, sum) => {
     const rate = currencies.find(({symbol}) => symbol === currency).rate;

    setTotal({
      targetSum: sum * rate,
      currency,
    });
  };


  return (
      <Container>
        <Form
        total={total} 
        calculateTotal={calculateTotal}/>
      </Container>
  );
}

export default App;
