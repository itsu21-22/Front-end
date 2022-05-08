import React from "react";
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form } from 'react-bootstrap'


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

  
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }



  function closeModal() {
    setIsOpen(false);
  }

  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
 
        <h1>Registration</h1>
        
        <input type="name" name="name" placeholder="Name" {...register("name")} />
        {errors.name && <p class="textlogin">{errors.name.message}</p>}

        <input type="text" name="email" placeholder="Email"{...register("email")} />
        {errors.email && <p class="textlogin">{errors.email.message}</p>}

        <Form.Check type='checkbox' label=' I have read and accept the Privacy Policy'/>
          
        <button class="modal_butt" onClick={openModal}>Privacy Policy</button>

        <input type="submit" value="Register"/>
        <h4>Already have an account? <a href ={'/login'}>Click here</a></h4>
        
        
        
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal"
        
        contentLabel="Example Modal"
      >
        <p>ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ<br></br>
Цей документ описує політику конфіденційності для сайту ces.org.ua (далі – Сайт) громадської організації
«Центр економічної стратегії». . У цьому документі роз’яснюється, які види інформації можуть бути зібрані і
зберігатися на Сайті, та як може використовуватися і надаватися ця інформація.
Збір та використання персональних даних
Персональні дані – це відомості чи сукупність відомостей про фізичну особу, яка ідентифікована або може
бути конкретно ідентифікована.
Відвідувачу може бути запропоновано ввести персональні дані для цілей реєстрації на Сайті.
Після заповнення форми на отримання новин Центру економічної стратегії, а також форми зворотного
зв’язку, що розміщені на Сайті, вважається, що відвідувач надав згоду на обробку Центром економічної
стратегії своїх персональних та контактних даних. Центр економічної стратегії може зберігати інформацію
про з'єднання, трафік, дату та час тривалості роботи відвідувача на Сайті.
Персональні дані відвідувачів використовуються задля забезпечення обміну інформацією, відносин у сфері
реклами та комунікації відповідно до Законів України "Про захист персональних даних", "Про інформацію",
"Про рекламу", "Про телекомунікації", "Про підприємництво", "Про захист інформації в інформаційнотелекомунікаційних системах", НД ТЗІ 2.5-010-03 "Вимоги до захисту інформації WEB- сторінки від
несанкціонованого доступу".
Персональні дані відвідувачів можуть зберігатися протягом 3 років.
На Сайті фіксується доменне ім'я або IP-адреса комп'ютера відвідувача, дата доступу, файли (ім'я файлу і URL),
код відповіді HTTP та веб-сайт, з якого відвідувач потрапив на Сайт, кількість байт, переданих в ході сесії.
При роботі Сайту використовуються файли cookie, які забезпечують підтримку функцій безпеки та їх запуск.
Файли cookie також дозволяють відстежувати порушення політики конфіденційності та умови використання
Сайту відвідувачами/їх пристроями.
За допомогою системи Google Analytics збирається статистика про відвідування Сайту, така як сторінки, що
відвідуються, кількість переглядів сторінок, інформацію, яка була завантажена, домени інтернет-провайдерів
та країни походження відвідувачів, а також адреси веб-сайтів, що були відвідані до та після Сайту, тощо.
Жодна з цих дій не пов’язана з відвідувачем особисто та вимірюється тільки у сукупності.</p>
<button className='btn btn-sm btn-secondary btn-close' onClick={closeModal}></button>

        
      </Modal>
    </form>    
  );
}

