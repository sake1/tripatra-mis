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
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Dialog from "./Dialog";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const data = [
  {
    id: "1",
    itemName: "Chair",
    itemType: "Finished Goods",
    warehouse: "Warehouse 1",
    rack: "Rack 1A",
    qty: 10,
    dateAdded: "1 May 2024",
  },
];

function Row(props) {
  const { row } = props;

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>{row.itemName}</TableCell>
        <TableCell>{row.itemType}</TableCell>
        <TableCell>{row.qty}</TableCell>
        <TableCell>{row.dateAdded}</TableCell>
        <TableCell>{row.warehouse}</TableCell>
        <TableCell>{row.rack}</TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
  return (
    <Grid container spacing={2}>
      <Grid item xs/>
      <Grid item xs={"auto"}>
        <Dialog title="RECEIVE"/>
      </Grid>
      <Grid item xs={"auto"}>
        <Button
          variant="contained"
        >
          ISSUE
        </Button>
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell>Item Name</TableCell>
                <TableCell>Item Type</TableCell>
                <TableCell>Qty</TableCell>
                <TableCell>Date Stored</TableCell>
                <TableCell>Warehouse</TableCell>
                <TableCell>Rack</TableCell>
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
      </Grid>
    </Grid>
  );
}
