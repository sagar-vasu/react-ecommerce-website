import React from 'react';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { ToolTipPositions, ToolTipPositions1 } from '../Tooltip/Tooltip'
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes, { func } from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ClassIcon from '@material-ui/icons/Class';
import DeleteIcon from '@material-ui/icons/Delete';
import { MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownItem, MDBDropdownMenu } from 'mdbreact';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { logoutUser } from '../../Config/Functions/functions'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.25),
      color: 'white'
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },

  },

  // Dense App Bar
  root1: {
    flexGrow: 1,
  },
  menuButton1: {
    marginRight: theme.spacing(2),
  },

  // Drawer Bar


  root2: {
    display: 'flex',
  },
  drawer2: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar2: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton2: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar2: theme.mixins.toolbar,
  drawerPaper2: {
    width: drawerWidth,
  },
  content2: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function NavBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }
  async function userlogout() {
    try {
    //  let user =  await logoutUser()   
      localStorage.removeItem('uid')
      props.path.history.push('/login')
      
    }
    catch (err) {
      console.log(err)
    }
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MDBIcon icon="home" size='lg' />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <MDBIcon icon="home" size='lg' />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow} >
      <AppBar position="static" color='default'>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <img src="http://preview.hasthemes.com/bege-v4/p2/img/bege/logo.png" width='140px' alt='Shop Logo' />
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Link to='/'>
            <Button color='secondary' variant='outlined' >
              <MDBIcon icon="home" size='lg' />
              &nbsp;Home
            </Button>
          </Link>
          <Link to='/shop'>
            <Button style={{ marginLeft: '15px' }} color='secondary' variant='outlined' >
              <MDBIcon icon="shopping-bag" size='lg' />
              &nbsp;Shop
            </Button>
          </Link>
          {
            props.user ? console.log('') :
            <div>
              <Link to='/signup'>
              <Button style={{ marginLeft: '15px' }} color='secondary' variant='outlined' >
                <MDBIcon icon='user-plus' size='lg' />
                &nbsp;Signup
           </Button>
            </Link>
            <Link to='/login'>
              <Button style={{ marginLeft: '15px' }} color='secondary' variant='outlined' >
                <MDBIcon icon='user-plus' size='lg' />
                &nbsp;Login
           </Button>
            </Link>

            </div>
            


          }



          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={props.myCart.length} color="secondary">
                <ToolTipPositions data={props.myCart} path={props.path} name={<ShoppingCartIcon />} />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications">
              <Badge badgeContent={0} color="secondary">
                <ToolTipPositions1 path={props.path} name={<FavoriteIcon />} />
              </Badge>
            </IconButton>

            {/* <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>     */}
            {
              props.user ?
                <MDBDropdown>
                  <MDBDropdownToggle className="dopdown-toggle" nav>
                    <img src={props.user.img} className="rounded-circle z-depth-0"
                      style={{ height: "35px", padding: 0 }} alt="" />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default" right>
                    <MDBDropdownItem>My account</MDBDropdownItem>
                    <MDBDropdownItem onClick={() => userlogout()} >Log out</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
                :
                console.log('sorry')


            }



          </div>

          <div className={classes.sectionMobile}>


            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}



// Dense App Bar 
function DenseAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root1}>
      <AppBar position="static" style={{ backgroundColor: '#3C3C3C' }}>
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton1} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            {props.name}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}


// Drawer App Bar


const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }



  const drawer = (
    <div>
      <div className={classes.toolbar2} />
      <Divider />
      <List>
        <Link to='/dashboard'>
          <ListItem button>
            <ListItemIcon><DashboardIcon /> </ListItemIcon>
            <ListItemText primary='Dashboard' />
          </ListItem>
        </Link>

        <Link to='/add-product'>
          <ListItem button >
            <ListItemIcon> <ClassIcon /> </ListItemIcon>
            <ListItemText primary='Add Product' />
          </ListItem>
        </Link>
        <Link to='/delete-product'>

          <ListItem button >
            <ListItemIcon><DeleteIcon /> </ListItemIcon>
            <ListItemText primary='Delete Product' />
          </ListItem>
        </Link>
        {/*         
        {['Dashboard', 'Attendance', 'Create Class', 'Delete Class'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root2}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar2} style={{ backgroundColor: '#3C3C3C' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton2}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Admin Store
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer2} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper2,
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
              paper: classes.drawerPaper2,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content2}>
        <div className={classes.toolbar2} />

        {props.component}

      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};




export {
  DenseAppBar,
  NavBar,
  ResponsiveDrawer

}