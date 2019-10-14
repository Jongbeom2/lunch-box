import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import myFireBase from '../../config/MyFireBase'
// Storage from firebase
const storageRef = (new myFireBase).storageRef;
const styles = () => ({
    root: {
      backgroundColor: 'white',
      height: 'auto',
      width: '100%',
      color: '#494949',
      marginTop: '1rem',
      boxSizing: 'border-box',
      overflow: 'auto',
    },
    img : {
      height: 'auto',
      width: '15%', 
      boxSizing: 'border-box',
      marginTop : '0.8rem',
      borderRadius: '0.1rem',
      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
      float:'left',
      '@media (max-width:960px)': {
        width: '30%',
      }
    },
    content: {
      height: 'auto',
      width: '85%', 
      paddingLeft: '1rem',
      boxSizing: 'border-box',
      float:'right',
      '@media (max-width:960px)': {
        width: '70%',
      }
    },
    contentTop:{
      height: '2.5rem',
      lineHeight: '2.5rem',
      width: '100%',
      boxSizing: 'border-box',
      display: 'inline-flex',
      borderBottom: '0.1rem dotted #cccccc',
    },
    contentMiddle:{
      height: '2rem',
      lineHeight: '2rem',
      width: '100%',
      boxSizing: 'border-box',
      display: 'inline-flex',
      '@media (max-width:960px)': {
        display: 'contents',
      }
    },
    contentBottom:{
      height: '2rem',
      lineHeight: '2rem',
      width: '100%',
      boxSizing: 'border-box',
    },
    name : {
      fontSize: '1.2rem',
    },
    datePurchased: {
      fontSize: "1rem",
      paddingRight: '1rem',
    },
    dateDelivery: {
      fontSize: "1rem",
      paddingRight: '1rem',
    },
    price: {
      fontSize: "1rem",
      paddingRight: '1rem',
    },
    status: {
      fontSize: "1rem",
    },
})
class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
        imgSrcOrder: '',
        imgName: ''
    }
}
componentDidMount() {
    this.getImage();
}
getImage() {
  storageRef.child(this.props.img + '.jpg').getDownloadURL().then((url) => {
        this.setState({ imgSrcOrder: url });
    });
}
    render() {
        // Set classes
        const { classes } = this.props;
        // Return
        return (
            <div className={classes.root}>
              <img className={classes.img} alt="menu" src={this.state.imgSrcOrder}/>
              <div className={classes.content}>
                <div className={classes.contentTop}>
                  <div className={classes.name}>{this.props.name}</div>
                </div>
                <div className={classes.contentMiddle}>
                  <div className={classes.price}>Price : {this.props.price}</div>
                  <div className={classes.datePurchased}>Date Purchased : {this.props.datePurchased}</div>
                  <div className={classes.dateDelivery}>Date Delivery : {this.props.dateDelivery}</div>
                </div>
                <div className={classes.contentBottom}>
                  <div className={classes.status}>{this.props.status}</div>
                </div>
              </div>
            </div>
        );
    };
}
export default withStyles(styles)(Order);
