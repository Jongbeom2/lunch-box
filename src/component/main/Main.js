import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import Home from '../home/Home';
import Menu from '../menu/Menu';
import Board from '../board/Board';
import My from '../my/My';
import Login from '../login/Login';
import BoardDetail from '../board/BoardDetail';
import Bottom from './Bottom';
const styles = () => ({
  mainTabs: {
    background: '#181a1e',
    float: 'left'
  },
  mainTab: {
    fontFamily: 'Noto Sans KR',
    color: 'white',
    height: '4rem',
    fontWeight: 'normal',
    background: '#181a1e'
  }
});

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* Top menu */}
        <div style={{"overflow":"auto"}}>
          <Tabs
            className={classes.mainTabs} value={this.state.value} onChange={this.handleChange}
            variant='standard' indicatorColor='' centered style={{ width: "100%" }}>
            <Tab className={classes.mainTab} label="We are Sallab" component={Link} to="/main/home" />
            <Tab className={classes.mainTab} label="Menu" component={Link} to="/main/menu" />
            <Tab className={classes.mainTab} label="Sallabers" component={Link} to="/main/board" />
            <Tab className={classes.mainTab} label="My Sallab" component={Link} to="/main/my" />
            <Tab className={classes.mainTab} label="Login" component={Link} to="/main/login" />
            
          </Tabs>
        </div>
        {/* Main content using routing */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/main" component={Home} />
          <Route exact path="/main/home" component={Home} />
          <Route exact path="/main/menu" component={Menu} />
          <Route exact path="/main/board" component={Board} />
          <Route exact path="/main/board/detail" component={BoardDetail} />
          <Route exact path="/main/my" component={My} />
          <Route exact path="/main/login" component={Login} />
        </Switch>
        {/* Bottom */}
        <Bottom/>
      </div>
    )
  }
}

export default withStyles(styles)(Main);