import { Typography } from '@mui/material'
import React from 'react'

function MuiTypograhpy() {
  return (
    <div>
        <Typography  variant='h1' >h1 Heading</Typography>
        <Typography  variant='h2' >h2 Heading</Typography>
        <Typography  variant='h3' >h3 Heading</Typography>
        <Typography  variant='h4' component={'h1'} gutterBottom>h4 Heading</Typography>
        <Typography  variant='h5' >h5 Heading</Typography>
        <Typography  variant='h6' >h6 Heading</Typography>


        <Typography  variant='subtitle1' >subtitle 1</Typography>
        <Typography  variant='subtitle2' >subtitle 2</Typography>


        <Typography  variant='body1' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt debitis esse beatae! Harum, rerum! Libero vel repudiandae eum ipsa earum harum quibusdam dolores unde consequatur, voluptatibus quasi iste beatae sequi.</Typography>
        <Typography  variant='body2' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, enim? Odit consectetur reiciendis quas quam in non dolorem veritatis, illo quis, voluptatum tenetur officia corrupti vel tempore suscipit, adipisci facere?</Typography>
    </div>
  )
}

export default MuiTypograhpy
