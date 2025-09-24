import { Box, Stack, Button, IconButton, ButtonGroup , ToggleButton , ToggleButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';


const MuiButton = () => {

    const [formats , setFormats] = useState([])

    console.log({formats ,});
    
    const handleFormatChange = (e , updatedformats) => {
      setFormats(updatedformats)
    }



  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={'row'}>
        <Button variant='text' href='https://google.com'>click me </Button>
        <Button variant='contained'>click me </Button>
        <Button variant='outlined'>click me </Button>
      </Stack >

      <Stack spacing={2} direction={'row'}>
        <Button variant='contained' color='primary' >Primary</Button>
        <Button variant='contained' color='secondary' >secondary</Button>
        <Button variant='contained' color='error' >error</Button>
        <Button variant='contained' color='info' >info</Button>
        <Button variant='contained' color='success' >success</Button>
        <Button variant='contained' color='warning' >warning</Button>
      </Stack>

      <Stack display={'block'} direction={'row'} spacing={2}>
        <Button variant='contained' size='small'>small</Button>
        <Button variant='contained' size='large'>large</Button>
        <Button variant='contained' size='medium'>medium</Button>
      </Stack>

      <Stack spacing={2} direction='row'>
        <Button variant='contained' startIcon={<SendIcon />}>Send</Button>
        <Button variant='contained' disableElevation disableRipple onClick={() => {
          alert("you clicked")
        }} endIcon={<SendIcon />}>Send</Button>
        <IconButton aria-label='send' color='success' size='small' >
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction={'row'} >
        <ButtonGroup variant='text' orientation='vertical'>
          <Button >left</Button>
          <Button >center</Button>
          <Button >right</Button>
        </ButtonGroup>
      </Stack>


      <Stack direction={'row'}>
        <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={handleFormatChange}>
          <ToggleButton value={'bold'} aria-label='bold'><FormatBoldIcon/></ToggleButton>
          <ToggleButton value={'italic'} aria-label='italic'><FormatItalicIcon/></ToggleButton>
          <ToggleButton value={'underline'} aria-label='underline'><FormatUnderlinedIcon/></ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  )
}

export default MuiButton
