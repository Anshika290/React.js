import React from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function StoreData() {
  let [fname, setFname] = useState('');
  let [lname, setLname] = useState('');
  let [email, setEmail] = useState('');
  let [mobile, setMobile] = useState('');
  let [address, setAddress] = useState('');
  let [password, setPassword] = useState('');

  function submitData() {
    //alert("you clicked")
    let userData = { 
      firstName: fname,
       lastName: lname,
       email: email, 
       mobile_no : mobile, 
       address: address, 
       password: password 
      };
    let reqData = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(userData),
    }
    fetch("http://3.111.186.195:3000/register", reqData)
      .then((response) => console.log(`Data Submitted ${response.status}`))
  }
  //console.log(userdata);

return (
  <Container fluid="md" style={{ backgroundColor: "black", color: "blue" }}>
    <h1>Register New User</h1>
    <Row>
      <Col>
        <label>First Name</label>
        <input className='form-control' placeholder="eg:Rahul" type="text" value={fname} onChange={(e) => setFname(e.target.value)} />
        <label>Last Name</label>
        <input className='form-control' placeholder="eg:Gandhi" type="text" value={lname} onChange={(e) => setLname(e.target.value)} />
        <label>Email</label>
        <input className='form-control' placeholder="eg:rahul@gmail.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Mobile No</label>
        <input className='form-control' placeholder="eg:6748367321" type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        <label>Address</label>
        <input className='form-control' placeholder="eg:Bhopal" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        <label>Password</label>
        <input className='form-control' placeholder="******" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Col>
    </Row>
    <Row>
      <Col>
        <button onClick={submitData} className='btn btn-primary'>Save</button>
      </Col>
      <Col>
        <button className='btn btn-warning'>Cancel</button>
      </Col>
    </Row>
  </Container>
);
}

export default StoreData;
