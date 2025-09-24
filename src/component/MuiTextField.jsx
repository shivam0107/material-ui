import { Stack, TextField, InputAdornment , IconButton } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const MuiTextField = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleToggle = () => setShowPassword((prev) => !prev);

    return (
        <Stack spacing={4}>
            <Stack direction={'row'} spacing={2}>
                <TextField label='Name' variant='filled' />
                <TextField label='Name' variant='outlined' />
                <TextField label='Name' variant='standard' />
            </Stack>

            <Stack direction={'row'} spacing={2}>
                <TextField label='Small Secondary' size='small' color='secondary' />

            </Stack>

            <Stack direction={'row'} spacing={2}>
                <TextField label='Form Input' required />
                <TextField label='Form Input' required helperText='Do not share your password with anyone' />
                <TextField label='password' type='password' required />
                <TextField value={'shhivam'} slotProps={{
                    input: {
                        readOnly: true,
                    }
                }} />

            </Stack>


            <Stack direction={'row'} spacing={2}>
                <TextField
                    label="Amount"
                    slotProps={{
                        input: {
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                        },
                    }}
                />

                <TextField
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleToggle} >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        },
                    }}
                />

            </Stack>
        </Stack>
    )
}

export default MuiTextField
