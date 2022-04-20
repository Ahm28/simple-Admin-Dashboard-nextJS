import { Card, CardContent, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { green } from '@mui/material/colors';
import BarChartIcon from '@mui/icons-material/BarChart';

export default function Card2() {
  return (
    <Card sx={{width : '250px', borderRadius : 3}}>
        <CardContent>
            <Box sx={{display : 'flex', justifyContent : 'space-between', mb : 2}}>
                <Card sx={{width : '55px', background: 'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))', color : 'white', borderRadius : 3}}>
                    <CardContent sx={{display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
                        <BarChartIcon sx={{fontSize : 35}} />
                    </CardContent>
                </Card>
                <Box>
                    <Typography sx={{fontSize : 15}} >
                        Transaction
                    </Typography>
                    <Typography sx={{textAlign : 'end', fontWeight : 'bold'}} variant='h5' >
                        500
                    </Typography>
                </Box>
            </Box>
            <hr/>
            <Box sx={{mt : 2}}>
                <Typography variant='subtitle2' sx={{    display : 'flex'}}>
                  <Typography sx={{color : green[400], fontWeight : 'bold'}}>+55% </Typography> than last Week
                </Typography>
            </Box>
        </CardContent>
    </Card>
  )
}
