//import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {
  Navbar, Nav, NavItem, NavDropdown,
  MenuItem, Grid, Row, Col
  } from 'react-bootstrap'
import SafeImage from '../../lib'
import styles from './styles.css'


const customStyles = {
  col: {
    border: '1px solid #dadada',
    borderRadius: '3px',
    padding: '.5em',
    margin: '.5em'
  },
  example: {
    padding: '2px',
    borderRadius: '3px',
    border: '1px dashed #5834ea'
  }
}

const demo = (
  <div>
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#"> SafeImage </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="https://github.com/Gattermeier/SafeImage">Github</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Grid>
      <Row>
        <Col sm={6} md={3} >
          <div style={customStyles.col}>
            <p>Rendered Image with custom styles prop</p>
            <SafeImage className="img-responsive" src='http://lorempixel.com/400/200/' style={customStyles.example}/>
          </div>
        </Col>
        <Col sm={6} md={3}>
          <div style={customStyles.col}>
            <p>Image with failing src props and alternative child components</p>
            <SafeImage src='something.png'><div>Alternative Rendering</div></SafeImage>
          </div>
        </Col>
        <Col sm={6} md={3}>
          <div style={customStyles.col}>
            <p>Image with failing src props and custom onError fn (see console logs)</p>
            <SafeImage src='something.png' onError={() => console.log('custom onError handler triggered')} />
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
)
ReactDOM.render(
  demo,
  document.getElementById('root')
)

// document.querySelector('[rel="shortcut icon"]').href = require('file!./favicon.png')
