import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Яготинське
          </Typography>
          <Button
            color="secondary"
            variant="contained"
            component={Link}
            to="/login"
          >
            Авторизуватись
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
