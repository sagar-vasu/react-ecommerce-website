import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import {firebaseApp} from '../../Config/Firebase/firebase'

class TablePage extends React.Component {

    constructor() {
        super()
        this.state = {
            name: ''

        }
    }


    componentDidMount() {
        let id = localStorage.getItem("uid")
        if (id) {
            firebaseApp.firestore().collection('users').doc(JSON.parse(id)).get().then(
                value => {
                    let user = value.data()
                    this.setState({
                        user
                    })
                }
            )

        }

    }

    check = () => {
        let { user } = this.state
        if (user) {
            // this.props.path.history.push('/checkout',{data: props.myCart})
            this.props.path.history.push('/checkout',{data: this.props.myCart})

        }
        else {
            alert('Please login')
            this.props.path.history.push('/login')
        }
    }

    render() {
        let totalPrice = 0;
        this.props.myCart.map(val => {
            return totalPrice += val.productPrice * val.productQuantity
        })
        return (

            <div>

                <Grid container justify='center' spacing={3}>
                    <Grid item xs={12} md={12} sm={11} lg={8} >
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Product Image</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Product Quantitiy</th>
                                    <th scope="col">Single Product Price</th>
                                    <th scope="col">Total Product Price</th>
                                </tr>
                            </thead>
                            <tbody>


                                {
                                    this.props.myCart.map((val, ind) => {
                                        return <tr key={ind}>
                                            <td><img src={val.productUrl} alt='product' style={{ verticalAlign: 'text-center' }} width="100px" /></td>
                                            <td>{val.productName}</td>
                                            <td>{val.productQuantity}</td>
                                            <td>{val.productPrice}</td>
                                            <td>{val.productPrice * val.productQuantity}</td>
                                        </tr>

                                    })
                                }


                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Total Price: {totalPrice}</td>
                                </tr>




                            </tbody>
                        </table>
                        <div style={{ marginTop: '30px', float: 'right' }} >
                            <Button onClick={this.check} size='large' variant='outlined' color='secondary'>
                                Proceed To Checkout
                        </Button>
                        </div>

                    </Grid>
                </Grid>




            </div>
        );
    }
};

export default TablePage