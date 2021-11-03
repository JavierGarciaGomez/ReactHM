// 114

import { Container } from "./components/UI/Container";
import { Section } from "./components/UI/Section";
// 116
import { Formik, Form } from "formik";
import { Input } from "./components/UI/Input";
import { Button } from "./components/UI/Button";
import { useState } from "react";
import { Balance } from "./components/UI/Balance";
import { formatCurrency } from "./helpers/formatterAdapter";
import * as Yup from "yup";

// 118
const calculateCompoundInterest = (deposit, contribution, years, rate) => {
  let total = deposit;
  for (let i = 0; i < years; i++) {
    total = (total + contribution) * (rate / 100 + 1);
  }

  return Math.round(total);
};
function App() {
  const [balance, setbalance] = useState("");

  const submitHandler = ({ deposit, contribution, years, rate }) => {
    console.log("deposit", deposit);
    const value = calculateCompoundInterest(
      Number(deposit),
      Number(contribution),
      Number(years),
      Number(rate)
    );
    setbalance(formatCurrency(value));
  };

  return (
    <Container>
      <Section>
        <Formik
          initialValues={{
            deposit: "",
            contribution: "",
            years: "",
            rate: "",
          }}
          onSubmit={submitHandler}
          validationSchema={Yup.object({
            deposit: Yup.number().required("Obligatorio"),
            contribution: Yup.number().required("Obligatorio"),
            years: Yup.number().required("Obligatorio"),
            rate: Yup.number().required("Obligatorio"),
          })}
        >
          <Form>
            <Input name="deposit" label="Depósito inicial"></Input>
            <Input name="contribution" label="Contribución anual"></Input>
            <Input name="years" label="Años"></Input>
            <Input name="rate" label="Interés en %"></Input>
            <Button type="submit">Calcular</Button>
          </Form>
        </Formik>
        {balance !== "" && <Balance>Balance: {balance}</Balance>}
      </Section>
    </Container>
  );
}

export default App;
