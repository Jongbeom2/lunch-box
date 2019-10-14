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
        paddingLeft: '1rem',
        paddingRight: '1rem',
        boxSizing: 'border-box',
        overflow: 'auto'
    },
    img: {
        height: 'auto',
        width: '25%',
        boxSizing: 'border-box',
        marginTop: '0.3rem',
        borderRadius: '0.1rem',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)'
    },
    content: {
        paddingLeft: "1rem",
        boxSizing: 'border-box',
        float: "right",
        height: 'auto',
        width: '75%',
    },
    contentTop: {
        height: '2rem',
        lineHeight: '2rem',
        width: '100%',
        boxSizing: 'border-box',
        borderBottom: '0.1rem dotted #cccccc',
    },
    contentTopLeft: {
        float: 'left'
    },
    contentTopRight: {
        float: 'right',
        display: 'inline-flex'
    },
    contentBottom: {
        paddingTop: '0.5rem',
        height: 'auto',
        boxSizing: 'border-box',
        width: '100%',
    },
    name: {
        fontSize: '1.2rem',
        height: '2rem',
        lineHeight: '2rem',
        float: 'left'
    },
    price: {
        fontSize: "1rem",
        float: 'right',
        height: '2rem',
        lineHeight: '2rem',
    },
    description: {
        fontSize: "1rem",
        width: '100%'
    }
})
class MenuContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgSrcMenu: ''
        }
    }
    componentDidMount() {
        this.getImage();
    }
    getImage() {
        storageRef.child(this.props.img + '.jpg').getDownloadURL().then((url) => {
            this.setState({ imgSrcMenu: url });
        });
    }
    render() {
        // Set classes
        const { classes } = this.props;
        // Return
        return (
            <div className={classes.root}>
                <img className={classes.img} alt="menu" src={this.state.imgSrcMenu} />
                <div className={classes.content}>
                    <div className={classes.contentTop}>
                        <div className={classes.contentTopLeft}>
                            <div className={classes.name}>{this.props.name}</div>
                        </div>
                        <div className={classes.contentTopRight}>
                            <div className={classes.price}>{this.props.price}</div>
                            <button className="lunchBox-btn-rec-line" style={{ "width": "3rem", "padding": "0", "float": "right", "marginTop": "0.25rem", "marginLeft": "1rem", "height": "1.5rem", "font-size": "0.8rem" }}>Order</button>
                        </div>
                    </div>
                    <div className={classes.contentBottom}>
                        <div className={classes.description}>{this.props.description}</div>
                    </div>
                </div>

            </div>
        );
    };
}
export default withStyles(styles)(MenuContent);
