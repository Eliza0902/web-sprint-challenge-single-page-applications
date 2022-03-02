import React from "react";
import {Link, useRouteMatch} from 'react-router-dom'
export default function PizzaForm(props){
const {url, path} = useRouteMatch();
    
    const{
        values,
        submit,
        change,
        disable,
        errors
    } = props;
    const onSubmit = evt =>{
        evt.preventDefault();
        submit()
    }

    const onChange= evt =>{
        const{name, value, type, checked} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }
    return (
    <form id="pizza-form" onSubmit={onSubmit}>
        <div id = 'pizza-submit'>
            <h2>Build your Pizza!</h2>
            <button disable={disable}>Submit</button>
            
        </div>
    <div >
       <div>{errors.name}</div>
           
        <h4>What are Ya Called?</h4>
        <label>Name
            <input id='name-input'
            value={values.name}
            onChange={onChange}
            name='Name'
            type='text'
            />
        </label>
        </div>
        <div id="special-text">
        <label>Special Instructions?
            <input
            value={values.specialInstructions}
            onChange={onChange}
            name='special instructions'
            type='text'
            />
        </label>
       </div>
       <div id='#size-dropdown'> 
        <label>Choice of size
            <select
            onChange={onChange}
            value={values.choiceOfSize}
            name='choice of size'
            >
                 <option value=''>- Select an option -</option>
            <option value='Sm'>Small</option>
            <option value='Med'>Medium</option>
            <option value='Lrg'>Large</option>
            </select>

        </label>
        </div>
        <div id="Sauce">
        <label>Choice Of Sauce
            <label>Red
                <input
                type='radio'
                name='choiceOfSauce'
                value='red'
                onChange={onChange}
                checked={values.choiceOfSauce === 'red'}
  />
  
  </label>
            <label>White
                <input
                type='radio'
                name='choiceOfSauce'
                value='white'
                onChange={onChange}
                checked={values.choiceOfSauce === 'white'}
                />
                </label>
            <label>None
                <input
                type='radio'
                name='choiceOfSauce'
                value='none'
                onChange={onChange}
                checked={values.choiceOfSauce === 'none'}
                />

            </label>
            
            


        </label>
        </div>

    </form>
)
}





