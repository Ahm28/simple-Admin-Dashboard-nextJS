import AccountCircle from '@mui/icons-material/AccountCircle';
import Header from '../components/Header';
import { Container, TextField, Box, Card, Typography } from '@mui/material';

export default function Login() {
  return (
    <>
        <Header />

        <Container className='container' sx={{display : 'flex',justifyContent : 'center'}} >
            <Card sx={{display : 'flex',flexDirection : 'column',justifyContent : 'center',  alignItems : 'center', width : 700, py : 8, mt : 5}}>

                <Typography>
                    <Box sx={{fontSize : 'h3.fontSize', fontWeight : 'bold'}}>Login</Box>
                </Typography>

                <Box sx={{ '& > :not(style)': { m: 1 },  padding : '0 25%'}}>
                    
                    <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="Email" variant="standard" />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="password" variant="standard" type='number'/>
                    </Box>
                </Box>

            </Card>
        </Container>
    </>
  );
}
