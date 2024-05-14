import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const data = [
  {
    id: "1",
    name: "Warehouse 1",
    racks: [
      {
        id: "1",
        name: "Rack 1A"
      },
      {
        id: "2",
        name: "Rack 1B"
      }
    ]
  },
  {
    id: "2",
    name: "Warehouse 2",
    racks: [
      {
        id: "1",
        name: "Rack 2A"
      },
      {
        id: "2",
        name: "Rack 2B"
      }
    ]
  }
];

function Row(props) {
  const { row } = props;
  const [ open, setOpen ] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell>{row.racks.length}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Rack
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Rack Name</TableCell>
                    <TableCell>Item</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    row.racks.map(rack => (
                      <TableRow key={rack.id}>
                        <TableCell component="th" scope="row">
                          {rack.name}
                        </TableCell>
                        <TableCell>-</TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Warehouse Name</TableCell>
            <TableCell>Capacity (#of Rack)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.map(row =>
              <Row key={row.id} row={row} />
            )
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
