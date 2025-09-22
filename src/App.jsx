import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MuiTypograhpy from './component/MuiTypograhpy'
import { Box } from '@mui/material'
import MuiButton from './component/MuiButton'
import MuiTextField from './component/MuiTextField'
import ExpandableTable from './component/ExpandableTable'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Box sx={{
       justifyContent : 'center',
       alignItems : 'center',
       width : '100%',
       height : '100%',
     
    }}> 
      <h1>learning Material UI</h1>
      {/* <MuiTypograhpy /> */}
      {/* <MuiButton/> */}
      {/* <MuiTextField/> */}
      <ExpandableTable />
    </Box>


  )
}

export default App
