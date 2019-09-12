// import React from "react";
// import { MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
// import Grid from "@material-ui/core/Grid";
// import { Paper, NavBar } from '../../Components'
// import { Button } from "@material-ui/core";
// import {firebaseApp} from '../../Config/Firebase/firebase'
// import { login,LoginFacebook } from '../../Config/Functions/functions'


// class FormsPage extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       email: "",
//       password: "",
//       myCart: []

//     };
//   }


//   componentDidMount() {
//     let data = localStorage.getItem("products")
//     if (data) {
//       this.setState({
//         myCart: JSON.parse(data)
//       })

//     }
//   }



//   UserLogin = async () => {
//     let { email, password } = this.state
//     try {
//       let user = await login(email, password)
//       if (user) {
//         let id = user.uid
//         console.log(id)
//         localStorage.setItem('uid', JSON.stringify(user.uid))
//         this.props.history.push('/')
//       }


//     }
//     catch (err) {
//       console.log(err)
//     }

//   }

//   submitHandler = event => {
//     event.preventDefault();
//     event.target.className += " was-validated";
//   };

//   changeHandler = event => {
//     this.setState({ [event.target.name]: event.target.value });
//   };




//  loginWithFacebook = async ()=>{
//   try{
//     let cUser = await LoginFacebook()
//      if(cUser){
//        // this.props.history.push('/')
//      await  firebaseApp.firestore().collection("users").doc(cUser.uid).set(cUser).then(
//          localStorage.setItem('uid', JSON.stringify(cUser.uid))
//          )
//        }
//        this.props.history.push('/')
//    }
//   catch(err){
//     alert(err)
//   }

// }



//   render() {
//     return (
//       <div>
// <NavBar path={this.props} myCart={this.state.myCart} />
//         <div style={{ marginTop: '70px' }}>
//           <Grid container justify="center" spacing={2}>
//             <Grid item xs={11} md={10} lg={8}>
//               <Paper>
//                 <div style={{ padding: '23px' }}>
//                   <form
//                     className="needs-validation"
//                     onSubmit={this.submitHandler}
//                     noValidate
//                   >
//                     <MDBRow>
//                       <MDBCol md="4" className="mb-3">
//                         <label
//                           htmlFor="defaultFormRegisterConfirmEx3"
//                           className="grey-text"
//                         >
//                           Email
//                         </label>
//                         <input
//                           value={this.state.email}
//                           onChange={this.changeHandler}
//                           type="email"
//                           id="defaultFormRegisterConfirmEx3"
//                           className="form-control"
//                           name="email"
//                           placeholder="Your Email address"
//                         />
//                         <small id="emailHelp" className="form-text text-muted">
//                           We'll never share your email with anyone else.
//                         </small>
//                         <div className="invalid-feedback">
//                           Please provide a valid Email.
//                         </div>
//                         <div className="valid-feedback">Looks good!</div>
//                       </MDBCol>
//                       <MDBCol md="4" className="mb-3">
//                         <MDBBtn size='lg' color="blue" social="fb" onClick={this.loginWithFacebook}>
//                           <MDBIcon fab icon="facebook-f" className="pr-1" /> Login With Facebook
//                         </MDBBtn>
//                       </MDBCol>
//                     </MDBRow>
//                     <MDBRow>
//                       <MDBCol md="4" className="mb-3">
//                         <label
//                           htmlFor="defaultFormRegisterConfirmEx3"
//                           className="grey-text"
//                         >
//                           Your Password
//                         </label>
//                         <input
// value={this.state.password}
// onChange={this.changeHandler}
//                           type="password"
//                           id="defaultFormRegisterConfirmEx3"
//                           className="form-control"
//                           name="password"
//                           placeholder=" Your Password"
//                         />

//                         <div className="invalid-feedback">
//                           Please provide a valid Email.
//                     </div>
//                         <div className="valid-feedback">Looks good!</div>
//                       </MDBCol>

//                       <MDBCol md="4" className="mb-3">
//                         <MDBBtn size='lg' color="red" social="gplus">
//                           <MDBIcon fab icon="google-plus-g" className="pr-1" /> Login with Google &nbsp;
//                         </MDBBtn>
//                       </MDBCol>
//                     </MDBRow>


