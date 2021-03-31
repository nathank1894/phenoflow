/** @format */

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FeedbackIcon from "@material-ui/icons/Feedback";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import {
  Home,
  AddCircle,Edit
} from "@material-ui/icons";


const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  typography: {
    flex: 1,
    // backgroundColor:
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor:"rgb(0,114,104)",
    // dis
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:'#50A3B9'    
  },
  contentArea: {
    flexGrow: 1,
    paddingTop: theme.spacing(2),
  },
});

const itemList1 = [
  {
    id: 1,
    text: "Browse",
    icon: <Home />,
    url: "/all",
  },
  {
    id: 2,
    text: "Define",
    icon: <AddCircle />,
    url: "/login",
  },
  {
    id: 3,
    text: "Edit",
    icon: <Edit />,
    url: "/login",
  },


];



class SideNavbar extends Component {
  state = {
    mobileOpen: false,
    anchorEl: null,
  };

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
    //setAnchorEl(event.currentTarget);
  };

  handleLogout = () => {
    this.setState({ anchorEl: null });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
    //setAnchorEl(null);
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  render() {
    const { children, classes } = this.props;
    const { mobileOpen } = this.state;
    const drawer = (
      <div style={{marginTop:'0%',paddingTop:'0%',textAlign:'center',color:'white'}}>
        
        <Link to="/" style={{color:'white'}}><h4 style={{marginTop:'3%',fontWeight:'bolder'}}>Phenoflow</h4></Link>

        <List >

          {itemList1.map((item) => {
            const { text, url, icon, id } = item;
            return (

              <ListItem button component={Link} to={url} key={id}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText style={{color:'white',fontWeight:'bolder',fontSize:'xx-large'}} >{text}</ListItemText>
              </ListItem>
            );
          })}
        </List>

      </div>
    );

    return (
      <React.Fragment>
        <div className={classes.root}>
          <CssBaseline />

          <nav className={classes.drawer} aria-label="mailbox folders" >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">

              <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
             
              >

                {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                {drawer}

              </Drawer>

            </Hidden>
          </nav>
          <main className={classes.contentArea}>

            <Toolbar />
            {children}
          </main>
        </div>
      </React.Fragment>
    );
  }
}



export default compose(
  withStyles(styles)
)(SideNavbar);

//export default withStyles(styles)(SideNavbar);
