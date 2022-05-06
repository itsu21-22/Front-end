import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, Form, Button } from 'react-bootstrap'


const ValidationSchema = yup.object().shape({
  name: yup.string().required('Це поле є обов`язковим').min(3, "Введіть ім'я більше ніж 3 символів"),
  email: yup.string().required('Це поле є обов`язковим').email('Ви ввели неправильний емейл')
  
});

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(ValidationSchema)
  });
  const onSubmit = (data) => {
    console.log(data);;
  };

  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
 
        <h1>Registration</h1>
        
        <input type="name" name="name" placeholder="Name" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}

        <input type="text" name="email" placeholder="Email"{...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
    
            <Form.Check type='checkbox' label=' I have read and accept the Privacy Policy'/>
          
        <input type="submit" value="Register"/>
        <h4>Already have an account? <a href ={'/login'}>Click here</a></h4>       
    </form>
  );
}
