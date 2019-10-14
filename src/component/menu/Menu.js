import React, { Component } from 'react';
import MenuCategory from './MenuCategory';
import MenuContent from './MenuContent';
import { withStyles } from '@material-ui/core/styles';
import myFireBase from '../../config/MyFireBase'
// Storage and database from firebase
const storageRef = (new myFireBase).storageRef;
const databaseRef = (new myFireBase).databaseRef;
const styles = () => ({
  menuTopBackground: {
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '12rem',
    position: 'absolute'
  },
  menuTop: {
    height: '12em',
    width: '100%',
    position: 'relative',
  },
  menuTopText: {
    zIndex: 2,
    position: 'absolute',
    bottom: '3rem',
    left: '3rem',
    fontSize: "2rem",
    fontWeight: 'bold',
    color: 'white',
  },
  menuTopImg: {
    height: '12em',
    width: '100%',
    objectFit: 'cover',
    position: 'relative'
  },
  menuContentTwo: {
    display: 'inline-flex',
    marginLeft: '10%',
    marginRight: '10%',
    width: '80%',
    '@media (max-width:960px)': {
      display: 'block',
      marginLeft: '5%',
      marginRight: '5%',
      width: '90%',
    }
  },
  menuContentOne: {
    display: 'inline-flex',
    marginLeft: '10%',
    marginRight: '10%',
    width: '40%',
    '@media (max-width:960px)': {
      display: 'block',
      marginLeft: '5%',
      marginRight: '5%',
      width: '90%',
    }
  },
})
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      imgSrcMenuTop: '',
      menuBaverageData: {},
      menuSaladData: {}
    }
  }
  componentDidMount() {
    this.getMenuBaverageData();
    this.getMenuSaladData();
    this.getImage();
  }
  getImage() {
    storageRef.child('menutop.jpg').getDownloadURL().then((url) => {
      this.setState({ imgSrcMenuTop: url });
    });
  }
  // Get Data
  getMenuBaverageData() {
    databaseRef.child('menuBaverage/').once('value').then(data => {
      this.setState({ menuBaverageData: data.val() })
    })
  }
  getMenuSaladData() {
    databaseRef.child('menuSalad/').once('value').then(data => {
      this.setState({ menuSaladData: data.val() })
    })
  }
  render() {
    // Set classes
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.menuTop}>
          <div className={classes.menuTopBackground}></div>
          <img alt="menuTop" className={classes.menuTopImg} src={this.state.imgSrcMenuTop} />
          <div className={classes.menuTopText}>
            Enjoy the Foods of Sallab!
          </div>
        </div>
        <MenuCategory text="SOUPS & SALADS" />
        {Object.keys((this.state.menuSaladData)).map(idx => {
          var index = parseInt(idx);
          if ((index + 1) % 2) {
            const c1 = this.state.menuSaladData[index];
            const c2 = this.state.menuSaladData[index + 1];
            if (c2 !== undefined) {
              return (
                <div className={classes.menuContentTwo}>
                  <MenuContent name={c1.name} price={c1.price} img={c1.image} description={c1.description} />
                  <MenuContent name={c2.name} price={c2.price} img={c2.image} description={c2.description} />
                </div>
              )
            } else {
              return (
                <div className={classes.menuContentOne}>
                  <MenuContent name={c1.name} price={c1.price} img={c1.image} description={c1.description} />
                </div>
              )
            }
          }
        })}
        <br></br><br />
        <MenuCategory text="BEVERAGES" />
        <div>
          {Object.keys((this.state.menuBaverageData)).map(idx => {
            var index = parseInt(idx);
            if ((index + 1) % 2) {
              const c1 = this.state.menuBaverageData[index];
              const c2 = this.state.menuBaverageData[index + 1];
              if (c2 !== undefined) {
                return (
                  <div className={classes.menuContentTwo}>
                    <MenuContent name={c1.name} price={c1.price} img={c1.image} description={c1.description} />
                    <MenuContent name={c2.name} price={c2.price} img={c2.image} description={c2.description} />
                  </div>
                )
              } else {
                return (
                  <div className={classes.menuContentOne}>
                    <MenuContent name={c1.name} price={c1.price} img={c1.image} description={c1.description} />
                  </div>
                )
              }
            }
          })}
        </div>
        <br />
      </div>
    );
  }
}

export default withStyles(styles)(Menu);

