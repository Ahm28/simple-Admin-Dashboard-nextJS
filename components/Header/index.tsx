import React, { useState } from 'react'
import {AppBar, Typography, Toolbar, Tab, Tabs, Button, Card, CardContent} from '@mui/material'
import Link from 'next/link';
import { Box } from '@mui/system';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddIcon from '@mui/icons-material/Add';

const Header = () => {
  return (
    <>
        <Card sx={{maxWidth : 300, m : 3, height : '90vh', borderRadius : 3, background: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))', color : 'white', position : 'fixed'}}>
            
            <CardContent sx={{height : '100%', py : 3 , display : 'flex', flexDirection : 'column', justifyContent : 'space-between' }}>

                <Box sx={{display : 'flex', alignItems : 'center', mb : 3, pb : 2, borderBottom: 1}}>
                    <SupervisorAccountIcon />
                    <Typography  component='div' sx={{marginLeft :2  }}>
                        Admin Dashboard
                    </Typography>
                </Box>
                
                <Box>
                    <Link href='/'>
                        <Box sx={{display : 'flex', alignItems : 'center', my : 3, cursor : 'pointer'}}>
                            <DashboardIcon />
                            <Typography  component='div' sx={{marginLeft :2  }}>
                                Dashboard
                            </Typography>
                        </Box>
                    </Link>
                    <Link href='/addCostumer'>
                        <Box sx={{display : 'flex', alignItems : 'center', my : 3, cursor : 'pointer'}}>
                            <AddIcon />
                            <Typography  component='div' sx={{marginLeft :2  }}>
                                Add Costumer
                            </Typography>
                        </Box>
                    </Link>
                </Box>

                <Box sx={{ my : 3}}>
                    <Box sx={{display : 'flex', alignItems : 'center', my : 3}}>
                        <Button variant="contained" sx={{width : '100%'}}>Button</Button>
                    </Box>  
                </Box>
            </CardContent>
        </Card>
    </>
  )
}

export default Header