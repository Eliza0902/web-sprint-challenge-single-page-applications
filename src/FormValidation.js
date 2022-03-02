import * as yup from 'yup';

const formSchema = yup.object().shape({
  yourName: yup
    .string()
    .required('At Least 2 Letters!')
    .min(2, "name must be at least 2 characters")
})

export default formSchema;