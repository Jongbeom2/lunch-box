import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
const styles = () => ({
    root: {
        backgroundColor: '#98d865',
        height: '6em',
        width: '100%',
        paddingTop: '2rem'
    },
    text: {
        height: '4rem',
        width: '15rem',
        lineHeight: '4rem',
        textAlign: 'center',
        margin:'auto',
        color: 'white',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        borderTop: '0.1rem solid white',
        borderBottom: '0.1rem solid white'
    }
})
class MenuCategory extends Component {
    render() {
        // Set classes
        const { classes } = this.props;
        // Return
        return (
            <div className={classes.root}>
                <div className={classes.text}>{this.props.text}</div>
            </div>
        );
    };
}
export default withStyles(styles)(MenuCategory);
