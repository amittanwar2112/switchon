import React, { Component } from 'react'
import Todolayout from '../layout/Todolayout'
import Newtodolayout from '../layout/Newtodolayout'
import {connect} from 'react-redux';
import'bootstrap/dist/css/bootstrap.min.css';
import {Button,Card,ListGroup,Badge,Dropdown,ButtonGroup,Row,Col} from 'react-bootstrap';

class Mainlogic extends Component {
  
    constructor(props) {
        super(props);
        this.renderpage="";
        this.taskname="";
        this.description="";
        this.typeoftask="Personall";
        this.branch="To-Do";
        this.date="";
        this.todotaskcard=[];
        this.inprogtaskcard=[];
        this.donetaskcard=[];
        this.i = 1;
        this.state ={
        newTask: false,
        TaskValue: 2,
        subtaskcard : [{ key: 0, placeholder: "Sub Task 1", value: '', onChange: (event) => { console.log('Event', event); this.changesubtask(event, 0); } }],
        }
      }
     
    checknewtask = (event) => {
        this.setState({newTask : true}); 
    }  
    backtopage = (event) => {
        this.setState({newTask : false,subtaskcard : [{ key: 0, placeholder: "Sub Task 1", value: '', onChange: (event) => { console.log('Event', event); this.changesubtask(event, 0); } }]}); 
        
    }
    subtask = (event) => {
        //console.log("insubtask")
        let index = this.i;
        let subtaskname = "Sub task" +  " " + (this.i + 1)
        let subtaskcardlist = [...this.state.subtaskcard];
        //subtaskcardlist.push(<Form.Control key={this.i} onChange={this.changesubtask} style={{marginTop:"10px"}} placeholder={subtaskname} />)
        subtaskcardlist.push({ key: index, placeholder: subtaskname, value: '', onChange: (event) => { console.log('Event', event); this.changesubtask(event, index); } })
        
        //console.log(subtaskcardlist)
        this.setState({subtaskcard : subtaskcardlist}); 
        //console.log( this.state.subtaskcard)
        this.i=this.i+1;
        
    } 
    changesubtask = (event, idx) =>{
        let subtaskcardlist = [...this.state.subtaskcard];
        let subtask = subtaskcardlist[idx];
        console.log(idx,subtaskcardlist)
        subtask.value = event.target.value;
        subtaskcardlist[idx] = subtask;
        this.setState({subtaskcard : subtaskcardlist});
        console.log(this.state.subtaskcard);
        //this.taskname =  event.target.value

    } 
    taskName = (event) =>{
        console.log(event.target.value)
        this.taskname =  event.target.value

    }  
    descriptionName = (event) =>{
        console.log(event.target.value)
        this.description =  event.target.value
    } 
    selectitype = (event) =>{
        console.log(event.target.value)
        this.typeoftask =  event.target.value
    } 
    selectBranch = (event) =>{
        console.log(event.target.value)
        this.branch =  event.target.value

    } 
    selectDate = (event) =>{
        console.log(event.target.value)
        this.date =  event.target.value
    } 
    finalCreate = (event) =>{
        let x =   <Card style={{margin:"10px"}} > 
                        <Row>
                            <Col>
                                <Badge variant="success" style={{margin:"10px",width:"100%",fontSize:"10px"}}>{this.typeoftask}</Badge>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                         
                         

                        <Card.Body>
                        <Card.Title> 
                            {this.taskname} 
                            <span style={{fontSize:"8px",float:"right",marginTop:"8px"}}>
                            {this.date}  
                            </span>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.description}</Card.Subtitle>
                        </Card.Body>
                        <ListGroup variant="flush">
                            {this.state.subtaskcard.map( subtsk => {return <ListGroup.Item key={subtsk.key} >{subtsk.value}</ListGroup.Item> } )}
                        </ListGroup>
                    </Card>
        if(this.branch === "To-Do"){
            //console.log("inside todo")
            this.todotaskcard.push(x);
            this.props.onIncNoTodo();
            
            this.props.toDoTask(this.todotaskcard);


        }
        if(this.branch === "In-Progress"){
            //console.log("inside progres")
            this.inprogtaskcard.push(x);
            this.props.onIncNoInProg();
            this.props.toInProg(this.inprogtaskcard);
        }
        if(this.branch === "Done"){
            //console.log("inside done")
            this.donetaskcard.push(x);
            this.props.onIncNoDone();
            this.props.toDone(this.donetaskcard);
        }
        if(this.typeoftask === "Personall"){
            
            this.props.onIncNoPersonal();
        }
        if(this.typeoftask === "Official"){
           
            this.props.onIncNoOfficial();
        }
        if(this.typeoftask === "Miscel..."){
        
            this.props.onIncNoMsic();
        }
        this.setState({newTask : false,subtaskcard : [{ key: 0, placeholder: "Sub Task 1", value: '', onChange: (event) => { console.log('Event', event); this.changesubtask(event, 0); } }]}); 
           
        
    } 
    render() {
        console.log("no od todo");
        console.log(this.props.notodo);
        console.log("no of inprog");
        console.log(this.props.noinprog);
        console.log("no of done");
        console.log(this.props.nodone);
       if(this.state.newTask){
        this.renderpage= <Newtodolayout 
        back={this.backtopage}
        subtask={this.subtask}
        cardlist ={this.state.subtaskcard}
        taskname={this.taskName}
        description={this.descriptionName}
        typeoftask={this.selectitype}
        branchto ={this.selectBranch}
        dateselect={this.selectDate}
        create={this.finalCreate}
        subtaskv={this.changesubtask}
        ></Newtodolayout>
       }
       else {
        this.renderpage= <Todolayout 
        todocard={this.props.todo}
        progcard={this.props.inprog} 
        donecard={this.props.done}  
        branchtodo ={this.branch}
        newtask={this.checknewtask}> 
        </Todolayout>;
       }
    return (
      <div>
          {this.renderpage}
      </div>
    )
  }
}
const mapStateToProps = state => {
    return {
        notodo : state.nooftodo,
        noinprog : state.noofinprog,
        nodone : state.noofdone,
        nopersonal: state.nofopesonal,
        noofficial: state.noofofficial,
        nomsic: state.noofmsic,
        noall : state.noofall,
        todo : state.todo,
        inprog : state.inprog,
        done : state.done
    };
};

const mapDispatchToProps = dispatch =>{
    return {
        onIncNoTodo : () => dispatch({type :'INCREMENTTODO'}),
        onIncNoInProg : () => dispatch({type :'INCREMENTINPROG'}),
        onIncNoDone : () => dispatch({type :'INCREMENTDONE'}),
        onIncNoPersonal : () => dispatch({type :'INCREMENTPERSONAL'}),
        onIncNoOfficial : () => dispatch({type :'INCREMENTOFFICIAL'}),
        onIncNoMsic : () => dispatch({type :'INCREMENTMSIC'}),
        onIncNoMsic : () => dispatch({type :'INCREMENTMSIC'}),
        toDoTask : (todotaskvalue) => dispatch({type :'TODOTASK',value :todotaskvalue}),
        toInProg : (toinprogvalue) => dispatch({type :'TOINPROG',value :toinprogvalue}),
        toDone : (todonevalue) => dispatch({type :'TODONE',value : todonevalue})


    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Mainlogic)
