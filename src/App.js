import React, {Component, Fragment} from 'react';
import './App.css';
import {Container,Row,Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderImg from './login1.png'
class LoginDesign extends Component{
  render(){
    return( 
      <Fragment>
        <Container>
          <Row>
            <Col lg={6} md ={6} sm= {12} className= "p-5 m-auto">
            
            <div>
              <img className="HeaderImg" src ={HeaderImg} alt=""/>
            <form>
      <input type="text" id="login" class="fadeIn second" name="login" placeholder="login"/>
      <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"/>
      <input type="submit" class="fadeIn fourth" value="Log In"/>
    </form>
           </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
      
    );
  }
}

export default LoginDesign;