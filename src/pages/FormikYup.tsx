import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';


export default function FormikYup() {

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values)=> console.log(values),
        validationSchema: Yup.object({
            firstName: Yup.string()
                       .max(15, 'The maximum characters allowed is 15 or less')
                       .required('Required'),
            lastName: Yup.string()
                      .max(20, "The maximun characters allowed is 20 or less")
                      .required('Required'),
            email: Yup.string()
                    .email('Invalid Email')
                    .required('Required')
        })
    })

    return (
        <div>
            <h1>Formik With Yup</h1>
            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" { ...getFieldProps('firstName') } />

                { touched.firstName && errors.firstName && <span>{errors.firstName}</span> }

                <label htmlFor="lastName">Last Name</label>
                <input type="text" { ...getFieldProps('lastName') } />

                { touched.lastName && errors.lastName && <span>{errors.lastName}</span> }
                
                <label htmlFor="email">Email</label>
                <input type="email" { ...getFieldProps('email') } />

                { touched.email && errors.email && <span>{errors.email}</span> }

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}
