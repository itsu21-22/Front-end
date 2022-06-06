import React, { Component } from 'react' 
import { 
    Navbar, 
    Nav, 
} from 'react-bootstrap' 

import logo from '../Assets/NewLogo.png' 
 
export default class Footer extends Component { 
    render() { 
        return ( 
            <> 
            <div class="footer_all_wrapper">
                <Navbar collapseOnSelect expand="md" bg='dark' variant='dark' > 
                
                        <Navbar.Brand href='/'> 
                        <div class="footer_img" >
                            <img 
                                src={logo} 
                                height='30' 
                                width='170'
                                
                                className='' 
                                alt='AquaQuality' 
                            /> 
                            </div>
                        </Navbar.Brand>  
                        <Navbar.Toggle aria-controls='' /> 
                        <Navbar.Collapse id=''> 
                            <Nav > 
                            <div class="footer_row">
                                <Nav.Link href='/'> <p class="footer_text">Головна</p></Nav.Link> 
                                <Nav.Link href='/about'><p class="footer_text">Основна інформація</p> </Nav.Link> 
                                </div> 
                                <div class="footer_row">
                                <Nav.Link href='/contacts'><p class="footer_text">Зворотній зв'язок</p>  </Nav.Link> 
                                <Nav.Link href='/reserviors'><p class="footer_text">Водосховища</p> </Nav.Link> 
                                </div>
                                <div className=""> 
       
      </div>
                            
                            </Nav>  
                        </Navbar.Collapse> 
                    
                   
                </Navbar> 
                <div  class="footer_wrapper">
               <p  class="footer_cop"> 
          &copy; {new Date().getFullYear()}  <a style={{color:"white"}} href="/"> AquaQuality.com </a>
          </p> 
          </div>
          </div>
               

        
             
            </> 
        ); 
    } 
}