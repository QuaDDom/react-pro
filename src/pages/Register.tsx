import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export default function Register() {

    const { handleChange, name, email, password, repeatPassword, reset, isValidEmail, passwordIsEqual } = useForm({
        name: '',
        email: '',
        password: '',
        repeatPassword: ''
    });

    console.log(passwordIsEqual(password, repeatPassword));

    return (
        <div>
            <h1>Register Page</h1>
            <form>
                <input 
                type="text"
                placeholder="Name"
                name="name"
                value={ name }
                onChange={handleChange}
                className={`${name.trim().length <= 0 && 'has-error'}`}
                />
                { name.trim().length <= 0 && <span>Este campo es obligatorio</span> }
                <input 
                type="email"
                placeholder="Email"
                name="email"
                value={ email }
                onChange={handleChange}
                className={`${ !isValidEmail(email) && 'has-error'}`}
                />
                { !isValidEmail( email ) && <span>El email no es valido</span> }
                <input 
                type="password" 
                placeholder="Password"
                name="password"
                value={ password }
                onChange={handleChange}
                />
                { password.trim().length <= 0 && <span>Este campo es obligatorio</span> }
                <input 
                type="password" 
                placeholder="Repeat Password"
                name="repeatPassword" 
                value={ repeatPassword }
                onChange={handleChange}
                />
                { !passwordIsEqual(password, repeatPassword) && <span>Passwords are not equals</span> }
                <button type='submit'>Submit</button>
                <button type='button' onClick={reset}>Reset</button>
            </form>
        </div>
    )
}
