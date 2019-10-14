import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  loginTotal: {
    marginLeft:"30%",
    marginRight:"30%",
    width:"40%",
    paddingTop: "9rem",
    fontFamily: 'Noto Sans KR',
    fontSize: "1rem",
    '@media (max-width:960px)': {
      marginLeft:"10%",
      marginRight:"10%",
      width:"80%",
    }
  },
  join: {
    marginTop: "1.8rem",
    marginBottom: "9rem",
    height: "2.5rem",
    lineHeight: '2.5rem',
    paddingLeft: "1.25rem",
    backgroundColor: "#eeeeee"
  }
});

class Login extends Component {
  handleLogin = (e) => {
    e.preventDefault();
    alert('login');
  }

  render() {
    const { classes } = this.props
    return (
      <div className="root">
        <form noValidate autoComplete="off" className ={classes.loginTotal}>
          <TextField label="Email" margin="normal" fullWidth/>
          <TextField label="Password" type="password" margin="normal" fullWidth/>
          <FormControlLabel style={{marginTop:"1.25rem"}} control={<Checkbox value="checkedG" color="default"/>} label="Remember" />
          <div style={{marginTop:"1.25rem"}}>
            <Button style={{"width":"49%","font-size":"1rem", "text-transform":"none"}} variant="outlined" color="inherit" onClick={this.handleLogin}>Login</Button>
            <Button style={{"width":"49%", "margin-left":"2%", "font-size":"1rem", "text-transform":"none"}} variant="outlined" color="inherit">Forgot Passwrod?</Button>
          </div>
          <div className={classes.join} >First time here? Create your account</div>
        </form>
        
      </div>
    )
  }
}

export default withStyles(styles) (Login);
