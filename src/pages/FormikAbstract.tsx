import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputField from '../components/InputField';
import '../styles/styles.css';


export default function FormikAbstract() {

    return (
        <div>
            <h1>Formik Abstract</h1>
            <Formik
                initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: ''
                }} 
                onSubmit={(values)=>console.log(values)}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                               .max(15, 'The maximum characters allowed is 15 or less')
                               .required('Required'),
                    lastName: Yup.string()
                              .max(20, "The maximun characters allowed is 20 or less")
                              .required('Required'),
                    email: Yup.string()
                            .email('Invalid Email')
                            .required('Required'),
                    terms: Yup.boolean()
                           .oneOf([true], "You must accept the terms and conditions"),
                    jobType: Yup.string()
                             .notOneOf(['it-junior'], 'We currently do not accept IT Juniors')
                             .required('Required')

            })}>
                {
                    () => (
                        <Form>
                            <InputField type="text" name="firstName" label="First Name"/>
        
                            <InputField type="text" name="lastName" label="Last Name"/>
                            
                            <InputField type="email" name="email" label="Email"/>

                            <InputField type="select" name="jobType" label="Job Type">
                                <>
                                <option value="">...</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-junior">IT Junior</option>
                                </>
                            </InputField>
                 
                            <InputField type='checkbox' name='terms' label='Terms and Conditions'/>

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
