// import React, { Component } from 'react';
// import { MDBContainer, MDBIcon, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

// class ModalPage extends Component {
//     state = {
//         modal2: false,
//         modal3: false,
//         modal4: false,
//         modal5: false
//     }

//     toggle = nr => () => {
//         let modalNumber = 'modal' + nr
//         this.setState({
//             [modalNumber]: !this.state[modalNumber]
//         });
//     }
    // save = async()=>{
    //     alert()
    //    await this.props.onclick(this.props.data,this.props.ind)
    //     this.toggle(3)
    // }
//     render() {
//         return (
//             <MDBContainer>
//                 <MDBIcon onClick={this.toggle(3)} icon="trash-alt" />
//                 <MDBModal isOpen={this.state.modal3} toggle={this.toggle(3)} size="sm" side position="bottom-right">
//                     <MDBModalHeader toggle={this.toggle(3)}>Important</MDBModalHeader>
//                     <MDBModalBody>
//                         Wait, You are deleting a product...
//                     </MDBModalBody>
//                     <MDBModalFooter>
//                         <MDBBtn color="secondary" size="sm" onClick={this.toggle(3)}>Close</MDBBtn>
//                         <MDBBtn color="primary" size="sm" onClick={this.save}>Save changes</MDBBtn>
//                     </MDBModalFooter>
//                 </MDBModal>

//             </MDBContainer>
//         );
//     }
// }

// export default ModalPage;




import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBCol, MDBRow, MDBModalHeader, MDBModalFooter, MDBIcon } from
'mdbreact';

class ModalPage extends Component {
state = {
  modal6: false
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

save = async()=>{
   this.props.onclick(this.props.data,this.props.ind,this.props.collec)
}

render() {
  return (
      <MDBContainer>
          <MDBIcon onClick={this.toggle(6)} icon="trash-alt" />

        <MDBModal modalStyle="danger" className="text-white" size="sm" side position="top-right" backdrop={false} isOpen={this.state.modal6}
          toggle={this.toggle(6)}>
          <MDBModalHeader className="text-center" titleClass="w-100" tag="p" toggle={this.toggle(6)}>
            Are you sure?
          </MDBModalHeader>
          <MDBModalBody className="text-center">
            <MDBIcon icon="times" size="4x" className="animated rotateIn" />
          </MDBModalBody>
          <MDBModalFooter className="justify-content-center">
            <MDBBtn color="danger" onClick={this.save}>Yes</MDBBtn>
            <MDBBtn color="danger" outline onClick={this.toggle(6)}>No</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;