import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useState } from 'react';

function GetData() {
    let [data, setData] = useState([]);
    let [rescode,setRescode] = useState('0');

    useEffect(() => {
        async function dataFetch() {
            let response = await fetch("http://3.111.186.195:3000/user")
            let udata = await response.json()
            setData(udata.response);
        }
        dataFetch();
    }, []);
    function deleteUser(uid) {
        //alert(uid);
        fetch(`http://3.111.186.195:3000/user/${uid}`, { method: "Delete" })
            .then((res) => {
                if (res.status === 200) 
                {
                    alert("User Deleted");
                }
            })
    }

    function Display() {
        return (
            

                <Table striped border hover>
                    <thead>
                        <tr>
                            <th>#Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Mobile No</th>
                            <th>Address</th>
                            <th>Action</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item._id}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile_no}</td>
                                        <td>{item.address}</td>
                                        <td><button onClick={() =>deleteUser(item._id)} className='btn-danger' >Delete</button></td>
                                        <td><button className='btn-success'>Update</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            
        )
    }


return (
    <>
        <h1>Registered Users Data</h1>
            <Display/>
    </>
);
}

export default GetData;
