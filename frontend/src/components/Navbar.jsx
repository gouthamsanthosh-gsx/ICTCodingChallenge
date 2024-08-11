import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';

const Navbar = () => {
  return (
  <div>
	<Box sx={{ flexGrow: 1 }}>
	<AppBar position="static" color='secondary'>
	<Toolbar>
		<Typography variant="h6" component="div">
		EmployeeApp
		</Typography>
		<div style={{ flexGrow:1 }}></div>
		<Button>
			<Link to={"/"}><HomeIcon sx={{color:"#ffffff"}}/></Link>
		</Button>
		<Button>
			<Link to={"/add"}><AddBoxIcon sx={{color:"#ffffff"}}/></Link>
		</Button>
	</Toolbar>
	</AppBar>
	</Box>
	<br /><br />
	</div>
  )
}

export default Navbar