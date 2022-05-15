import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

export interface ICreateCustomersProps {
}

export default function CreateCustomers (props: ICreateCustomersProps) {
    const onsubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event)
    }
    return (
        <>
            <form id='form' onSubmit={onsubmit} >
                <InputLabel htmlFor="input-with-icon-adornment">
                    With a start adornment
                    </InputLabel>
                    <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                             <AccountCircle />
                        </InputAdornment>
                    }
                />
                <button type="submit" >Submit</button>
            </form> 
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <FormControl variant="standard" >
                    <InputLabel htmlFor="input-with-icon-adornment">
                    With a start adornment
                    </InputLabel>
                    <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                        <AccountCircle />
                        </InputAdornment>
                    }
                    />
                </FormControl>
            </Box>
        </>
    );
}
