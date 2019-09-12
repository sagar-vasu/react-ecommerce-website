import React from 'react'
import { Table, NavBar } from '../../Components'
import {firebaseApp} from '../../Config/Firebase/firebase'

export default class ViewCart extends React.Component {
    constructor(){
        super()
        this.state={
            myCart:0
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
        console.log(this.props)
        return (
            <div>
                <NavBar myCart={this.state.myCart} path={this.props} user={this.state.user} />
                <div style={{marginTop:'50px'}}>

                    <Table path={this.props} myCart={this.props.location.state.data} />
                
                </div>

            </div>

        )
    }
}