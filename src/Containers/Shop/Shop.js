import React from 'react';
import { NavBar,FooterPagePro } from "../../Components";
import {firebaseApp} from '../../Config/Firebase/firebase'


class Shop extends React.Component {
  constructor() {
    super()
    this.state = {
      myCart: []
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
    let {user} = this.state
    return (
      <div>


        <NavBar path={this.props} myCart={this.state.myCart} user={user} />

        <h1>Shop</h1>

        <div>
          <FooterPagePro />

        </div>

      </div>
    );

  }

}

export default Shop;
