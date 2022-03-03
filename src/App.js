import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Homepage";
import PizzaForm from "./Formpage";
import schema from "./FormValidation";
import * as Yup from "yup";
import axios from "axios";
const initialFormValues = {
  choiceOfSize: "",
  choiceOfSauce: "",
  pepperoni: false,
  sausage: false,
  olives: false,
  peppers: false,
  specialInstruction: "",
  name: "",
};
const initialFormErrors = {
  name: "",
  choiceOfSauce: "",
  specialInstruction: "",
  choiceOfSize: "",
};

const initialOrders = [];
const initialDisabled = true;

const App = (props) => {
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/orders", newOrder)
      .then((res) => {
        setOrders([res.data, ...orders]);
        setFormValues(initialFormValues);
      })
      .catch((err) => console.log(err));
  };

  const validate = (name, value) => {
    Yup
      .reach(schema, name)
      .validate(value)
      .then((valid) => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };
  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      choiceOfSize: formValues.choiceOfSize.trim(),
      toppings: ["pepperoni", "sausage", "olives", "peppers"].filter(
        (topping) => formValues[topping]
      ),
      specialInstruction: formValues.specialInstruction.trim(),
      choiceOfSauce: formValues.choiceOfSauce.trim(),
    };
    postNewOrder(newOrder);
  };
  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className="app">
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <nav>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/pizza">Order</Link>
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pizza">
          <PizzaForm
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
