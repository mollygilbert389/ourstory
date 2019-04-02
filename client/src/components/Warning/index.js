// import React from 'react';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import { TextBox, Btn1 } from "../TextBox";
// import "./style.css";
// import {Login, Startbtn} from '../Login'


// class Warning extends React.Component {
//   constructor(props, context) {
//     super(props, context);

//     this.handleShow = this.handleShow.bind(this);
//     this.handleClose = this.handleClose.bind(this);
//     // this.hideButton = this.hideButton.bind(this);
//     // this.showButton = this.showButton.bind(this);

//     this.state = {
//       show: false,
//     };
//   }

//   handleClose() {
//     this.setState({ show: false });
//   }

//   handleShow() {
//     this.setState({ show: true });
//   }

//   hideButton() {
//     this.Btn1.setState({show: false})
//   }

//   showButton() {
//     this.Btn1.setState({show: true})
//   }

// render() {
//     return (
//         <div>
//     <button className='startbtn' onClick={this.handleShow}>start</button>
//     <Modal show={this.state.show} onHide={this.handleClose}>
//     <Modal.Header closeButton>
//     <Modal.Title>How to begin</Modal.Title>
//     </Modal.Header>
//         <Modal.Body>Once you click the close button in this box you will have 90 seconds to add your sentance. Please click submit once you are ready to add.</Modal.Body>
//         <Modal.Footer>
//      <Button variant="danger" onClick={this.handleClose}>
//     Close
//     </Button>
// </Modal.Footer>
// </Modal>
// </div>
// )
// }
// }

// export default Warning;
