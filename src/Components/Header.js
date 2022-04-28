
import React, { Component } from 'react'
import {
    Navbar,
    Container,
    Nav,
    Form,
    FormControl,
    Button
} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import logo from './logo192.png'

import Home from '../Pages/Home'
import About from '../Pages/About'
import Contacts from '../Pages/Contacts'
import Blog from '../Pages/Blog'


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
                                <Nav.Link href='/'> Home </Nav.Link>
                                <Nav.Link href='/about'> About Us </Nav.Link>
                                <Nav.Link href='/contacts'> Contacts </Nav.Link>
                                <Nav.Link href='/blog'> Blog </Nav.Link>
                            </Nav> 
                        </Navbar.Collapse>
                        <Form inline>
                                <FormControl
                                    type='text'
                                    placeholder='Search'
                                    className='mr-sm-2'

                                />
                            </Form>
                        <Button variant='outline-info'>Search</Button>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contacts" component={Contacts} />
                        <Route exact path="/blog" component={Blog} />
                    </Switch>
                </Router>
            </>
        );
    }
}
