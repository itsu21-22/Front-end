import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default class Contacts extends Component {
  render() {
    return (
      <Container style={{ width: '500px' }} >
        <h1 className='text-center mt-3'>Contact Us</h1>
        <Form>
          
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email addres</Form.Label>
            <Form.Control type='email' placeholder='Enter your email'/>
            <Form.Text>
              We'll never share your email with anyone else
            </Form.Text>
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Area for text</Form.Label>
            <Form.Control as='textarea' rows='3'/>
          </Form.Group>
          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Check me out'/>
          </Form.Group>
          <Button variant="primary" type='submit'>Submit</Button>

        </Form>
      </Container>
    )
  }
}
