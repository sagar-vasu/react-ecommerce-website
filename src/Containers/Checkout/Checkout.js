import React, { Component } from "react";
import { NavBar } from '../../Components'
import {
    MDBContainer, MDBCol, MDBRow, MDBCard, MDBCardBody, MDBBtn, MDBNav, MDBNavItem, MDBNavLink, MDBTabPane,
    MDBTabContent
} from "mdbreact";
import {
    firebaseApp,
    provider
} from '../../Config/Firebase/firebase'


class eCommercePage extends Component {
    constructor() {
        super()
        this.state = {
            activePill: "1",
            myCart: [],
            disabled: true,
        }
        this.textInput = React.createRef();
        this.textInput1 = React.createRef();
        this.textInput2 = React.createRef();
        this.textInput3 = React.createRef();
        this.textInput4 = React.createRef();
        this.textInput5 = React.createRef();
        this.textInput6 = React.createRef();
        this.textInput7 = React.createRef();
        this.textInput8 = React.createRef();
    }



    togglePills = tab => {
        if (this.state.activePill !== tab) {
            this.setState({
                ctivePill: tab
            });
        }
    }



    selectNextTab = () => {
        let { fname, lname, email, address, city } = this.state

        if (!fname) {
            this.textInput.current.focus();

        }
        else if (!lname) {
            this.textInput1.current.focus();
        }
        else if (!email) {
            this.textInput2.current.focus();
        }
        else if (!address) {
            this.textInput3.current.focus();
        }
        else if (!city) {
            this.textInput4.current.focus();
        }
        else {
            this.setState({
                activePill: (+this.state.activePill + 2).toString()
            });

        }


    }

