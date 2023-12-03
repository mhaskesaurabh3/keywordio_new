import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Cosmetics', 712, `USD 4,272`, 8, `USD 16,568`),
    createData('Serums', 3961, `USD 27,331`, 115, `USD 362,526`),
    createData('Facewash', 9462, `USD 76,831`, 123, `USD 266,800`),
    createData('Shampoos', 439, `USD 2,151`, 5, `USD 11,029`),
    createData('Conditioners', 1680, `USD 3,864`, 49, `USD 175,245`),
    createData('Facewash 2', 4978, `USD 29,370`, 189, `USD 623,106`),
];


function GraphData() {
    
    return (
        <TableContainer component={Paper} >
            <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell><b>Campaigns</b></TableCell>
                        <TableCell align="right"><b>Clicks</b></TableCell>
                        <TableCell align="right"><b>Cost</b></TableCell>
                        <TableCell align="right"><b>Conversions</b></TableCell>
                        <TableCell align="right"><b>Revenue</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default React.memo(GraphData);