import React, { Component } from 'react'
import Loginlayout from './layout/Loginlayout';
import Mainlogic from './mainlogic/Mainlogic';
import {connect} from 'react-redux';
import axios from 'axios'


 class App extends Component {
  constructor(props) {
    super(props);
    this.loginId="";
    this.loginPassw = "";
    this.rendercompo = "";
    this.tokenvalue ="";
    this.state ={
    isLogin: false,
    tokken :""
    };
  }

    selectloginid = (event) =>{
      this.loginId = event.target.value;


    }
    selectpassw = (event) =>{
      this.loginPassw = event.target.value;
    }

      finalsubmit = (event) =>{
        let reqbody={ "email": "eve.holt@reqres.in", "password": "cityslicka" }

        let reqBody= { 
          "email": this.loginId ,
          "password":  this.loginPassw
          }
         console.log(reqBody);   
        axios.post('https://reqres.in/api/login',reqBody).then(response =>{
            //console.log(response.data.token)
            this.tokenvalue = response.data.token ;
            //console.log(this.tokenvalue)
            //this.setState({tokken : tokenvalue});
            this.props.onLogin(this.tokenvalue);            

        });



      }

  render() {

    if (this.props.tokenvalue === ""){
      this.rendercompo =  <Loginlayout
                              loginid ={this.selectloginid}
                              passw ={this.selectpassw}
                              onlogin ={this.finalsubmit}>
                          </Loginlayout>
    }
    else {
      console.log(this.props.tokenvalue);
      this.rendercompo = <Mainlogic></Mainlogic>
    }
    return (
      <div>
         {this.rendercompo }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      tokenvalue : state.token
  };
};

const mapDispatchToProps = dispatch =>{
  return {
      onLogin : (tvalue) => dispatch({type :'LOGIN',value : tvalue}),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);