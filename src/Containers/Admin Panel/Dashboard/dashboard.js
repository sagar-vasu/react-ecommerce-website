import React from "react";
import Grid from "@material-ui/core/Grid";
import { Paper, ResponsiveDrawer, TabCard } from '../../../Components'
import Typography from '@material-ui/core/Typography';
import {firebaseApp} from '../../../Config/Firebase/firebase'




class DashboardUi extends React.Component {
    constructor() {
        super()
        this.state = {
            totalProducts: [],
            totalOrders: [],
            totalUsers: [],

        }
    }
    componentDidMount() {

        let { totalProducts,totalOrders,totalUsers } = this.state
        firebaseApp.firestore().collection('products').get().then(
            value => {
                value.forEach(doc => {
                    let products = doc.data()
                    products.uid=doc.id
                    totalProducts.push(products)
                    this.setState({
                        totalProducts
                    })
                })
            }
        )

        firebaseApp.firestore().collection('orders').get().then(
            value => {
                value.forEach(doc => {
                    let orders = doc.data()
                    orders.uid=doc.id
                    totalOrders.push(orders)
                    this.setState({
                        totalOrders
                    })
                })
            }
        )


        firebaseApp.firestore().collection('users').get().then(
            value => {
                value.forEach(doc => {
                    let users = doc.data()
                    users.uid=doc.id
                    totalUsers.push(users)
                    this.setState({
                        totalUsers
                    })
                })
            }
        )

    }

    render() {
        return (
            
            <div>

                <Grid container justify="center" spacing={2}>
                    <Grid item xs={11} md={8} lg={3}>
                        <Paper >
                            <div  onMouseOver={()=>this.setState({backColor:'#3C3C3C',color:'white'}) } style={{ padding: "23px" , backgroundColor:this.state.backColor, color:this.state.color}} onMouseOut={()=>this.setState({backColor:'white',color:'black'})}>
                                <Typography align='center' variant='h5'>
                                    Total Sales (PKR)
                                </Typography>
                                <br />
                                <Typography align='center' variant='body1'>
                                    01
                                </Typography>
                            </div>
                        </Paper>
                    </Grid>

                    <Grid item xs={11} md={8} lg={3}>
                        <Paper>
                            <div onMouseOver={()=>this.setState({backColor1:'#3C3C3C',color1:'white'}) } style={{ padding: "23px" , backgroundColor:this.state.backColor1, color:this.state.color1}} onMouseOut={()=>this.setState({backColor1:'white',color1:'black'})} >
                                <Typography align='center' variant='h5'>
                                    Total Orders
                                </Typography>
                                <br />
                                <Typography align='center' variant='body1'>
                                    {this.state.totalOrders.length}
                                </Typography>
                            </div>
                        </Paper>
                    </Grid>


                    <Grid item xs={11} md={8} lg={3}>
                        <Paper>
                            <div onMouseOver={()=>this.setState({backColor2:'#3C3C3C',color2:'white'}) } style={{ padding: "23px" , backgroundColor:this.state.backColor2, color:this.state.color2}} onMouseOut={()=>this.setState({backColor2:'white',color2:'black'})}>
                                <Typography align='center' variant='h5'>
                                    Total Users
                                </Typography>
                                <br />
                                <Typography align='center' variant='body1'>
                                    {this.state.totalUsers.length}
                                </Typography>
                            </div>
                        </Paper>
                    </Grid>

                    <Grid item xs={11} md={8} lg={3}>
                        <Paper>
                            <div onMouseOver={()=>this.setState({backColor3:'#3C3C3C',color3:'white'}) } style={{ padding: "23px" , backgroundColor:this.state.backColor3, color:this.state.color3}} onMouseOut={()=>this.setState({backColor3:'white',color3:'black'})}>
                                <Typography align='center' variant='h5'>
                                    Total Products
                                </Typography>
                                <br />
                                <Typography align='center' variant='body1'>
                                    {this.state.totalProducts.length}
                                </Typography>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>

                <div style={{ marginTop: '70px' }}>
                    <TabCard data={this.state.totalProducts}  users={this.state.totalUsers}  path1={this.props.path}/>
                </div>



            </div>
        );
    }
}









export default class Home extends React.Component {
    render() {
        return (
            <div>
                <ResponsiveDrawer  component={<DashboardUi path={this.props} />} />

            </div>
        )
    }
}


