import * as yup from 'yup';

const formSchema = yup.object().shape({
 
    choiceOfSize: yup
    .string()
    .oneOf(['Small', 'Medium','Large'], 'Gotta Pick one!'),
    
    choiceOfSauce: yup
    .string()
    .oneOf(['red','white','none'],'Gotta Pick One!'),
    pepperoni : yup.boolean,
    sausage: yup.boolean,
    olives: yup.boolean,
    peppers: yup.boolean,
    specialInstruction: yup
    .string()
    .trim()
    .min(0),
    name: yup
    .string()
    .trim()
    .required("name must be at least 2 characters")
    .min(2,"name must be at least 2 characters"),
})

export default formSchema;