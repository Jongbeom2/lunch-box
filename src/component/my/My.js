import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Order from './Order';
import myFireBase from '../../config/MyFireBase'
// Storage and Database from firebase
const storageRef = (new myFireBase).storageRef;
const databaseRef = (new myFireBase).databaseRef;
const styles = () => ({
  myTopBackground: {
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '12rem',
    position: 'absolute'
  },
  myTop: {
    height: '12em',
    width: '100%',
    position: 'relative',
  },
  myTopText: {
    zIndex: 2,
    position: 'absolute',
    bottom: '3rem',
    left: '3rem',
    fontSize: "2rem",
    fontWeight: 'bold',
    color: 'white',
  },
  myTopImg: {
    height: '12em',
    width: '100%',
    objectFit: 'cover',
    position: 'relative'
  },
  myOrder:{
    marginLeft: '20%',
    marginRight: '20%',
    '@media (max-width:960px)': {
      marginLeft: '5%',
      marginRight: '5%',
      width: '90%',
    }
  }
})
class My extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      imgSrcMyTop:'',
      orderData: {}
    }
  }
  componentDidMount() {
    this.getImage();
    this.getOrderData();
  }
  getImage () {
    storageRef.child('mytop.jpg').getDownloadURL().then((url) => {
      this.setState({imgSrcMyTop:url});
    });
  }
  // Get Data
  getOrderData() {
    databaseRef.child('order/').once('value').then(data=>{
      this.setState({ orderData: data.val()})
    })
  }
  render() {
    // Set classes
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.myTop}>
            <div className={classes.myTopBackground}></div>
            <img className={classes.myTopImg} src={this.state.imgSrcMyTop} alt="mytop"  />
            <div className={classes.myTopText}>
              My Order
            </div>
        </div>
        <div className={classes.myOrder}>
        {Object.keys((this.state.orderData)).map(idx => {
          const o = this.state.orderData[idx];
              return (
                <div className={classes.menuContent}>
                  <Order name={o.name} price={o.price} img={o.image} datePurchased={o.datePurchased} status={o.status} dateDelivery={o.dateDelivery}/>
                </div>
              )
            })}
          </div>
          <br />
      </div>
    )


  };
}

export default withStyles(styles)(My);
