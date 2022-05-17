import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import '../styles/login.css';

const ValidationSchema = yup.object().shape({
  email: yup.string().required('Це поле є обов`язковим').email('Ви ввели неправильний емейл'),
  password: yup.string().required('Це поле є обов`язковим').min(8, 'Введіть пароль більше ніж 8 символів')
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
    <form id="form" onSubmit={handleSubmit(onSubmit)}>
 
        <h1>Log In</h1>
        <input type="text" name="email" placeholder="Email"{...register("email")} />
        {errors.email && <p class="textlogin">{errors.email.message}</p>}
        <input type="password" name="password" placeholder="Password" {...register("password")} />
        {errors.password && <p class="textlogin">{errors.password.message}</p>}

        <input type="submit" value="Увійти"/>
        <h4>Forgot Password? <a href ='/contacts'>Click here</a></h4>
    </form>
  );
}



  