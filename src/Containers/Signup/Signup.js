import React from "react";
import { MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import { Paper, NavBar } from '../../Components'
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { signup,LoginFacebook } from '../../Config/Functions/functions'
import {firebaseApp} from '../../Config/Firebase/firebase'


class FormsPage extends React.Component {
  constructor() {
    super()
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      myCart:[]

    };
  }

  
  componentDidMount() {

    let data = localStorage.getItem("products")
    if (data) {
      this.setState({
        myCart: JSON.parse(data)
      })

    }
  }



  UserRegister = async () => {
    let { email, password, fname, lname, profile } = this.state
    try {
      let user = await signup(email, password)
      user.fname = fname
      user.lname = lname
      user.img = profile
      console.log(user)
      // if(user.lname===undefined){
      //   alert()
      // }
      firebaseApp.firestore().collection("users").doc(user.uid).set(user).then(
        this.props.history.push('/')
      )
    }
    catch (err) {
      console.log(err)
    }

  }

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  getImage = async (e) => {

    let imageName = e.target.files[0].name
    let ref = firebaseApp.storage().ref('/').child(`users/${imageName}`)
    await ref.put(e.target.files[0])
    ref.getDownloadURL().then((url) => {
      console.log(url)
      this.setState({
        profile: url
      })
    })
  }


 loginWithFacebook = async ()=>{
   try{
     let cUser = await LoginFacebook()
      if(cUser){
        // this.props.history.push('/')
      await  firebaseApp.firestore().collection("users").doc(cUser.uid).set(cUser).then(
          localStorage.setItem('uid', JSON.stringify(cUser.uid))
          )
        }
        this.props.history.push('/')
    }
   catch(err){
     alert(err)
   }

 }
  

  render() {
    return (
      <div>
          <NavBar path={this.props} myCart={this.state.myCart} />
        <div style={{marginTop:'70px'}}>
          <Grid container justify="center" spacing={2}>
            <Grid item xs={11} md={10} lg={8}>
              <Paper>

                <div style={{ padding: '23px' }}>
                  <form
                    className="needs-validation"
                    onSubmit={this.submitHandler}
                    noValidate
                  >
                    <MDBRow>
                      <MDBCol md="4" className="mb-3">
                        <label
                          htmlFor="defaultFormRegisterNameEx"
                          className="grey-text"
                        >
                          First name
                </label>
                        <input
                          value={this.state.fname}
                          name="fname"
                          onChange={this.changeHandler}
                          type="text"
                          id="defaultFormRegisterNameEx"
                          className="form-control"
                          placeholder="First name"
                          required
                        />
                        <div className="valid-feedback">Looks good!</div>
                      </MDBCol>
                      <MDBCol md="4" className="mb-3">
                        <label
                          htmlFor="defaultFormRegisterEmailEx2"
                          className="grey-text"
                        >
                          Last name
                </label>
                        <input
                          value={this.state.lname}
                          name="lname"
                          onChange={this.changeHandler}
                          type="text"
                          id="defaultFormRegisterEmailEx2"
                          className="form-control"
                          placeholder="Last name"
                          required
                        />
                        <div className="valid-feedback">Looks good!</div>
                      </MDBCol>
                      <MDBCol md="4" className="mb-3">
                        <MDBBtn size='lg' color="blue" social="fb" onClick={this.loginWithFacebook} >
                          <MDBIcon fab icon="facebook-f" className="pr-1" /> Login With Facebook
                        </MDBBtn>


                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="4" className="mb-3">
                        <label
                          htmlFor="defaultFormRegisterConfirmEx3"
                          className="grey-text"
                        >
                          Email
                </label>
                        <input
                          value={this.state.email}
                          onChange={this.changeHandler}
                          type="email"
                          id="defaultFormRegisterConfirmEx3"
                          className="form-control"
                          name="email"
                          placeholder="Your Email address"
                        />
                        <small id="emailHelp" className="form-text text-muted">
                          We'll never share your email with anyone else.
                </small>
                        <div className="invalid-feedback">
                          Please provide a valid Email.
                    </div>
                        <div className="valid-feedback">Looks good!</div>
                      </MDBCol>
                      <MDBCol md="4" className="mb-3">
                        <label
                          htmlFor="defaultFormRegisterPasswordEx4"
                          className="grey-text"
                        >
                          Password
                </label>
                        <input
                          value={this.state.password}
                          onChange={this.changeHandler}
                          type="password"
                          id="defaultFormRegisterPasswordEx4"
                          className="form-control"
                          name="password"
                          placeholder="password"
                          required
                        />
                        <div className="invalid-feedback">
                          Please provide a valid password.
                </div>
                        <div className="valid-feedback">Looks good!</div>
                      </MDBCol>
                      <MDBCol md="4" className="mb-3">
                        <MDBBtn size='lg' color="red" social="gplus">
                          <MDBIcon fab icon="google-plus-g" className="pr-1" /> Login with Google &nbsp;
                    </MDBBtn>
                      </MDBCol>
                    </MDBRow>

                    <MDBRow>
                      <MDBCol md="4" className="mb-3">
                        <label
                          htmlFor="defaultFormRegisterConfirmEx3"
                          className="grey-text"
                        >
                          Image
                </label>
                        <input
                          onChange={this.getImage}
                          type="file"
                          id="defaultFormRegisterConfirmEx3"
                          className="form-control"
                          name="email"
                          placeholder="Select Image"
                        />
                        <small id="emailHelp" className="form-text text-muted">
                          We'll never share your email with anyone else.
                </small>
                        <div className="invalid-feedback">
                          Please provide a valid Email.
                    </div>
                        <div className="valid-feedback">Looks good!</div>
                      </MDBCol>
                    </MDBRow>

                    <MDBCol md="4" className="mb-3">
                      <div className="custom-control custom-checkbox pl-3">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label className="custom-control-label" htmlFor="invalidCheck">
                          Agree to terms and conditions
                </label>
                        <div className="invalid-feedback">
                          You must agree before submitting.
                </div>
                      </div>
                    </MDBCol>
                    <div style={{ textAlign: 'center' }}>
                      <Button onClick={this.UserRegister} variant='outlined' size='large' color="secondary" type="submit">
                        Signup
                </Button>

                    </div>

                  </form>
                </div>
              </Paper>


            </Grid>
          </Grid>


        </div>
      </div>

    );
  }
}

export default FormsPage;