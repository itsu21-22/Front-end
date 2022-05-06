
import React, { Component } from 'react'
import {
    Navbar,
    Container,
    Nav,
    Button
} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import logo from './logo192.png'

import Home from '../Pages/Home'
import About from '../Pages/About'
import Contacts from '../Pages/Contacts'
import Blog from '../Pages/Blog'
import Login from '../Pages/Login'
import Registration from '../Pages/Registration'



export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg='dark' variant='dark' >
                    <Container>
                        <Navbar.Brand href='/'>
                            <img
                                src={logo}
                                height='30'
                                width='30'
                                className='d-inline-block align-top'
                                alt='AquaQuality'
                            /> AquaQuality
                        </Navbar.Brand> 
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='mr-auto'>
                                <Nav.Link href='/'> Головна </Nav.Link>
                                <Nav.Link href='/about'> Основна інформація </Nav.Link>
                                <Nav.Link href='/contacts'> Зворотній зв'язок </Nav.Link>
                                <Nav.Link href='/blog'> Архів показників </Nav.Link>
                            </Nav> 
                        </Navbar.Collapse>
                        <Button variant='outline-info' href='/login'> Увійти </Button>
                        <Button variant='outline-info' href='/registration'> Зареєструватись </Button>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contacts" component={Contacts} />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/registration" component={Registration} />
                    </Switch>
                </Router>
            </>
        );
    }
}
