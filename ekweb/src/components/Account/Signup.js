import React,{Component} from 'react';
import './Signup.css';
import {Modal,Button,ButtonToolbar} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import axios from 'react';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/dist/style.css';
import PasswordStrengthMeter from './PasswordStrengthMeter';


class Signup extends Component{
  
    state = {
      phone:'',
       open:true,
       fields: {},
       errors: {},
       password:''
       }
 
    handleValidation(){
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      //Name
      if(!fields["Name"]){
         formIsValid = false;
         errors["Name"] = "Pls Enter Name";
      }
      //Email
      if(!fields["Email"]){
        formIsValid = false;
        errors["Email"] = "Pls Enter Email Id";
     }

     if(typeof fields["Email"] !== "undefined"){
        let lastAtPos = fields["Email"].lastIndexOf('@');
        let lastDotPos = fields["Email"].lastIndexOf('.');

        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["Email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["Email"].length - lastDotPos) > 2)) {
           formIsValid = false;
           errors["Email"] = "Email is not valid";
         }
    } 

       //Phone
        if(!fields["Phone"]){
          formIsValid = false;
          errors["Phone"] = "Pls Enter only numbers";
       }
      if(typeof fields["Phone"] !== "undefined"){
         if(!fields["Phone"].match(/^[0-9\b]+$/)){
            formIsValid = false;
            errors["Phone"] = "Pls Enter Only Numbers";
         }        
      }
        //CompanyName
        if(!fields["CompanyName"]){
          formIsValid = false;
          errors["CompanyName"] = "Pls Enter CompanyName";
       }
     
       //Designation
       if(!fields["Designation"]){
        formIsValid = false;
        errors["Designation"] = "Pls Enter Designation";
     }
      //Password
      if(!fields["Password"]){
        formIsValid = false;
        errors["Password"] = "Pls Enter Password";
      }
    
     this.setState({errors: errors});
     return formIsValid;
 }
 
    handleChangeAll(field, event){
      let fields = this.state.fields;
      fields[field] =event.target.value; 
      this.setState({fields});
       if(this.handleValidation()){
        this.setState({errors: null});
       }
    }
    handleSubmit=(event)=>{
     
      event.preventDefault();
      if(this.handleValidation()){
        axios.post('http://jsonplaceholder.typicode.com/Posts',this.state.fields ).then(response=>{
        console.log(response)
        })
        .catch(error=>{
           console.log(error)
        })
      }
    }
      onOpenModal=()=>{
        this.setState({open:true});
      }
      onCloseModal=()=>{
        this.setState({open:false});
     }
     handleOnChange=(value)=> {
      this.setState({ phone: value });
    }
     render(){
     const {open} = this.state;
     const { password } = this.state;
     return(
      <>
     <Modal id="signup_modal" class="_model_radius"  centered size="lg" show={open} onHide={this.onCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="signup_frm" class="row">
        <form id="signup_form" onSubmit={this.handleSubmit}>
          <div class="container">
            <div class="row">
             <div class="col-md-6">
             <span style={{color: "red"}}>{this.state.errors["Name"]}</span>
             <TextField
                id="standard-Name-input"
                label="Name"
                type="text"
                name="Name"
                value={this.state.fields["Name"]}
                autoComplete="current-Name"
                margin="normal"
                onChange={this.handleChangeAll.bind(this,"Name")}
              />
             
              </div>
              <div class="col-md-6 ">
              <span style={{color: "red"}}>{this.state.errors["Email"]}</span>
              <TextField
                id="standard-Email-input"
                label="Email"
                type="Email"
                name="Email"
                value={this.state.fields["Email"]}
                autoComplete="current-Email"
                margin="normal"
                onChange={this.handleChangeAll.bind(this,"Email")}
              />
              </div>
              </div>
           
            <div class="row">
            <div class="col-md-6">
            <span style={{color: "red"}}>{this.state.errors["Phone"]}</span>
            <div  style={{display:"flex", justifyContent:"center"}}>
              <ReactPhoneInput defaultCountry={'in'} value={this.state.phone} onChange={this.handleOnChange}/>
               <TextField 
                id="standard-Phone-input"
                label="Mobile Number"
                type="number"
                name="Phone"
                value={this.state.fields["Phone"]}
                autoComplete="current-Phone"
                margin="normal"
                onChange={this.handleChangeAll.bind(this,"Phone")}
              />
              </div>
             </div>
             <div class="col-md-6">
              <span style={{color: "red"}}>{this.state.errors["CompanyName"]}</span>
              <TextField
                id="standard-CompanyName-input"
                label="Company Name"
                type="text"
                name="CompanyName"
                value={this.state.fields["CompanyName"]}
                autoComplete="current-CompanyName"
                margin="normal"
                onChange={this.handleChangeAll.bind(this,"CompanyName")}
              />
            </div>
            </div>
            <div class="row">
              <div class="col-md-6 ">
              <span style={{color: "red"}}>{this.state.errors["Designation"]}</span>
              <TextField
                id="standard-Designation-input"
                label="Designation"
                type="text"
                name="Designation"
                value={this.state.fields["Designation"]}
                autoComplete="current-Designation"
                margin="normal"
                onChange={this.handleChangeAll.bind(this,"Designation")}
              />
              </div>
              <div class="col-md-6 ml-auto">
              <span style={{color: "red"}}>{this.state.errors["Password"]}</span>
              <TextField
                id="standard-Password-input" 
                label="Password"
                type="password"
                name="password"
                
                value={this.state.fields["Password"]}
                autoComplete="current-password"
                margin="normal"
                onChange={e => this.setState({ password: e.target.value })}
                />
                <PasswordStrengthMeter password={password} />
              </div>
              </div>
                    
            <div class="row">
            <div class="col-3 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
            <ButtonToolbar id="btn_submit">
            <Button variant="primary" type="submit" className="_centered" size="lg">
              SUBMIT
            </Button>
            </ButtonToolbar>
           
            </div>
                </div>
             </div>
             </form>
        </div>
        </Modal.Body>
       
      </Modal>
    </>
  );
}
    
}

export default Signup;