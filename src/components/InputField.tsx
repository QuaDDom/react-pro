import { ErrorMessage, Field } from "formik";

interface Props{
    name: string,
    type: string,
    label: string,
    children?: JSX.Element
}

export default function InputField({name, type, label, children}: Props) {
    return (
        <>
        { type === "checkbox" ||
        <>
        <label htmlFor={name}>{label}</label>
        <Field type={type === 'select' ? null : type} as={type === 'select' && type} name={name}>
            {
                children && children
            }
        </Field>
        </>
        }
        {
            type === "checkbox" &&
            <label>
                <Field type={type} name={name}/>
                Terms and Conditios
            </label>
        }
        <ErrorMessage name={name} component="span"/>
        </>
    )
}
