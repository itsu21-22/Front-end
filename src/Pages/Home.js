import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import MapWrapper from '../Components/Map'






export default class Home extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
      showModal5: false,
      showModal6: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleOpenModal2 = this.handleOpenModal2.bind(this);
    this.handleOpenModal3 = this.handleOpenModal3.bind(this);
    this.handleOpenModal4 = this.handleOpenModal4.bind(this);
    this.handleOpenModal5 = this.handleOpenModal5.bind(this);
    this.handleOpenModal6 = this.handleOpenModal6.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleCloseModal2 = this.handleCloseModal2.bind(this);
    this.handleCloseModal3 = this.handleCloseModal3.bind(this);
    this.handleCloseModal4 = this.handleCloseModal4.bind(this);
    this.handleCloseModal5 = this.handleCloseModal5.bind(this);
    this.handleCloseModal6 = this.handleCloseModal6.bind(this);
    


  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleOpenModal2 () {
    this.setState({ showModal2: true });
  }

  handleOpenModal3 () {
    this.setState({ showModal3: true });
  }

  handleOpenModal4 () {
    this.setState({ showModal4: true });
  }

  handleOpenModal5 () {
    this.setState({ showModal5: true });
  }

  handleOpenModal6 () {
    this.setState({ showModal6: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  handleCloseModal2 () {
    this.setState({ showModal2: false });
  }

  handleCloseModal3 () {
    this.setState({ showModal3: false });
  }

  handleCloseModal4 () {
    this.setState({ showModal4: false });
  }

  handleCloseModal5 () {
    this.setState({ showModal5: false });
  }

  handleCloseModal6 () {
    this.setState({ showModal6: false });
  }


  render() {

    

    return (
      <>
      <MapWrapper />
            <Card style={{ backgroundColor:'rgb(158, 158, 229)'}}  >
              <Card.Body>

                <h2 className='text-center'>Привіт!</h2>
                <p> Якщо Ви це читаєте, це означає те, що Ви потрапили на проект AquaQuality,
                розробленого командою студентів з ІТ СТЕП Університету. Сам проект - система
                 моніторингу водних ресурсів міста Львова, у котрій ми постарались об'єднати
                 простоту та інноваційні рішення. Метою сайту було забезпечення громадськості 
                 платформою, за допомогою якої користувач зможе отримати швидкий доступ до 
                 показників води, такі як вміст металів, йоду тощо.. Також користувач зможе 
                 отримати додаткові дані, що стосуються менш поглибленого показника, наприклад,
                 площа та глибина водойми, її температура, якщо людина не місцева, то взявши 
                 координати у нас вона зможе запросто прокласти маршрут і дістатись туди. </p> 
                <p> Наша мета - зробити доступ до інформації швидким, стабільним і щоб всі передані нами дані
                були максимально точними.</p>
                <h2>Як дізнатись показники стану водойми?</h2>
                <p>Для цього Вам потрібно вибрати необхідне водосховище на інтерактивній карті, 
                кожне з них позначається невеликою міткою синього відтінку. Після цього Ви отримаєте основну
                інформацію про водойму у вигляді невиличного випливаючого вікна, цими параметрами будуть назва водойми,
                її глибина і площа. Якщо ви бажаєте отримати більший обсяг інформації, то вам потібно натистути кнопку 
                "More info" що знаходиться внизу випливаючого вікна. Одразу після цього Вам відкриється доступ до 
                показників погодніх умов в місці розташування водойми, буде також опція переглянути показники в даній водоймі
                у певний період часу, а також невеличку історію створення цього водосховища.</p>


              </Card.Body>
            </Card>
     
      </>
    
    )
    
  }
}

