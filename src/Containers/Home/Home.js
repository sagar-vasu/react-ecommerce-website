import React from 'react';
import { Slider, Product, Chips, NavBar, Rating, FooterPagePro } from '../../Components'
import {firebaseApp} from "../../Config/Firebase/firebase";


class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      AllProducts: [],
      myCart: [],
      myWhishlist: [],
      user: ''
    }
  }

  componentDidMount() {
    let { AllProducts } = this.state
    firebaseApp.firestore().collection('products').get().then(
      value => {
        value.forEach(doc => {
          let products = doc.data()
          AllProducts.push(products)
          this.setState({
            AllProducts
          })
        })
      }
    )
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



  getProduct = (data) => {
    var array = []
    if (data === 'Mix') {
      firebaseApp.firestore().collection('products').get().then(
        value => {
          value.forEach(doc => {
            let products = doc.data()
            array.push(products)
            this.setState({
              AllProducts: array
            })
          })
        }
      )
    }
    else {
      var array = []
      firebaseApp.firestore().collection('products').where("ProductCatogery", "==", data).get().then(
        value => {
          value.forEach(doc => {
            let products = doc.data()
            array.push(products)
            console.log(array)
            this.setState({
              AllProducts: array
            })
          })
        }
      )

    }


  }

  render() {
    let { AllProducts, user } = this.state
    return (
      <div>
        <NavBar path={this.props} myCart={this.state.myCart} user={user} />
        <Slider />
        <div style={{ textAlign: 'center' }}>
          <Chips catogey='Mix' getproduct={this.getProduct} />
          <Chips catogey='computer' getproduct={this.getProduct} />
          <Chips catogey='home' getproduct={this.getProduct} />
          <Chips catogey='watches' getproduct={this.getProduct} />
          <Chips catogey='Seiko' getproduct={this.getProduct} />
        </div>
        <div style={{ padding: '25px' }}>
          {
            AllProducts.map((val, ind) => {
              return <Product path={this.props} favourite={this.favourite} price={val.ProductPrice} detail={val.ProductDescription} title={val.ProductName} rating={<Rating val={ind} />} url={val.ProductImage} key={ind} />
            })

          }



        </div>
        <div>
          <FooterPagePro />
        </div>
      </div >
    );

  }

}

export default Home;
