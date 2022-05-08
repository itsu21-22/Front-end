import React, { Component } from 'react'
import ReactModal from 'react-modal';
import { Container, CardGroup, Card, Button } from 'react-bootstrap'
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
            <Card style={{ backgroundColor:'rgb(158, 158, 229)'}} >
              <Card.Body>
                <Card.Title className='text-center'> Widget </Card.Title>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Card.Body>
            </Card>
      <Container>
        <h2 className='text-center m-4'>Команда розробників</h2>
        <CardGroup className='m-4'>
          <Card bg='dark' text='white'>
            <Card.Img 
            variant='top'
            src='https://render.fineartamerica.com/images/rendered/search/framed-print/images/artworkimages/medium/1/domesticated-monkey-nicklas-gustafsson.jpg?imgWI=6.5&imgHI=10&sku=CRQ13&mat1=PM918&mat2=&t=2&b=2&l=2&r=2&off=0.5&frameW=0.875'
            />
            <Card.Body className='text-center'>
              <Card.Title >Сітайло Олександр Тарасович</Card.Title>
              <h6>Project Manager</h6>

        <ReactModal 
           isOpen={this.state.showModal}
          
           onRequestClose={this.handleCloseModal}
             className="Modal_1"
           overlayClassName="Overlay"
        >
          <p>Сітайло Олександр Тарасович</p>
          <h6>Project Manager</h6>
          <button className='btn btn-sm btn-secondary btn-close' onClick={this.handleCloseModal}></button>
        </ReactModal>
              <Button onClick={this.handleOpenModal} variant='primary' className='mb-2'>Більше інформації..</Button>

              
              


            </Card.Body>
          </Card>
          <Card bg='dark' text='white'>
            <Card.Img 
            variant='top'
            src='https://render.fineartamerica.com/images/rendered/search/framed-print/images/artworkimages/medium/1/domesticated-monkey-nicklas-gustafsson.jpg?imgWI=6.5&imgHI=10&sku=CRQ13&mat1=PM918&mat2=&t=2&b=2&l=2&r=2&off=0.5&frameW=0.875'
            />
            <Card.Body className='text-center'>
              <Card.Title >Галамушка Тарас Васильович</Card.Title>
                <h6>Back-end Developer, Business Analysis</h6>

                
        <ReactModal 
           isOpen={this.state.showModal2}
           onRequestClose={this.handleCloseModal2}
             className="Modal_1"
           overlayClassName="Overlay"
        >
          <p>Галамушка Тарас Васильович</p>
          <h6>Back-end Developer, Business Analysis</h6>
          <button className='btn btn-sm btn-secondary btn-close' onClick={this.handleCloseModal2}></button>
          
        </ReactModal>
              <Button onClick={this.handleOpenModal2} variant='primary' className='mb-2'>Більше інформації..</Button>

            </Card.Body>
          </Card>
          <Card bg='dark' text='white' >
            <Card.Img 
            variant='top'
            src='https://render.fineartamerica.com/images/rendered/search/framed-print/images/artworkimages/medium/1/domesticated-monkey-nicklas-gustafsson.jpg?imgWI=6.5&imgHI=10&sku=CRQ13&mat1=PM918&mat2=&t=2&b=2&l=2&r=2&off=0.5&frameW=0.875'
            />
            <Card.Body className='text-center'>
              <Card.Title >Карпецький Руслан Сергійович</Card.Title>
                <h6>Front-end Developer</h6>

                <ReactModal 
           isOpen={this.state.showModal3}
          
           onRequestClose={this.handleCloseModal3}
             className="Modal_1"
           overlayClassName="Overlay"
        >
          <p>Карпецький Руслан Сергійович</p>
          <h6>Front-end Developer</h6>
          <button className='btn btn-sm btn-secondary btn-close' onClick={this.handleCloseModal3}></button>
        </ReactModal>
              <Button onClick={this.handleOpenModal3} variant='primary' className='mb-2' >Більше інформації..</Button>


            </Card.Body>
          </Card>
          <Card bg='dark' text='white'>
            <Card.Img 
            variant='top'
            src='https://render.fineartamerica.com/images/rendered/search/framed-print/images/artworkimages/medium/1/domesticated-monkey-nicklas-gustafsson.jpg?imgWI=6.5&imgHI=10&sku=CRQ13&mat1=PM918&mat2=&t=2&b=2&l=2&r=2&off=0.5&frameW=0.875'
            />
            <Card.Body className='text-center'>
              <Card.Title >Малішевський Олег Романович</Card.Title>
                <h6>Front-end, Full-stack Developer</h6>

                <ReactModal 
           isOpen={this.state.showModal4}
          
           onRequestClose={this.handleCloseModal4}
             className="Modal_1"
           overlayClassName="Overlay"
        >
          <p>Малішевський Олег Романович</p>
          <h6>Front-end, Full-stack Developer</h6>
          <button className='btn btn-sm btn-secondary btn-close' onClick={this.handleCloseModal4}></button>
        </ReactModal>
              <Button onClick={this.handleOpenModal4} variant='primary' className='mb-2' >Більше інформації..</Button>

            </Card.Body>
          </Card>
          <Card bg='dark' text='white'>
            <Card.Img 
            variant='top'
            src='https://render.fineartamerica.com/images/rendered/search/framed-print/images/artworkimages/medium/1/domesticated-monkey-nicklas-gustafsson.jpg?imgWI=6.5&imgHI=10&sku=CRQ13&mat1=PM918&mat2=&t=2&b=2&l=2&r=2&off=0.5&frameW=0.875'
            />
            <Card.Body className='text-center'>
              <Card.Title >Брода Владислав Юрійович</Card.Title>
                <h6>Front-end Developer, TeamLead</h6>

                <ReactModal 
           isOpen={this.state.showModal5}
          
           onRequestClose={this.handleCloseModal5}
             className="Modal_1"
           overlayClassName="Overlay"
        >
          <p>Брода Владислав Юрійович</p>
          <h6>Front-end Developer, TeamLead</h6>
          <button className='btn btn-sm btn-secondary btn-close' onClick={this.handleCloseModal5}></button>
        </ReactModal>
              <Button onClick={this.handleOpenModal5} variant='primary' className='mb-2' >Більше інформації..</Button>

            </Card.Body>
          </Card>
          <Card bg='dark' text='white'>
            <Card.Img 
            variant='top'
            src='https://render.fineartamerica.com/images/rendered/search/framed-print/images/artworkimages/medium/1/domesticated-monkey-nicklas-gustafsson.jpg?imgWI=6.5&imgHI=10&sku=CRQ13&mat1=PM918&mat2=&t=2&b=2&l=2&r=2&off=0.5&frameW=0.875'
            />
            <Card.Body className='text-center'>
              <Card.Title>Славич Олексій Олегович</Card.Title>
              <h6>Back-end Developer, DevOps</h6>

              <ReactModal 
           isOpen={this.state.showModal6}
          
           onRequestClose={this.handleCloseModal6}
             className="Modal_1"
           overlayClassName="Overlay"
        >
          <p>Славич Олексій Олегович</p>
          <h6>Back-end Developer, DevOps</h6>
          <button className='btn btn-sm btn-secondary btn-close' onClick={this.handleCloseModal6}></button>
        </ReactModal>
              <Button onClick={this.handleOpenModal6} variant='primary' className='mb-2' >Більше інформації..</Button>
              
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
      <Card style={{ backgroundColor:'rgb(158, 158, 229)'}}>
              <Card.Body>
                <Card.Title className='text-center'> Widget </Card.Title>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Card.Body>
            </Card>
            <Card style={{ backgroundColor:'rgb(148, 148, 209)'}} >
              <Card.Body>
                <Card.Title className='text-center'> Widget </Card.Title>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Card.Body>
            </Card>
      </>
    
    )
    
  }
}

