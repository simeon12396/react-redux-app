import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MailIcon from '@material-ui/icons/Mail';
import InputIcon from '@material-ui/icons/Input';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './Drawer.scss';
import { NavLink } from 'react-router-dom';
import { 
    Drawer as DrawerM, 
    AppBar, 
    Toolbar, 
    List, 
    Typography, 
    Divider, 
    IconButton, 
    ListItem, 
    ListItemIcon, 
    ListItemText,
} from '@material-ui/core/';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../../store/actions/loginActions';

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const Drawer = ({children}) => {
    useEffect(() => {
    window.addEventListener('click', hideDrawer);

    return () => {
      window.removeEventListener('click', hideDrawer);
    };
  }, []);

  const hideDrawer = e => {
    if (e.clientX > 180) {
      setOpen(false);
    };
  };

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const isLogged = useSelector(state => state.login.isLogged);
  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
      setOpen(true);
  };

  const handleDrawerClose = () => {
      setOpen(false);
  };

  const userLogOut = () => {
    handleDrawerClose();
    dispatch(logOut());
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h4" noWrap>
            SVI Employee Manager
          </Typography>
        </Toolbar>
      </AppBar>

      <DrawerM
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>

        <Divider />

        {
          isLogged ? (
            <List>
              <NavLink exact to="/" className="Drawer__link" onClick={handleDrawerClose} activeClassName="Drawer__link--active">
                <ListItem button>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  
                  <ListItemText primary="Homepage" />
                </ListItem>
              </NavLink>

              <NavLink exact to="/dashboard" className="Drawer__link" onClick={handleDrawerClose} activeClassName="Drawer__link--active">
                <ListItem button>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  
                  <ListItemText primary="Dashboard" />
                </ListItem>
              </NavLink>

              <NavLink exact to="/sign-up" className="Drawer__link" onClick={userLogOut} activeClassName="Drawer__link--active">
                <ListItem button>
                  <ListItemIcon>
                    <ExitToAppIcon />
                  </ListItemIcon>
                  
                  <ListItemText primary="Logout" />
                </ListItem>
              </NavLink>
            </List>
          ) :
          <List>
              <NavLink exact to="/" className="Drawer__link" onClick={handleDrawerClose} activeClassName="Drawer__link--active">
                <ListItem button>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  
                  <ListItemText primary="Homepage" />
                </ListItem>
              </NavLink>

              <NavLink exact to="/sign-up" className="Drawer__link" onClick={handleDrawerClose} activeClassName="Drawer__link--active">
                <ListItem button>
                  <ListItemIcon>
                    <PersonAddIcon />
                  </ListItemIcon>
                  
                  <ListItemText primary="Sign Up" />
                </ListItem>
              </NavLink>

              <NavLink exact to="/login" className="Drawer__link" onClick={handleDrawerClose} activeClassName="Drawer__link--active">
                <ListItem button>
                  <ListItemIcon>
                    <InputIcon />
                  </ListItemIcon>
                  
                  <ListItemText primary="Login" />
                </ListItem>
              </NavLink>
            </List>
        }
      </DrawerM>

      <section
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
      {children}
      </section>
    </div>
  );
};

export default Drawer;