import React from 'react';
import { NavBar,FooterPagePro } from "../../Components";
import './ProductDetail.css'
import { Paper } from '../../Components'
import Grid from '@material-ui/core/Grid';
import { MDBBtn, MDBIcon } from 'mdbreact'
import {firebaseApp} from '../../Config/Firebase/firebase'


class PanelPage extends React.Component {

    constructor() {
        super()
        this.state = {
            plus: 0,
            myCart: []
        }
    }

    addToCart(data) {
        let { myCart } = this.state

        let product = {
            productName: data.title,
            productUrl: data.url,
            productPrice: data.price,
            productQuantity: this.state.plus
        }
        //    console.log(product)
        let checkProduct = this.state.myCart
        var flag = true
        if (checkProduct) {
            for (var key in checkProduct) {
                if (checkProduct[key].productUrl === data.url) {
                    checkProduct[key].productQuantity = this.state.plus + checkProduct[key].productQuantity
                    localStorage.setItem('products', JSON.stringify(checkProduct))
                    flag = false
                    this.setState({
                        myCart
                    })

                }

            }


        }

        if (flag === true) {
            myCart.push(product)
            this.setState({
                myCart
            })
            localStorage.setItem('products', JSON.stringify(myCart))
        }




    }

    componentDidMount() {
        let data = localStorage.getItem("products")
        if (data) {
            this.setState({
                myCart: JSON.parse(data)
            })
        }
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


    render() {
        var data = this.props.location.state
        let { myCart,user } = this.state
        return (
            <div>
                <NavBar myCart={myCart} path={this.props} user={user} />
                <Grid container justify='center' spacing={3}>
                    <Grid item xs={12} md={8} lg={7} >
                        <Paper>
                            <div className="pop-up-container-vertical" >
                                <div className="pop-up-wrapper">
                                    <div className="product-details">
                                        <div className="product-left">
                                            <div className="product-image">
                                                <img src={data.url} ALT='Product' style={{ verticalAlign: 'text-top' }} />
                                            </div>
                                        </div>
                                        <div className="product-right">
                                            <div style={{ textAlign: 'justify' }} className="product-description">
                                                <b style={{ fontWeight: 'bolder' }}>Description:</b> {data.description}
                                            </div>
                                            <div className="product-available">
                                                Price: <span className="product-extended">{data.price}</span>
                                            </div>

                                            <div className="product-quantity">
                                                <label htmlFor="product-quantity-input" className="product-quantity-label">Quantity</label>
                                                <div className="product-quantity-subtract" style={{ cursor: 'pointer' }} onClick={() => this.state.plus > 0 ? this.setState({ plus: this.state.plus - 1 }) : this.setState({ disabled: true })}  >
                                                    <i className="fa fa-chevron-left"></i>
                                                </div>
                                                <div>
                                                    <input type="number" disabled value={this.state.plus} id="product-quantity-input" />
                                                </div>
                                                <div className="product-quantity-add" style={{ cursor: 'pointer' }} onClick={() => this.setState({ plus: this.state.plus + 1 })}>
                                                    <i className="fa fa-chevron-right" ></i>
                                                </div>

                                                <div style={{ marginTop: '60px' }}>
                                                    <MDBBtn disabled={this.state.plus === 0 ? true : false} onClick={() => this.addToCart(data)} color="yellow">
                                                        <MDBIcon icon="shopping-cart" size='lg' /> &nbsp; Add To Cart
                                                </MDBBtn>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>



                        </Paper>
                    </Grid>
                </Grid>

                <div>
          <FooterPagePro />

                </div>


            </div >

        );
    }

};

export default PanelPage;