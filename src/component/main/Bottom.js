import React from 'react';
import { withStyles } from '@material-ui/core/styles';
const styles = () => ({
  mainBottom: {
    height: '400px',
    background: '#181a1e',
    paddingTop: '2.5rem',
    paddingRight: '11%',
    paddingLeft: '11%',
    '@media (max-width:960px)': {
      height: '550px'
    }
  },
  mainBottomTab: {
    height: '100%',
    width: '33%',
    float: 'left',
    '@media (max-width:960px)': {
      clear: "both",
      height: 'auto',
      width: '100%',
      marginBottom: '20px'
    }
  }
})
class Bottom extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.mainBottom}>
        <div>
          <div className={classes.mainBottomTab}>
            <p className="lunchBox-textField-white-content">ABOUT SELLAB</p>
            <p className="lunchBox-textField-darWhtie-content" style={{ "padding": "1rem" }}>This is about Sellab. This is about Sellab. This is about Sellab. This is about Sellab. This is about Sellab. This is about Sellab. This is about Sellab. This is about Sellab. </p>
          </div>
          <div className={classes.mainBottomTab}>
            <p className="lunchBox-textField-white-content">OPENING HOURS</p>
            <div className="lunchBox-textField-darWhtie-content" style={{ "padding": "1rem" }}>
              <p style={{ float: "left" }}>Monday</p><p style={{ float: "right" }}>9:00 AM - 6:00 PM</p>
              <p style={{ clear: "both", float: "left", marginTop: "0.3rem" }}>Tuesday</p><p style={{ float: "right", marginTop: "0.3rem" }}>9:00 AM - 6:00 PM</p>
              <p style={{ clear: "both", float: "left", marginTop: "0.3rem" }}>Wednesday</p><p style={{ float: "right", marginTop: "0.3rem" }}>9:00 AM - 6:00 PM</p>
              <p style={{ clear: "both", float: "left", marginTop: "0.3rem" }}>Thursday</p><p style={{ float: "right", marginTop: "0.3rem" }}>9:00 AM - 6:00 PM</p>
              <p style={{ clear: "both", float: "left", marginTop: "0.3rem" }}>Friday</p><p style={{ float: "right", marginTop: "0.3rem" }}>9:00 AM - 6:00 PM</p>
              <p style={{ clear: "both", float: "left", marginTop: "0.3rem" }}>Saturday</p><p style={{ float: "right", marginTop: "0.3rem" }}>Closed</p>
              <p style={{ clear: "both", float: "left", marginTop: "0.3rem" }}>Sunday</p><p style={{ float: "right", marginTop: "0.3rem" }}>Closed</p>
            </div>
          </div>
          <div className={classes.mainBottomTab}>
            <p className="lunchBox-textField-white-content">CONNECT WITH US</p>
            <div className="lunchBox-textField-darWhtie-content" style={{ "padding": "1rem" }}>
              <div>Phone<br />010-1111-2222</div><br />
              <div>Naver Cafe<br />https://cafe.naver.com/sallab/</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Bottom);
