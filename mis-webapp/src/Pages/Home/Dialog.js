import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);
  const [item, setItem] = React.useState(1);
  const [warehouse, setWarehouse] = React.useState(1);
  const [rack, setRack] = React.useState(1);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        onClick={handleClickOpen}
      >
        RECEIVE
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Receive Goods
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              confirm
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <Grid container spacing={2} sx={{ margin: "0px 10px" }}>
            <Grid item xs={12} container spacing={2} sx={{ alignItems: "center" }}>
              <Grid item xs={1}>
                <ListItemText primary="Item"/>
              </Grid>
              <Grid item xs="auto">
              <Select
                value={item}
                label="Item"
                onChange={event => setItem(event.target.value)}
              >
                <MenuItem value={1}>Wood Block</MenuItem>
                <MenuItem value={2}>1m Wood Pole</MenuItem>
                <MenuItem value={3}>50x50cm Wood Plank</MenuItem>
                <MenuItem value={4}>Table</MenuItem>
                <MenuItem value={5}>Chair</MenuItem>
              </Select>
              </Grid>
            </Grid>

            <Grid item xs={12} container spacing={2} sx={{ alignItems: "center" }}>
              <Grid item xs={1}>
                <ListItemText primary="Warehouse"/>
              </Grid>
              <Grid item xs="auto">
              <Select
                value={warehouse}
                label="Warehouse"
                onChange={event => setWarehouse(event.target.value)}
              >
                <MenuItem value={1}>Warehouse 1</MenuItem>
                <MenuItem value={2}>Warehouse 2</MenuItem>
              </Select>
              </Grid>
            </Grid>

            <Grid item xs={12} container spacing={2} sx={{ alignItems: "center" }}>
              <Grid item xs={1}>
                <ListItemText primary="Rack"/>
              </Grid>
              <Grid item xs="auto">
              <Select
                value={rack}
                label="Rack"
                onChange={event => setRack(event.target.value)}
              >
                  <MenuItem value={1}>Rack 1A</MenuItem>
                  <MenuItem value={2}>Rack 1B</MenuItem>
                  <MenuItem value={3}>Rack 2A</MenuItem>
                  <MenuItem value={4}>Rack 2B</MenuItem>
                }
              </Select>
              </Grid>
            </Grid>

            <Grid item xs={12} container spacing={2} sx={{ alignItems: "center" }}>
              <Grid item xs={1}>
                <ListItemText primary="Qty"/>
              </Grid>
              <Grid item xs="auto">
                <TextField label="Qty" variant="outlined" />
              </Grid>
            </Grid>
          </Grid>
        </List>
      </Dialog>
    </React.Fragment>
  );
}
