import React from "react";

export default function PizzaForm(props) {


  const { values, submit, change, disabled, errors } = props;
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = evt => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };
  return (
    <form id="pizza-form" onSubmit={onSubmit}>
      <div >
        <h2>Build your Pizza!</h2>
        <button id="order-button" disabled = {disabled}>Submit</button>
      </div>

      <div>{errors.name}</div>

      <h4>What are Ya Called?</h4>
      <label>
        Name
        <input
          id="name-input"
          value={values.name}
          onChange={onChange}
          name="name"
          type="text"
          
        />
      </label>

      <div>
        <label>
          Special Instructions?
          <input id="special-text"
            value={values.specialInstructions}
            onChange={onChange}
            name="specialInstructions"
            type="text"
          />
        </label>
      </div>
      <div >
        <label>
          Choice of size
          <select id="size-dropdown"
            onChange={onChange}
            value={values.choiceOfSize}
            name="choiceOfSize"
          >
            <option value="">- Select an option -</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>
      </div>
      <div id="Sauce">
        <label>
          Choice Of Sauce
          <label>
            Red
            <input
              type="radio"
              name="choiceOfSauce"
              value="red"
              onChange={onChange}
              checked={values.choiceOfSauce === "red"}
            />
          </label>
          <label>
            White
            <input
              type="radio"
              name="choiceOfSauce"
              value="white"
              onChange={onChange}
              checked={values.choiceOfSauce === "white"}
            />
          </label>
          <label>
            None
            <input
              type="radio"
              name="choiceOfSauce"
              value="none"
              onChange={onChange}
              checked={values.choiceOfSauce === "none"}
            />
          </label>
        </label>
      </div>
      <div>
        <h3>Toppings!</h3>
        <label>Pepperoni
        <input
        type='checkbox'
        name='pepperoni'
        checked={values.pepperoni}
        onChange={onChange}
        /> 
        </label>
        <label>Sausage
        <input
        type='checkbox'
        name='sausage'
        checked={values.sausage}
        onChange={onChange}
        /> 
        </label>
        <label>Olives
        <input
        type='checkbox'
        name='olives'
        checked={values.olives}
        onChange={onChange}
        /> 
        </label>
        <label>Peppers
        <input
        type='checkbox'
        name='peppers'
        checked={values.peppers}
        onChange={onChange}
        /> 
        </label>
      </div>
    </form>
  );
}
