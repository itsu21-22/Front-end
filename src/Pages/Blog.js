import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

import { Container, Card, Row, Col, Button, Form } from 'react-bootstrap'
 

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md='3'>
            <h5 className='text-center mt-5' >Пошук</h5>
            <Form>
              <Form.Group className="mt-3" controlId="formFind">
                <Form.Control type="text" placeholder="Введіть назву..." />
              </Form.Group>
            </Form>
          </Col>
          <Col md='9'>
            <h5 className='text-center mt-5' >Водосховища</h5>
            <div class="card-flex">
              <Card style={{ width: '18rem' }} className="card-style">
                <Card.Img variant="top" src="https://map.fishergo.com.ua/media/djcatalog2/images/item/5/pozharnoe-vodokhranilishche-lvovskoe-more-v-lvovskoj-oblasti_f.jpg" />
                <Card.Body>
                  <Card.Title className='text-center'>Білогорське водосховище</Card.Title>
                  <Card.Text className='text-center'>
                  Львівська область, Львів, вулиця Білогорща
                  </Card.Text>
                  <div class="flex-helper">
                    <Button variant='outline-info'>Показання</Button>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }} className="card-style">
                <Card.Img variant="top" src="https://ua-travel.info/fotos/catalog/0/7122.jpg" />
                <Card.Body>
                  <Card.Title className='text-center'>Кривчицьке водосховище</Card.Title>
                  <Card.Text className='text-center'>
                  Львівська область, Львів, вулиця Богданівська
                  </Card.Text>
                  <div class="flex-helper">
                    <Button variant='outline-info'>Показання</Button>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }} className="card-style">
                <Card.Img variant="top" src="https://ua-travel.info/fotos/catalog/0/7119.jpg" />
                <Card.Body>
                  <Card.Title className='text-center'>Лисиницьке водосховище</Card.Title>
                  <Card.Text className='text-center'>
                  Львівська область, Пустомитівський район
                  </Card.Text>
                  <div class="flex-helper">
                    <Button variant='outline-info'>Показання</Button>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }} className="card-style">
                <Card.Img variant="top" src="https://ua-travel.info/fotos/catalog/0/7185.jpg" />
                <Card.Body>
                  <Card.Title className='text-center'>Річка Марунька</Card.Title>
                  <Card.Text className='text-center'>
                  Львівська область, Лісовий заказник, Великий ліс
                  </Card.Text>
                  <div class="flex-helper">
                    <Button variant='outline-info'>Показання</Button>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }} className="card-style">
                <Card.Img variant="top" src="https://lh6.googleusercontent.com/-wCCu06aUip0/VRxazgsRWAI/AAAAAAAACa4/8Xcc16Rru8E/w732-h549-no/20150326_165151.jpg" />
                <Card.Body>
                  <Card.Title className='text-center'>Річка Зубра</Card.Title>
                  <Card.Text className='text-center'>
                  Львівська область, Пустомитівський район
                  </Card.Text>
                  <div class="flex-helper">
                    <Button variant='outline-info'>Показання</Button>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }} className="card-style">
                <Card.Img variant="top" 
                src="https://ua-travel.info/fotos/catalog/0/7107.jpg" />
                <Card.Body>
                  <Card.Title className='text-center'>Річка Потік</Card.Title>
                  <Card.Text className='text-center'>
                  Львівська область, с. Малі       Грибовичі
                  </Card.Text>
                  <div class="flex-helper">
                    <Button variant='outline-info'>Показання</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
