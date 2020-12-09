import React from 'react'
import'bootstrap/dist/css/bootstrap.min.css';
import SearchIcon from '@material-ui/icons/Search';
import {Row,Col,Card,ListGroup,Badge,InputGroup,Button,ButtonGroup} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Pie,} from 'react-chartjs-2';

function Sidelayout(props) {
    const graphstate = {
        labels: ['To-Do', 'In-Progress', 'Done'],
        datasets: [
          {
            label: 'Branch',
            backgroundColor: [
              '#B21F00',
              '#C9DE00',
              '#2FDE00',
              '#00A6B4',
              '#6800B4'
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            '#003350',
            '#35014F'
            ],
            data: [props.notodo , props.noinprog, props.nodone]
          }
        ]
      }
  return (
    <div>
        <Row>
            <Col style={{textAlign:"right"}}>
                <ButtonGroup aria-label="Basic example" style={{margin:"8px"}}>
                        <Button variant="info" style={{borderRadius:"10px 0px 0px 10px",width:"20%",fontSize:"10px"}} >User</Button>
                        <Button variant="outline-primary" style={{borderRadius:"0px 10px 10px 0px",fontSize:"10px",width:"20%"}} onClick={props.onLogout}>Logout</Button>
                </ButtonGroup>
                
            </Col>
        </Row>
        <Row>
            <Col >
                <Row>
                    <Col>
                        <ListGroup horizontal style={{margin:"8px",width:"100px"}}>
                            <ListGroup.Item style={{background:"#66ffb3",width:"80%"}}>All</ListGroup.Item>
                            <ListGroup.Item>{props.noall}</ListGroup.Item>
                        </ListGroup>

                    </Col>

                    <Col>
                      
                        <ListGroup horizontal style={{margin:"8px",width:"100px"}}>
                            <ListGroup.Item style={{background:"#ffff33",width:"100%"}}>Personal</ListGroup.Item>
                            <ListGroup.Item>{props.nopersonal}</ListGroup.Item>
                        </ListGroup>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ListGroup horizontal style={{margin:"8px",width:"100px"}}>
                            <ListGroup.Item style={{background:"#ff00ff",width:"100%"}}>Official</ListGroup.Item>
                            <ListGroup.Item>{props.noofficial}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <ListGroup horizontal style={{margin:"8px",width:"100px"}}>
                            <ListGroup.Item style={{background:"#5cd65c",width:"80%"}}>Misc.</ListGroup.Item>
                            <ListGroup.Item>{props.nomsic}</ListGroup.Item>
                        </ListGroup>

                    </Col>
                </Row>
         
            </Col>

        </Row>
        <Row>
            <Col>
                    <Pie
                        data={graphstate}
                        options={{
                            title:{
                            display:true,
                            text:'No of Task in which Branch',
                            fontSize:20
                            },
                            legend:{
                            display:true,
                            position:'right'
                            }
                        }}
                    />
            </Col>
        </Row>

    </div>
  )
}
const mapStateToProps = state => {
    return {
        notodo : state.nooftodo,
        noinprog : state.noofinprog,
        nodone : state.noofdone,
        nopersonal: state.nofopesonal,
        noofficial: state.noofofficial,
        nomsic: state.noofmsic,
        noall : state.noofall
    };
};
const mapDispatchToProps = dispatch =>{
    return {
        onLogout : () => dispatch({type :'LOGOUT',value : ""}),
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(Sidelayout)
