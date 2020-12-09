import React from 'react'
import'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,} from 'react-bootstrap';
import './login.css';
function Loginlayout(props) {
  return (
    <div >
        <Navbar bg="dark"  >
			<Navbar.Brand href="#home" style={{color:"red",fontFamily:"terminator"}}>ABC</Navbar.Brand>
			<Nav className="mr-auto">
			</Nav>
		</Navbar>
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <form method="POST">
                        <input type="text" onChange={props.loginid} class="fadeIn second" placeholder="login"
                            style={{marginTop:"25px"}}></input>
                        <input type="password"  onChange={props.passw} class="fadeIn third"  placeholder="password"></input>
                        <input type="button" class="fadeIn fourth" onClick={props.onlogin} value="Log In" ></input>
                </form>

            </div>
        </div>
    </div>
  )
}

export default Loginlayout
