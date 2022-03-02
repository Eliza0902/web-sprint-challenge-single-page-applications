import React, {useState, useEffect} from "react";
import{ Route, Link, Switch} from 'react-router-dom'
import Home from './Homepage'
import PizzaForm from "./Formpage";
import schema from './FormValidation';
import * as yup from 'yup';
console.log(PizzaForm);
const initialFormValues = {
 choiceOfSize: '',
 choiceOfSauce: '',
 pepperoni : false,
 sausage: false,
 olives: false,
 peppers: false,
 specialInstruction: '',
 name: '',
}
const initialFormErrors = {
  name: ''
}

const initialOrders = []
const initialDisable = true;

const App = (props) => {
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disable, setDisable] = useState(initialDisable);
 
  const validate = (name, value) => {
      yup.reach(schema, name)
      .validate(value)
        .then(valid => setFormErrors({ ...formErrors, [name]: '' }))
        .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
    }
    const inputChange = (name, value) => {
      validate(name, value);
      setFormValues({
        ...formValues,
        [name]:value
      })}
    const formSubmit = () =>{
      const newOrder = {
        name: formValues.name.trim(),
        size: formValues.choiceOfSize.trim(),
        toppings:['pepperoni', 'sausage', 'olives', 'peppers'].filter(topping => formValues[topping]) ,
        special: formValues.specialInstruction.trim(),
        sauce: formValues.choiceOfSauce.trim()
      }
    }
    useEffect(() => {
      schema.isValid(formValues).then(valid => setDisable(!valid))
    }, [formValues])
    
  
  
  return (
    <div className="app">
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <nav>
      <div className="nav-links">
        <Link to='/'>Home</Link> 
        <Link to="/pizza">Order</Link>
      </div>
      </nav>
    <Switch>
      <Route exact path = '/'>
        <Home />
      </Route>
      <Route path = "/pizza">
        <PizzaForm 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disable={disable}
        errors = {formErrors}
         /> 
       </Route>
       

      
    </Switch>
    
  </div>
  
  );
};
export default App;
