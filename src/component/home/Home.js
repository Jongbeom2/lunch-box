import React,{Component} from 'react';
import myFireBase from '../../config/MyFireBase'
import { withStyles } from '@material-ui/core/styles';
const styles = () => ({
  homeTopLayout: {
    height: '45rem',
    textAlign: 'center',
    color: 'white',
    backgroundSize: 'cover'
  },
  homeTopLayoutImage: {
    width: '350px',
    '@media (max-width:960px)': {
      width: '200px',
    }
  }
});

// Storage from firebase
const storageRef = (new myFireBase).storageRef;
class Home extends Component {
   // Init
   constructor(props) {
    super(props);
    this.state = {
      imgSrcHomeSlide1: '',
      imgSrcHomeLogo:'',
      imgSrcHomeEvent1:'',
      imgSrcHomeEvent2:'',
      imgSrcHomeEvent3:'',
      imgSrcHomeEvent4:'',
    }
  }
  componentDidMount() {
    this.getImage();
  }
  // Get Image
  getImage () {
    storageRef.child('homeslide1.jpg').getDownloadURL().then((url) => {
      this.setState({imgSrcHomeSlide1:url});
    });
    storageRef.child('homelogo.png').getDownloadURL().then((url) => {
      this.setState({imgSrcHomeLogo:url});
    });
    storageRef.child('homeevent1.jpg').getDownloadURL().then((url) => {
      this.setState({imgSrcHomeEvent1:url});
    });
    storageRef.child('homeevent2.jpg').getDownloadURL().then((url) => {
      this.setState({imgSrcHomeEvent2:url});
    });
    storageRef.child('homeevent3.jpg').getDownloadURL().then((url) => {
      this.setState({imgSrcHomeEvent3:url});
    });
    storageRef.child('homeevent4.jpg').getDownloadURL().then((url) => {
      this.setState({imgSrcHomeEvent4:url});
    });
  }
  render(){ 
    const { classes } = this.props;
    return (
      <div className="root">
        <div className={classes.homeTopLayout} style={{"background-image":'url('+ this.state.imgSrcHomeSlide1 + ')'}}>
          <img src={this.state.imgSrcHomeLogo} alt="homeLogo" className={classes.homeTopLayoutImage} style={{"margin-top":"2rem"}}/>
          <p className="lunchBox-textField-white-large" style={{"margin-top":"2rem","text-align":"center"}}>FRESH, FAST & DELICIOUS!</p>
          <p className="lunchBox-textField-white-title" style={{"margin-top":"1rem","text-align":"center"}}>Order and Delivery 010-1111-2222 / https://cafe.naver.com/sallab/</p>
          <button className="lunchBox-btn-round" style={{"margin-top":"2rem"}} >VIEW MENU</button>
        </div>
        <div style={{"height":"18rem", "text-align":"center","padding-top":"2rem","box-sizing":"border-box"}}>
          <p className="lunchBox-textField-black-title" >We are open from AM 9:00 to PM 6:00 on weekdays</p>
          <p className="lunchBox-textField-black-content" style={{"margin-top":"1rem"}}>Since 2011.1.1</p>
          <button className="lunchBox-btn-rec-solid" style={{"height":"3rem","width":"12rem", "margin-top":"2rem"}}>Follow @SELLAB</button>
        </div>
        <div style={{"height":"18rem", "text-align":"center", "background-color":"#EEEEEE", "padding-top":"2rem","box-sizing":"border-box"}}>
          <p className="lunchBox-textField-black-title" style={{"margin-top":"1rem"}}>We offer discounts on some menus We offer discounts on some menus </p>
          <p className="lunchBox-textField-black-content" style={{"margin-top":"1rem"}}>Menu 1, Menu 2, Menu 3, Menu 4</p>
         <button className="lunchBox-btn-round" style={{"margin-top":"2rem"}}>Order Menu</button>
        </div>
        <div>
          <img src={this.state.imgSrcHomeEvent1} alt="homeLogo" width="25%"/>
          <img src={this.state.imgSrcHomeEvent2} alt="homeLogo" width="25%" />
          <img src={this.state.imgSrcHomeEvent3} alt="homeLogo" width="25%" />
          <img src={this.state.imgSrcHomeEvent4} alt="homeLogo" width="25%"/>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
