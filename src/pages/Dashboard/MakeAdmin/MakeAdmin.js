import { Button, Alert } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from "react";

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://peaceful-castle-44201.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {

                    setSuccess(true)

                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h1 style={{ fontWeight: '700' }}>M<span style={{ color: 'yellowgreen' }}>ake</span> An A<span style={{ color: 'tomato' }}>dmin</span></h1>
            <form onSubmit={handleAdminSubmit}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField
                        sx={{ width: '40%' }}
                        label="Email"
                        type="email"
                        onBlur={handleOnBlur}
                        variant="standard" />
                </Box>
                <br /> <br />
                <Button sx={{ width: '10%', backgroundColor: 'lightseagreen', fontWeight: '600' }} type="submit" variant="contained">Add</Button>
            </form>
            {success && <Alert severity="success" color="primary">
                Making Admin Successfully
            </Alert>}
        </div>
    );
};

export default MakeAdmin;