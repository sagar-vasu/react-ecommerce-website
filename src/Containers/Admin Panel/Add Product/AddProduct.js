import React from "react";
import Grid from "@material-ui/core/Grid";
import { Paper, ResponsiveDrawer, OutlinedTextFields, } from '../../../Components'
import Button from '@material-ui/core/Button';
import {firebaseApp} from '../../../Config/Firebase/firebase'
class AddProdctUi extends React.Component {
    constructor() {
        super()
        this.state = {
            ProductPrice: '',
            ProductCatogery: '',
            ProductDescription: '',
            ProductImage: '',
            f1: false
        }


    }



    saveProduct = async () => {
        console.log(this.state)
        // let { ProductName, ProductPrice, ProductCatogery, ProductDescription, ProductImage } = this.state
        // if (!ProductName) {
        //     alert()
        //     this.setState({
        //         f1: true
        //     })

        // }
        // else if (!ProductPrice) {
        //     this.textInput1.current.focus();
        // }
        // else if (!ProductCatogery) {
        //     this.textInput2.current.focus();
        // }
        // else if (!ProductDescription) {
        //     this.textInput3.current.focus();
        // }
        // else if (!ProductImage) {
        //     this.textInput4.current.focus();
        // }
        // else {
        // alert('Thanks For order')
        await firebaseApp.firestore().collection("products").add(this.state)

        this.setState({
            ProductName: '',
            ProductPrice: '',
            ProductCatogery: '',
            ProductDescription: '',
            ProductImage: ''
        })


    }

    getImageURL = async (e) => {
        console.log(e.target.files[0])
        let imageName = e.target.files[0].name
        let ref = firebaseApp.storage().ref('/').child(`productsImages/${imageName}`)
        await ref.put(e.target.files[0])
        ref.getDownloadURL().then((url) => {
            console.log(url)
            this.setState({
                ProductImage: url
            })
        })

    }

    render() {
        return (
            <div>

                <Grid container justify="center" spacing={2}>
                    <Grid item xs={11} md={8} lg={6}>
                        <Paper>
                            <div style={{ padding: "20px" }}>
                                <OutlinedTextFields value={this.state.ProductName} type='text' label="Product Name" onChange={(e) => this.setState({ ProductName: e.target.value })} />
                                <OutlinedTextFields value={this.state.ProductCatogery} type='text' label="Product Catogery" onChange={(e) => this.setState({ ProductCatogery: e.target.value })} />
                                <OutlinedTextFields value={this.state.ProductPrice} type='number' label="Product Price" onChange={(e) => this.setState({ ProductPrice: e.target.value })} />
                                <OutlinedTextFields type='file' onChange={this.getImageURL} />
                                <OutlinedTextFields value={this.state.ProductDescription} type='textarea' rows="3" label="Product detail" onChange={(e) => this.setState({ ProductDescription: e.target.value })} />
                                <br />
                                <Button style={{ textAlign: 'center', marginLeft: '35%' }} variant='outlined' color='secondary' onClick={this.saveProduct} >Add Product</Button>

                            </div>
                        </Paper>
                    </Grid>
                </Grid>



            </div>
        );
    }
}


export default class AddProdct extends React.Component {
    render() {
        return (
            <div>
                <ResponsiveDrawer component={<AddProdctUi />} />
            </div>
        )
    }
}


