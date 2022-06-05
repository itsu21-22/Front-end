import React, { Component } from 'react' 
import { 
    Navbar, 
    Nav, 
} from 'react-bootstrap' 

 
import logo from './logo192.png' 

 
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
                                width='30'
                                
                                className='' 
                                alt='AquaQuality' 
                            /> AquaQuality 
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
                                <Nav.Link href='/blog'><p class="footer_text">Архів показників </p> </Nav.Link> 
                                </div>
                                <div className=""> 
       
      </div>
                            
                            </Nav>  
                        </Navbar.Collapse> 
                    
                   
                </Navbar> 
                <div  class="footer_wrapper">
               <p  class="footer_cop"> 
          &copy; {new Date().getFullYear()} Copyright: <a style={{color:"white"}} href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
          </p> 
          </div>
          </div>
               

        
             
            </> 
        ); 
    } 
}