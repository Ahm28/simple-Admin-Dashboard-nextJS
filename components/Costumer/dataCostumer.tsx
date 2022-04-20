import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


export default function DataCostumer() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell  style={{minWidth : 170}}>
                Code Product
              </TableCell>
              <TableCell style={{minWidth : 100}}>
                Name Product
              </TableCell>
              <TableCell align='right' style={{minWidth : 170}}>
                Desc
              </TableCell>
              <TableCell align='right' style={{minWidth : 170}}>
                Price
              </TableCell>
              <TableCell align='right' style={{minWidth : 100}}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
                  <TableRow hover role="checkbox" tabIndex={-1} >
                    
                        <TableCell >
                          
                            red
                        </TableCell>
                        <TableCell >

                            red
                        </TableCell>
                        <TableCell align='right'>
                          
                            red
                        </TableCell>
                        <TableCell align='right' >
                          
                            red
                        </TableCell>
                        <TableCell align='right' >
                          
                            Edit | Delete
                        </TableCell>
                      
                    
                  </TableRow>
                
              
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        // count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

