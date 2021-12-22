import { ChangeEvent, useState } from "react";

export const useForm = <T>(initialValues: T)=>{
    const [formData, setFormData] = useState({...initialValues});

    const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    console.log(formData);

    const reset = ()=> setFormData({...initialValues});

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const passwordIsEqual = (p1: string, p2: string)=>{
        if(p1 === p2) return true;
        return false;
    }

    return {
        ...formData,
        handleChange,
        isValidEmail,
        reset,
        passwordIsEqual
    }
};