import React, { Component } from 'react'
import { Container, CardGroup, Card, Button } from 'react-bootstrap'
import CarouselBox from '../Components/CarouselBox'

export default class Home extends Component {
  render() {
    return (
      <>
      <CarouselBox />
      <Container>
        <h2 className='text-center m-4'>Our team</h2>
        <CardGroup className='m-4'>
          <Card bg='dark' text='white' border='warning'>
            <Card.Img 
            variant='top'
            src='https://render.fineartamerica.com/images/rendered/search/framed-print/images/artworkimages/medium/1/domesticated-monkey-nicklas-gustafsson.jpg?imgWI=6.5&imgHI=10&sku=CRQ13&mat1=PM918&mat2=&t=2&b=2&l=2&r=2&off=0.5&frameW=0.875'
            />
            <Card.Body>
              <Card.Title>Developers</Card.Title>
              <Card.Text>
                ngd
              </Card.Text>
              <Button variant='primary'>About team</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Developers</Card.Title>
              <Card.Text>
                ngd
              </Card.Text>
              <Button variant='primary'>About team</Button>
            </Card.Body>
            <Card.Img 
            variant='bottom'
            src='https://render.fineartamerica.com/images/rendered/search/framed-print/images/artworkimages/medium/1/domesticated-monkey-nicklas-gustafsson.jpg?imgWI=6.5&imgHI=10&sku=CRQ13&mat1=PM918&mat2=&t=2&b=2&l=2&r=2&off=0.5&frameW=0.875'
            />
          </Card>
          <Card bg='secondary'>
            <Card.Img 
            variant='top'
            src='https://render.fineartamerica.com/images/rendered/search/framed-print/images/artworkimages/medium/1/domesticated-monkey-nicklas-gustafsson.jpg?imgWI=6.5&imgHI=10&sku=CRQ13&mat1=PM918&mat2=&t=2&b=2&l=2&r=2&off=0.5&frameW=0.875'
            />
            <Card.Body>
              <Card.Title>Developers</Card.Title>
              <Card.Text>
                ngd
              </Card.Text>
              <Button variant='primary'>About team</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Developers</Card.Title>
              <Card.Text>
                ngd
              </Card.Text>
              <Button variant='primary'>About team</Button>
            </Card.Body>
            <Card.Img 
            variant='bottom'
            src='https://render.fineartamerica.com/images/rendered/search/framed-print/images/artworkimages/medium/1/domesticated-monkey-nicklas-gustafsson.jpg?imgWI=6.5&imgHI=10&sku=CRQ13&mat1=PM918&mat2=&t=2&b=2&l=2&r=2&off=0.5&frameW=0.875'
            />
          </Card>
          <Card bg='secondary'>
            <Card.Img 
            variant='top'
            src='https://render.fineartamerica.com/images/rendered/search/framed-print/images/artworkimages/medium/1/domesticated-monkey-nicklas-gustafsson.jpg?imgWI=6.5&imgHI=10&sku=CRQ13&mat1=PM918&mat2=&t=2&b=2&l=2&r=2&off=0.5&frameW=0.875'
            />
            <Card.Body>
              <Card.Title>Developers</Card.Title>
              <Card.Text>
                ngd
              </Card.Text>
              <Button variant='primary'>About team</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Developers</Card.Title>
              <Card.Text>
                ngd
              </Card.Text>
              <Button variant='primary'>About team</Button>
            </Card.Body>
            <Card.Img 
            variant='bottom'
            src='https://render.fineartamerica.com/images/rendered/search/framed-print/images/artworkimages/medium/1/domesticated-monkey-nicklas-gustafsson.jpg?imgWI=6.5&imgHI=10&sku=CRQ13&mat1=PM918&mat2=&t=2&b=2&l=2&r=2&off=0.5&frameW=0.875'
            />
          </Card>
        </CardGroup>
      </Container>
      </>
    )
  }
}
