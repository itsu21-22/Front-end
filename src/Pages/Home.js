import React, { Component } from 'react'
import { Container, CardGroup, Card, Button } from 'react-bootstrap'
import MapWrapper from '../Components/Map'

export default class Home extends Component {
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
              
              
              <Button variant='primary' className='mb-2'>Більше інформації..</Button>
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
              <Button variant='primary' className='mb-2'>Більше інформації..</Button>
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
              <Button variant='primary' className='mb-2'>Більше інформації..</Button>
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
              <Button variant='primary'className='mb-2'>Більше інформації..</Button>
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
              <Button variant='primary'className='mb-2'>Більше інформації..</Button>
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
              <Button variant='primary'className='mb-2'>Більше інформації..</Button>
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
