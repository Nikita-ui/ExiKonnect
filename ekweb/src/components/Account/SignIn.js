import React,{Component} from 'react';
import './SignIn.css';
import {Link} from 'react-router-dom';
import {Modal,Button,ButtonToolbar} from 'react-bootstrap';
import {SocialIcon} from 'react-social-icons';
import TextField from '@material-ui/core/TextField';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Grid from '@material-ui/core/Grid';


class SignIn extends Component{
  
    state = {
        open:true
    }
      onOpenModal=()=>{
        this.setState({open:true});
      }
      onCloseModal=()=>{
        this.setState({open:false});
     }
     render(){
    
     const {open} = this.state;
     
    return(
     
      <>
       <Modal id="login_modal" class="_model_radius"  centered size="lg" show={open} onHide={this.onCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div id="login_frm" class="row">
        <form id="login_form">
          <div class="container input_field">
            <div class="row">
             <div class="col-md-12">
             <Grid item alignItems="center" xs={1}>
          <EmailOutlinedIcon fontSize="large" style={{color:"grey",opacity: "0.6"}}/>
          </Grid>
             <TextField
                id="standard-Email-input"
                label="Email/Mobile"
                type="Email"
                autoComplete="current-Email"
                margin="normal"
              />
              </div>
              </div>
              <div class="row">
              <div class="col-md-12">
              <Grid item alignItems="center" xs={1}>
              <LockOutlinedIcon fontSize="large" style={{color:"grey",opacity: "0.6"}}/>
              </Grid>
              <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="normal"
              />
             </div>
            </div>
           
            <div class="row" id="submit_btn">
            <div class="col-md-12">
            <ButtonToolbar>
            <Button variant="primary" type="submit" className="_centered" size="lg">
              SUBMIT
            </Button>
            </ButtonToolbar>
            </div>
            </div>
            
          
            <div class="row" id="or_btn"> <div class="col-md-12"><div className="OR">OR</div></div></div>
          <div class="row" id="socials_btn">
          <div class="col-md-12">
          <div className="social_btn">
          <SocialIcon network="google" />
          <SocialIcon network="twitter" />
          <SocialIcon network="facebook" />
          <SocialIcon network="linkedin" url="http://linkedin.com/in/jaketrent" />
          <SocialIcon network="wechat"/>
         </div>
         </div>
         </div>
           <div class="row" id="newuser">
            <div class="col-md-12 new_user">
              New User? <Link to="signup">Signup</Link>
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

export default SignIn;