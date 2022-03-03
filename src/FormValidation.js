import * as Yup from 'yup';

const formSchema = Yup.object().shape({
 
    choiceOfSize: Yup
    .string()
    .oneOf(['Small', 'Medium','Large'], 'Gotta Pick one!'),
    
    choiceOfSauce: Yup
    .string()
    .oneOf(['red','white','none'],'Gotta Pick One!'),
    pepperoni : Yup.boolean(),
    sausage: Yup.boolean(),
    olives: Yup.boolean(),
    peppers: Yup.boolean(),
    specialInstructions: Yup
    .string()
    .trim()
    .min(0),
    name: Yup
    .string()
    .trim()
    .required("name must be at least 2 characters")
    .min(2,"name must be at least 2 characters"),
})

export default formSchema;