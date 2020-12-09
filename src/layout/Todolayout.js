import React from 'react'
import'bootstrap/dist/css/bootstrap.min.css';
import SearchIcon from '@material-ui/icons/Search';
import {Button,Container,Row,Col,Form,FormControl,InputGroup,Card} from 'react-bootstrap';
import Sidelayout from './Sidelayout'


function Todolayout(props) {
 
  return (
    <div>
        <Container fluid="md">
            <Row>
                <Col xs={4} style={{borderStyle:"solid",borderWidth:"0px 1px 0px 0px",borderColor:"#999966",height:"650px"}}>
                        <Sidelayout ></Sidelayout>
                </Col>
                <Col>
                        <Row>
                            <Col >
                                <InputGroup style={{width:"100%",margin:"10px"}}>
                                    <InputGroup.Prepend>
                                    <InputGroup.Text style={{borderRadius:"19px 0px 0px 19px"}}><SearchIcon /></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl style={{borderRadius:"0px 19px 19px 0px"}} placeholder="Search Task By Title" />
                                    <Button style={{marginLeft:"10px"}}variant="outline-info" onClick={props.newtask}>New Task</Button>
                                    <input type="date" style={{marginLeft:"10px"}}></input>
                                </InputGroup>

                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card style={{border:"1px solid #999966",borderRadius:"20px"}}>
                                    <Card.Header style={{textAlign:"center",backgroundColor:"#ffff33",fontWeight:"bold",borderRadius:"20px 20px 0px 0px"}}>To Do</Card.Header>
                                    <Card.Body>{props.todocard}</Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{border:"1px solid #999966",borderRadius:"20px"}}>
                                    <Card.Header style={{textAlign:"center",backgroundColor:"#5cd65c",fontWeight:"bold",borderRadius:"20px 20px 0px 0px"}}>In-progress</Card.Header>
                                    <Card.Body>{props.progcard}</Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{border:"1px solid #999966",borderRadius:"20px"}}>
                                    <Card.Header style={{textAlign:"center",backgroundColor:"#66ffb3",fontWeight:"bold",borderRadius:"20px 20px 0px 0px"}}>Done</Card.Header>
                                    <Card.Body>{props.donecard}</Card.Body>
                                </Card>
                            </Col>
                        </Row>
                </Col>
            </Row>
    
        </Container>
       
    </div>
  )
}

export default Todolayout
