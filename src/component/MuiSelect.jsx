import React, { useState } from 'react'
import { Box , TextField , MenuItemu, MenuItem } from '@mui/material'

const MuiSelect = () => {

    const [country , setCountry] = useState('')

    const handleChange = () => {

    }

    console.log("shivam singh")
    console.log("shivam singh")

  return (
  <Box width={'250px'}>
    <TextField label='select country' select value={country} onChange={handleChange}>
        <MenuItem value='IN'>India</MenuItem>
        <MenuItem value='US'>USA</MenuItem>
        <MenuItem value='AUS'>Australia</MenuItem>
    </TextField>

  </Box>
  )
}

export default MuiSelect
