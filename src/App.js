import { useState } from "react";
import Container from "./Container";
import { currencyTable } from "./currencyTable";
import Form from "./Form";
import Total from "./Result";

function App() {
  const [total, setTotal] = useState();

  const calculateTotal = (sum, currency) => {
    const rate = currencyTable
    .find(({symbol}) => symbol === currency)
    .rate;

    setTotal({
      targetSum: sum * rate,
      currency,
    });
  };


  return (
      <Container>
        <Form 
        calculateTotal={calculateTotal}
      />
      <Total total={total}
      />
      </Container>
  );
}

export default App;
