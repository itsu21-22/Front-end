import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

import { Container, Card, Row, Col, Button, } from 'react-bootstrap'
 

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md='9'>
          <Card className='m-5' style={{ backgroundColor:'rgb(158, 158, 229)'}}>
            <img 
            width={450}
            height={200}
            className='mr-3'
            src='https://bipbap.ru/wp-content/uploads/2018/09/2015032212-640x400.jpg'
          
            />
            <Card.Body>
              <a href='/Дані.pdf'><h3>Комплексні показники води за 2021р</h3></a>
              <Button variant="success"><a href='/Дані.pdf' download><h6>Завантажити</h6></a></Button>
            </Card.Body>
          </Card>
          <Card className='m-5'style={{ backgroundColor:'rgb(158, 158, 229)'}}>
            <img 
            width={450}
            height={200}
            className='mr-3'
            src='https://bipbap.ru/wp-content/uploads/2018/09/7fa536ce4777b71075b6f223b784b3b2-640x480.jpg'

            />
            <Card.Body>
              <a href='/Дані.pdf'><h3>Комплексні показники води за 2020р</h3></a>
              <Button variant="success" className='mb-2'><a href='/Дані.pdf' download><h6>Завантажити</h6></a></Button>
            </Card.Body>
          </Card>
          <Card className='m-5' style={{ backgroundColor:'rgb(158, 158, 229)'}}>
            <img 
            width={450}
            height={200}
            className='mr-3'
            src='https://bipbap.ru/wp-content/uploads/2018/09/84a60a0dabc11db70eee4d097cb6b3a2.jpg'

            />
            <Card.Body>
              <a href='/Дані.pdf'><h3>Комплексні показники води за 2019р</h3></a>
              
              <Button className='button_blog'variant="success"><a href='/Дані.pdf' download><h6>Завантажити</h6></a></Button>
            </Card.Body>
          </Card>
          </Col>
          <Col md='3'>
            <h5 className='text-center mt-5' >Filter</h5>
            <Card >
              <ListGroup variant='flush' >
                <ListGroup.Item style={{ backgroundColor:'rgb(158, 158, 229)'}}>filter param1</ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor:'rgb(158, 158, 229)'}}>filter param2</ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor:'rgb(158, 158, 229)'}}>filter param3</ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor:'rgb(158, 158, 229)'}}>filter param4</ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor:'rgb(158, 158, 229)'}}>filter param5</ListGroup.Item>
              </ListGroup>
            </Card>
            <Card className='mt-3' style={{ backgroundColor:'rgb(158, 158, 229)'}}>
              <Card.Body>
                <Card.Title> Widget </Card.Title>
                <Card.Text>
                  Some example of text
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
