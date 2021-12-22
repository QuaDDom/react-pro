import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';


export default function FormikComponents() {

    return (
        <div>
            <h1>Formik Components</h1>
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
                            <label htmlFor="firstName">First Name</label>
                            <Field type="text" name="firstName"/>
                            <ErrorMessage name="firstName" component="span"/>
        
                            <label htmlFor="lastName">Last Name</label>
                            <Field type="text" name="lastName"/>
                            <ErrorMessage name="lastName" component="span"/>
                            
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email"/>
                            <ErrorMessage name="email" component="span"/>

                            <label htmlFor="jobType">Job Type</label>
                            <Field as="select" name="jobType">
                                <option value="">...</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-junior">IT Junior</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span"/>
                
                            <label>
                                <Field type="checkbox" name="terms"/>
                                Terms and Conditions
                            </label>
                            <ErrorMessage name="terms" component="span"/>

                            <button type="submit">Submit</button>
        
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
