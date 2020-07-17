import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'
import {NavDropdown} from 'react-bootstrap'


import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'

export  class Navigation extends Component {
    render() {
        return (
            <div className="menu">
            <Navbar bg="white" expand="lg"  >
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <NavbarCollapse id="basic-navbar-nav">
            <Nav className="Nav">
            <NavLink className="d-inline p-3 bg-white text-dark  " to="/">  Anasayfa  </NavLink>
            <NavDropdown className="d-inline p-2 bg-white text-dark " title="Kurumsal" id="basic-nav-dropdown">
                <NavDropdown.Item href="/tarihce">Tarihce</NavDropdown.Item>
                <NavDropdown.Item href="/misyon">Misyon</NavDropdown.Item>
                <NavDropdown.Item href="/yönetim">Yönetim</NavDropdown.Item>
                <NavDropdown.Divider /> 
                
            </NavDropdown>

            <NavLink className="d-inline p-3 bg-white text-dark " to="/iletisim">İletisim  </NavLink>
            <NavLink className="d-inline p-3 bg-white text-dark" to="/duyurular">Duyurular</NavLink>
            <NavLink className="d-inline p-3 bg-white text-dark" to="/insankaynakları">İnsanKaynakları  </NavLink>
            <NavLink className="d-inline p-3 bg-white text-dark " to="/deneme">İş Başvuru  </NavLink>
            
            
            
    
            </Nav>
            </NavbarCollapse>
            </Navbar>
                
            </div>
        )
    }
}
export default Navigation ;