    placeOrder = () => {
        let { creditCard, expireDate, cardName, securityCode } = this.state

        if (!cardName) {
            this.textInput5.current.focus();

        }
        else if (!creditCard) {
            this.textInput6.current.focus();
        }
        else if (!expireDate) {
            this.textInput7.current.focus();
        }
        else if (!securityCode) {
            this.textInput8.current.focus();
        }
        else {
            let order = {
                fname: this.state.fname,
                lname: this.state.lname,
                address: this.state.address,
                City: this.state.city,
                img: this.state.user.img,
                uid: this.state.user.uid,
            }
            alert('Thanks For order')
            localStorage.removeItem('products')
            firebaseApp.firestore().collection('orders').add(order).then(
                this.props.history.push('/')
            )
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
                    console.log(user, 'user')
                }
            )

        }
    }

    render() {
        const { activePill } = this.state;

        return (

            <div>
                <NavBar path={this.props} myCart={this.state.myCart} user={this.state.user} />
                <div>
                    <MDBContainer>
                        <MDBRow className="my-2" center>
                            <MDBCard className="w-100">
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol lg="8" className="mb-4">
                                            <MDBNav pills color="primary" className="nav-justified">
                                                <MDBNavItem>
                                                    <MDBNavLink to="#" className={activePill === "1" ? "active" : ""} onClick={() => this.togglePills("1")}
                                                    >
                                                        <strong>1. Billing</strong>
                                                    </MDBNavLink>
                                                </MDBNavItem>
                                                <MDBNavItem>
                                                    <MDBNavLink to="#" className={activePill === "3" ? "active" : ""} onClick={() => this.togglePills("3")}
                                                    >
                                                        <strong>2. Payment</strong>
                                                    </MDBNavLink>
                                                </MDBNavItem>
                                            </MDBNav>
                                            <MDBTabContent className="pt-4" activeItem={activePill}>
                                                <MDBTabPane tabId="1">
                                                    <form>
                                                        <MDBRow>
                                                            <MDBCol md="6" className="mb-4">
                                                                <label htmlFor="firstName">First name</label>
                                                                <input ref={this.textInput} onChange={(e) => this.setState({ fname: e.target.value, disabled: false })} type="text" id="firstName" className="form-control" />
                                                            </MDBCol>
                                                            <MDBCol md="6" className="mb-2">
                                                                <label htmlFor="lastName">Last name</label>
                                                                <input ref={this.textInput1} onChange={(e) => this.setState({ lname: e.target.value, disabled: false })} type="text" id="lastName" className="form-control" />
                                                            </MDBCol>
                                                            <MDBCol>
                                                                <label htmlFor="email">Email</label>
                                                                <input ref={this.textInput2} onChange={(e) => this.setState({ email: e.target.value, disabled: false })} type="text" id="email" className="form-control mb-4" placeholder="youremail@example.com" />
                                                                <label htmlFor="address">Address</label>
                                                                <input ref={this.textInput3} onChange={(e) => this.setState({ address: e.target.value, disabled: false })} type="text" id="address" className="form-control mb-4" placeholder="1234 Main St" />
                                                            </MDBCol>
                                                        </MDBRow>
                                                        <MDBRow>
                                                            <MDBCol lg="4" md="12" className="mb-4">
                                                                <label htmlFor="state">City</label>
                                                                <select ref={this.textInput4} onChange={(e) => this.setState({ city: e.target.value })} className="custom-select d-block w-100" id="state" required>
                                                                    <option>Choose...</option>
                                                                    <option>Karachi</option>
                                                                    <option>Mithi</option>
                                                                    <option>Thar</option>
                                                                    <option>Lahore</option>
                                                                </select>
                                                                <div className="invalid-feedback">
                                                                    Please provide a valid state.
                                                                </div>
                                                            </MDBCol>
                                                        </MDBRow>
                                                        <hr />
                                                        <div className="mb-1">
                                                            <input type="checkbox" style={{ marginLeft: '10px' }} className="form-check-input filled-in" id="chekboxRules" />
                                                            <label className="form-check-label" htmlFor="chekboxRules" style={{ marginLeft: '40px' }}>I accept the terms and conditions</label>
                                                        </div>
                                                        <hr />

                                                        <MDBBtn color="pink" outline size="lg" disabled={this.state.disabled} block onClick={this.selectNextTab}>Next step</MDBBtn>
                                                    </form>
                                                </MDBTabPane>

                                                <MDBTabPane tabId="3">
                                                    <div className="d-block my-3">
                                                        <div className="mb-2">
                                                            <input name="group2" type="radio" className="form-check-input with-gap" id="radioWithGap4" required />
                                                            <label className="form-check-label" htmlFor="radioWithGap4">Credit card</label>
                                                        </div>
                                                        <div className="mb-2">
                                                            <input iname="group2" type="radio" className="form-check-input with-gap" id="radioWithGap5"
                                                                required />
                                                            <label className="form-check-label" htmlFor="radioWithGap5">Debit card</label>
                                                        </div>
                                                        <div className="mb-2">
                                                            <input name="group2" type="radio" className="form-check-input with-gap" id="radioWithGap6" required />
                                                            <label className="form-check-label" htmlFor="radioWithGap6">Paypal</label>
                                                        </div>
                                                        <MDBRow>
                                                            <MDBCol md="6" className="mb-3">
                                                                <label htmlFor="cc-name123">Name on card</label>
                                                                <input type="text" ref={this.textInput5} onChange={(e) => this.setState({ cardName: e.target.value, disabled: false })} className="form-control" id="cc-name123" required />
                                                                <small className="text-muted">Full name as displayed on card</small>
                                                                <div className="invalid-feedback">
                                                                    Name on card is required
                          </div>
                                                            </MDBCol>
                                                            <MDBCol md="6" className="mb-3">
                                                                <label htmlFor="cc-number123">Credit card number</label>
                                                                <input ref={this.textInput6} onChange={(e) => this.setState({ creditCard: e.target.value, disabled: false })} type="text" className="form-control" id="cc-number123" required />
                                                                <div className="invalid-feedback">
                                                                    Credit card number is required
                          </div>
                                                            </MDBCol>
                                                        </MDBRow>
                                                        <MDBRow>
                                                            <MDBCol md="3" className="mb-3">
                                                                <label htmlFor="cc-name123">Expiration</label>
                                                                <input ref={this.textInput7} onChange={(e) => this.setState({ expireDate: e.target.value, disabled: false })} type="text" className="form-control" id="cc-name123" required />
                                                                <div className="invalid-feedback">
                                                                    Name on card is required
                          </div>
                                                            </MDBCol>
                                                            <MDBCol md="3" className="mb-3">
                                                                <label htmlFor="cc-cvv123"> Security code </label>
                                                                <input ref={this.textInput8} onChange={(e) => this.setState({ securityCode: e.target.value, disabled: false })} type="text" className="form-control" id="cc-cvv123" required />
                                                                <div className="invalid-feedback">
                                                                    Security code required
                          </div>
                                                            </MDBCol>
                                                        </MDBRow>
                                                        <hr className="mb-4" />
                                                        <MDBBtn color="pink" onClick={this.placeOrder} outline size="lg" block>Place order</MDBBtn>

                                                    </div>
                                                </MDBTabPane>
                                            </MDBTabContent>
                                        </MDBCol>
                                        <MDBCol lg="4" className="mb-4">

                                            <MDBCard>
                                                <MDBCardBody>
                                                    <h4 className="mb-4 mt-1 h5 text-center font-weight-bold">Summary</h4>
                                                    <hr />


                                                    {
                                                        this.props.location.state.data.map((val, ind) => {
                                                            return <div>
                                                                <MDBRow>
                                                                    <MDBCol sm="8">
                                                                        {val.productName}

                                                                    </MDBCol>
                                                                    <MDBCol sm="4">
                                                                        {val.productPrice * val.productQuantity}
                                                                    </MDBCol>
                                                                </MDBRow>
                                                                <hr />

                                                            </div>

                                                        })


                                                    }


                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBRow>
                    </MDBContainer>
                </div>

            </div>

        );
    }
}

export default eCommercePage;