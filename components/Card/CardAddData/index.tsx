import { Button, Card, CardContent, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function CardAddCostumer() {
  return (
    <Card sx={{width : '600px', p : 3, borderRadius : 3}}>
        <CardContent>
            <Box sx={{my : 3}}>
                <TextField fullWidth label="Code Product" type='text' id="name" />
            </Box>
            
            <Box sx={{my : 3}}>
                <TextField fullWidth label="Name Product" type='email' id="name" />
            </Box>
            
            <Box sx={{my : 3}}>
                <TextField fullWidth label="Desc" id="name" type='text' />
            </Box>

            <Box sx={{my : 3}}>
                <TextField fullWidth label="Price" type='number' id="name" />
            </Box>

            <Button variant="contained" sx={{width : '100%'}}>Add Product</Button>
        </CardContent>
    </Card>
  )
}
