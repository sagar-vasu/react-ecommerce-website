import {firebaseApp,provider}  from "../Firebase/firebase";


// Facebook Login

let LoginFacebook = () => {
  return new Promise((resolve, reject) => {
    provider.setCustomParameters({
      display: "popup"
    });
    firebaseApp.auth().signInWithPopup(provider).then(function(result) {
        var user = result.user;
        let obj = {
          img: user.photoURL,
          fname: user.displayName,
          uid:user.uid
        };
        resolve(obj);
      })
      .catch(function(error) {
        console.log(`error ==>`, error);
        reject(error);
      });
  });
};



function signup(email,password){
  console.log(email,password)
  return new Promise ((resolve,reject)=>{
    firebaseApp.auth().createUserWithEmailAndPassword(email,password).then(res=>resolve({email:res.user.email,uid:res.user.uid}
      )).catch((rej)=>reject(rej))
  })
}

function login(email,password){
  return new Promise ((resolve,reject)=>{
    firebaseApp.auth().signInWithEmailAndPassword(email,password).then(res=>resolve(res.user)).catch((rej)=>reject(rej))
  })

}



let LoginAdmin = (email,password,props) => {
  return new Promise((resolve, reject) => {
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .then(res => {
      let obj={
        email:res.user.email,
        id:res.user.uid,
      }
      resolve(obj)
    })
    .catch(error => {
        reject(error.code)
        console.log('i am error')

    });
    
  });
};




// onauth

let authFunc =()=>{

return new Promise((resolve,reject)=>{
  firebaseApp.auth().onAuthStateChanged(function(user) {
    if (user) {
      let userObj={
        name:user.displayName,
        photo:user.photoURL
      }
      
      resolve(userObj)
    
    } else {
     reject(false)
    }

  })
 
});
}



// Logout User

function logoutUser (){
  return new Promise ((resolve,reject)=>{
      firebaseApp.auth().signOut().then((res)=>resolve(res)).catch((err)=>reject(err))
  })
} 
export{
    LoginAdmin,
    signup,
    login,
    logoutUser,
    LoginFacebook,
    authFunc
}