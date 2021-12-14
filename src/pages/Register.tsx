
import { ChangeEvent, useState } from 'react';
import '../styles/styles.css';

export default function Register() {
    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password: '',
        repeatPassword: ''
    });

    const { name, email, password, repeatPassword } = registerData;

    const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e: any)=>{
        e.preventDefault();
    }

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
                />
                <input 
                type="email"
                placeholder="Email"
                name="email"
                value={ email }
                onChange={handleChange}
                />
                <input 
                type="password" 
                placeholder="Password"
                name="password"
                value={ password }
                onChange={handleChange}
                />
                <input 
                type="password" 
                placeholder="Repeat Password"
                name="repeatPassword" 
                value={ repeatPassword }
                onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}
