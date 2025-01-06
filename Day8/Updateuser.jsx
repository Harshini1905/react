import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Updateuser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    

    const updateuser = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/api/user/update/${id}`, { name, email, address })
            .then(result => {
                console.log(result.data);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            }); 
    }

    return (
        <div>
            <form onSubmit={updateuser}>
                <label>Name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
                <label>Email</label>
                <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
                <label>Address</label>
                <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} /><br /><br />
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default Updateuser;