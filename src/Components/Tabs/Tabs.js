import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { MDBIcon, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import {firebaseApp} from '../../Config/Firebase/firebase'
import Modal from '../Modal/Modal'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 3,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));




class ShowTable extends React.Component {
  constructor() {
    super()
    this.state = {
      all: []
    }
  }
  componentDidMount() {
    this.setState(
      {
        all: this.props.data,
        check:this.props.check
      }
    )

  }


  editProduct = (val) => {
    this.props.path2.history.push('/edit-product', { data: val })
  }


  DeleteProduct = (val,i,collec) => {
    console.log(val)
    let {all}  = this.state
    firebaseApp.firestore().collection(collec).doc(val.uid).delete().then(
      all.splice(i,1)
    )
    this.setState({
      all,
    })
  }




  render() {
    return (
      <div>

        <Grid container justify='left' spacing={3}>
          <Grid item xs={12} md={12} sm={11} lg={12} >
            <MDBTable scrollY maxHeight="700px" >
              <MDBTableHead color="black" textWhite>
                <tr>
                  <th scope="col" style={{ fontWeight: 'bolder' }}>{this.props.head1}</th>
                  <th scope="col" style={{ fontWeight: 'bolder' }}>{this.props.head2}</th>
                  <th scope="col" style={{ fontWeight: 'bolder' }}>{this.props.head3}</th>
                  <th scope="col" style={{ fontWeight: 'bolder' }}>{this.props.head4}</th>
                  <th scope="col" style={{ fontWeight: 'bolder' }}>{this.props.head5}</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                
                {
                  this.state.order ? 
                  this.state.all.map((val,ind)=>{
                    return <tr key={ind}>
                    <td><img src={val.img} alt='product' style={{ verticalAlign: 'text-center', borderRadius: '100%', border: '1px dashed black' }} width="40px" /></td>
                    <td style={{ fontWeight: 'bolder' }}>{val.fname}</td>
                    <td style={{ fontWeight: 'bolder' }}>{val.lname}</td>
                    <td><MDBIcon onClick={() => this.editProduct(val, ind)} icon="edit" /></td>
                    <td><Modal onclick={this.DeleteProduct} data={val} ind={ind} collec='users' /></td>
                  </tr>
                  
                  })

                  :
                  this.state.check ?
                  this.state.all.map((val,ind)=>{
                    return <tr key={ind}>
                    <td><img src={val.img} alt='product' style={{ verticalAlign: 'text-center', borderRadius: '100%', border: '1px dashed black' }} width="40px" /></td>
                    <td style={{ fontWeight: 'bolder' }}>{val.fname}</td>
                    <td style={{ fontWeight: 'bolder' }}>{val.lname}</td>
                    <td><MDBIcon onClick={() => this.editProduct(val, ind)} icon="edit" /></td>
                    <td><Modal onclick={this.DeleteProduct} data={val} ind={ind} collec='users' /></td>
                  </tr>
                  })
                  :
                  this.state.all.map((val, ind) => {
                    return <tr key={ind}>
                      <td><img src={val.ProductImage} alt='product' style={{ verticalAlign: 'text-center', borderRadius: '100%', border: '1px dashed black' }} width="40px" /></td>
                      <td style={{ fontWeight: 'bolder' }}>{val.ProductName}</td>
                      <td style={{ fontWeight: 'bolder' }}>{val.ProductPrice}</td>
                      <td><MDBIcon onClick={() => this.editProduct(val, ind)} icon="edit" /></td>
                      <td><Modal onclick={this.DeleteProduct} data={val} ind={ind} collec='products' /></td>
                    </tr>

                  })
                }
              </MDBTableBody>
            </MDBTable>



          </Grid>
        </Grid>




      </div>

    )
  }
}


export default function ScrollableTabsButtonForce(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="secondary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Products List" icon={<MDBIcon icon="shopping-bag" />} {...a11yProps(0)} />
          <Tab label="Users List" icon={<MDBIcon icon="users" />} {...a11yProps(1)} />
       
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ShowTable check={false} data={props.data} path2={props.path1} head1='Product Image' head2='Product Name' head3='Product Price' head4='Edit' head5='Delete' />
      </TabPanel>
     
      <TabPanel value={value} index={1}>
        <ShowTable data={props.users} check={true}  head1='User Image' head2='User FName' head3='User LName' head4='edit' head5='Delete'  />
      </TabPanel>
        
    </div>
  );
}
