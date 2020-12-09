import React from 'react'
import'bootstrap/dist/css/bootstrap.min.css';
import {Button,Container,Row,Col,Form,Card} from 'react-bootstrap';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Sidelayout from './Sidelayout'
 function Newtodolayout(props) {
   
  return (
    <div>
        <Container fluid="md">
            <Row>
                <Col xs={4} style={{borderStyle:"solid",borderWidth:"0px 1px 0px 0px",borderColor:"#999966",height:"640px"}}>
                        <Sidelayout></Sidelayout>
                </Col>
                <Col>
                        <Row>
                            <Col style={{float:"left"}}>
                                <Button variant="light" onClick={props.back} style={{margin:"5px",fontWeight:"bold",fontSize:"30px"}}><ArrowBackIcon style={{marginRight:"5px",fontSize:30}} />Create Task</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card style={{border:"1px solid black",borderRadius:"20px"}}>
                                    <Form style={{margin:"15px 10px 0px 10px"}}>
                                        <Form.Group >
                                            <Form.Label>Enter Task Name</Form.Label>
                                            <Form.Control onChange={props.taskname} placeholder="Task Name" />
                                        </Form.Group>

                                        <Form.Group >
                                            <Form.Label>Enter Description</Form.Label>
                                            <Form.Control onChange={props.description}  placeholder="Description" />
                                        </Form.Group>

                                    </Form>
                                    <Form.Group style={{margin:"15px 0px 10px 20px"}}>
                                        <Form.Label>Branch To</Form.Label>
                                        <Form.Control as="select" onChange={props.branchto} style={{width:"70%"}}>
                                        
                                        <option>To-Do</option>
                                        <option>In-Progress</option>
                                        <option>Done</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group style={{margin:"15px 0px 10px 20px"}}>
                                        <Form.Label>Type of</Form.Label>
                                            <Form.Control as="select" onChange={props.typeoftask} style={{width:"70%"}}>
                                            
                                            <option>Personal</option>
                                            <option>Official</option>
                                            <option>Miscel...</option>
                                            </Form.Control>
                                        </Form.Group>
                                    <Form.Group style={{margin:"15px 0px 10px 20px"}}>
                                        <label style={{display:"block",}}> Select Date</label>
                                        <input type="date" onChange={props.dateselect} style={{display:"block",marginBottom:"7px"}}></input>
                                    </Form.Group>
                                    <Form.Group style={{margin:"15px 0px 10px 20px"}}>
                                        <Button variant="outline-info" style={{}}>Cancel</Button>
                                        <Button variant="success" onClick={props.create} style={{marginLeft:"10px"}}>Create</Button>
                                    </Form.Group>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{border:"1px solid black",borderRadius:"20px"}}>

                                    <Form>
                                        <Form.Group style={{margin:"20px"}} >
                                            <Form.Label>Sub Task</Form.Label>
                                            
                                            {props.cardlist.map( el => { return <Form.Control key={el.key} onChange={el.onChange} style={{marginTop:"10px"}} placeholder={el.placeholder} /> } )}
                                        </Form.Group>

                                    </Form>
                                    <Button variant="light" onClick={props.subtask}style={{margin:"10px 0px 10px 20px",width:"50%"}}>+  New Sub task </Button>
                                </Card>
                            </Col>
                        </Row>

                </Col>
            </Row>
   
        </Container>
    </div>
  )
}
export default Newtodolayout