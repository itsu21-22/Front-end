
import React, { Component } from 'react'
import {
    Navbar,
    Container,
    Nav,
    Button
} from 'react-bootstrap'

import logo from '../Assets/NewLogo.png'





export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Brand href='/' class="text-center">
                            <img
                                src={logo}
                                height='30' 
                                width='190'
                                className='d-inline-block align-top'
                                alt='AquaQuality'
                            />  
                        </Navbar.Brand> 
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='mr-auto' >
                                <Nav.Link href='/'> Головна </Nav.Link>
                                <Nav.Link href='/about'> Основна інформація </Nav.Link>
                                <Nav.Link href='/contacts'> Зворотній зв'язок </Nav.Link>
                                <Nav.Link href='/reserviors'> Водосховища </Nav.Link>
                            </Nav> 
                        </Navbar.Collapse>
                        <Button variant='outline-info' href='/login'> Увійти </Button>
                        <Button variant='outline-info' href='/registration'> Зареєструватись </Button>
                    </Container>
                </Navbar>

               
            </>
        );
    }
}
