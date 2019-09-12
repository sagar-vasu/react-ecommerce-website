import React from "react";
import Grid from "@material-ui/core/Grid";
import { Paper, ResponsiveDrawer, OutlinedTextFields, } from '../../../Components'
import Button from '@material-ui/core/Button';
import {firebaseApp} from '../../../Config/Firebase/firebase'
class EditProdctUi extends React.Component {
    constructor() {
        super()
        this.state = {
            ProductName: '',
            ProductPrice: '',
            ProductCatogery: '',
            ProductDescription: '',
        }


    }



    updateProduct = async () => {

        //    firebase.firestore().collection("products").doc(this.state.uid).onSnapshot(doc=>{

            firebaseApp.firestore().collection("products").doc(this.state.uid).set(this.state).then(
            this.props.path.push('/dashboard')
        )


        // })
    }


    getImageURL = async (e) => {
        console.log(e.target.files[0])
        let imageName = e.target.files[0].name
        let ref = firebaseApp.storage().ref('/').child(`productsImages/${imageName}`)
        await ref.put(e.target.files[0])
        ref.getDownloadURL().then((url) => {
            this.setState({
                ProductImage: url
            })
        })
    }


    componentDidMount() {
        let data = this.props.data
        console.log(data)
        this.setState({
            ProductName: data.ProductName,
            ProductPrice: data.ProductPrice,
            ProductCatogery: data.ProductCatogery,
            ProductDescription: data.ProductDescription,
            uid: data.uid
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
                                <OutlinedTextFields ref={this.textInput4} value={this.state.ProductDescription} type='textarea' rows="3" label="Product detail" onChange={(e) => this.setState({ ProductDescription: e.target.value })} />
                                <br />
                                <Button style={{ textAlign: 'center', marginLeft: '35%' }} variant='outlined' color='secondary' onClick={this.updateProduct} >Update Product</Button>

                            </div>
                        </Paper>
                    </Grid>
                </Grid>



            </div>
        );
    }
}


export default class EditProdct extends React.Component {

    render() {
        console.log(this.props, 'data')

        return (
            <div>
                <ResponsiveDrawer component={<EditProdctUi path={this.props.history} data={this.props.location.state.data} />} />
            </div>
        )
    }
}


