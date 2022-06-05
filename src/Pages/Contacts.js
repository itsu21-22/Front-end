import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default class Contacts extends Component {
  render() {
    return (
      <div class="form_wrapper">
      <Container style={{ width: '500px', height: '437px' }} >
        <h2 className='text-center mt-3' >Зв'яжіться з нами</h2>
        <Form>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Електронна адреса</Form.Label>
            <Form.Control type='email' placeholder='Введіть Вашу електронну адресу'/>
            <Form.Text>
              Ми не передаємо вашу електронну пошту третім особам.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Місце для тексту</Form.Label>
            <Form.Control as='textarea' rows='3'/>
          </Form.Group>
          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Сповістити мене'/>
          </Form.Group>
          <Button variant="primary" type='submit'>Відправити</Button>

        </Form>
      </Container>
      </div>
    )
  }
}