//                     <MDBCol md="4" className="mb-3">
//                       <div className="custom-control custom-checkbox pl-3">
//                         <input
//                           className="custom-control-input"
//                           type="checkbox"
//                           value=""
//                           id="invalidCheck"
//                           required
//                         />
//                         <label className="custom-control-label" htmlFor="invalidCheck">
//                           Agree to terms and conditions
//                          </label>
//                         <div className="invalid-feedback">
//                           You must agree before submitting.
//                       </div>
//                       </div>
//                     </MDBCol>
// <div style={{ textAlign: 'center' }}>
//   <Button onClick={this.UserLogin} variant='outlined' size='large' color="secondary" type="submit">
//     Login
//  </Button>

//                     </div>

//                   </form>
//                 </div>
//               </Paper>


//             </Grid>
//           </Grid>


//         </div>
//       </div>

//     );
//   }
// }

// export default FormsPage;





import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
// import {firebaseApp} from '../../Config/Firebase/firebase'
// import { login,LoginFacebook } from '../../Config/Functions/functions'
import { Paper, NavBar } from '../../Components'
import { Button } from "@material-ui/core";
import { firebaseApp } from '../../Config/Firebase/firebase'
import { login, LoginFacebook } from '../../Config/Functions/functions'

class FormPage extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
      myCart: []

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



  UserLogin = async () => {
    let { email, password } = this.state
    try {
      let user = await login(email, password)
      if (user) {
        let id = user.uid
        console.log(id)
        localStorage.setItem('uid', JSON.stringify(user.uid))
        this.props.history.push('/')
      }


    }
    catch (err) {
      console.log(err)
    }

  }





  loginWithFacebook = async () => {
    try {
      let cUser = await LoginFacebook()
      if (cUser) {
        // this.props.history.push('/')
        await firebaseApp.firestore().collection("users").doc(cUser.uid).set(cUser).then(
          localStorage.setItem('uid', JSON.stringify(cUser.uid))
        )
      }
      this.props.history.push('/')
    }
    catch (err) {
      alert(err)
    }

  }



  render() {
    return (
      <div>
        <NavBar path={this.props} myCart={this.state.myCart} />

        <div style={{ marginTop: '60px' }}>
          <MDBContainer>
            <MDBRow center>
              <MDBCol md="6">
                <MDBCard>
                  <MDBCardBody>
                    <p className="h4 text-center py-4">Social Login</p>

                    <div style={{ marginTop: '10px', textAlign: 'center' }}>
                      <MDBBtn size='lg' color="blue" social="fb" onClick={this.loginWithFacebook}>
                        <MDBIcon fab icon="facebook-f" className="pr-1" /> Login With Facebook
                </MDBBtn>
                    </div>
                    <div style={{ marginTop: '10px', textAlign: 'center' }}>
                      <MDBBtn size='lg' color="red" social="gplus">
                        <MDBIcon fab icon="google-plus-g" className="pr-1" /> Login with Google &nbsp;
              </MDBBtn>

                    </div>
                    <form>
                      <br />
                      <p className="h4 text-center py-4">Login With Email</p>
                      <label
                        htmlFor="defaultFormCardNameEx"
                        className="grey-text font-weight-light"
                      >
                        Your Email
                </label>
                      <input
                        type="email"
                        id="defaultFormCardNameEx"
                        className="form-control"
                        onChange={(e)=>this.setState({email:e.target.value})}
                      />
                      <br />
                      <label
                        htmlFor="defaultFormCardEmailEx"
                        className="grey-text font-weight-light"
                      >
                        Your Password
                </label>
                      <input
                        type="password"
                        id="defaultFormCardEmailEx"
                        className="form-control"
                        onChange={(e)=>this.setState({password:e.target.value})}
                      />
                      <div className="text-center py-4 mt-3">
                        <div style={{ textAlign: 'center' }}>
                          <Button onClick={this.UserLogin} variant='outlined' size='large' color="secondary" type="button">
                            Login
                     </Button>
                        </div>
                      </div>
                    </form>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

        </div>
      </div>

    );
  }
};

export default FormPage;