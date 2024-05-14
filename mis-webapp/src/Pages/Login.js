import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ErrorPage() {
  let navigate = useNavigate();

  return (
    <Box
      component="form"
      sx={{
        marginTop: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Card
        sx={{ width: "30%", textAlign: "center" }}
        variant="outlined"
      >
        <CardContent>
          <Stack spacing={2} drection="column">
            <Typography variant="h3" gutterBottom>
              Material Inventory System
            </Typography>
            <TextField label="Username" variant="standard" />
            <TextField label="Password" variant="standard" type="password" />
            <Button
              variant="contained"
              onClick={() => navigate("/home")}
            >
              LOGIN
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
