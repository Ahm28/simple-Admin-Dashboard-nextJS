import { Card, CardContent, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import DataCostumer from './dataCostumer'

export default function Costumer() {
  return (
    <Card sx={{borderRadius : 3}}>
        <CardContent>
            <Box>
                <Typography variant="h6" sx={{mb : 3, fontWeight : 'bold'}}>
                    Product 
                </Typography>
                {/* <Box>
                    <DataCostumer />
                </Box> */}
            </Box>
        </CardContent>
    </Card>
  )
}
