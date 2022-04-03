import { AppBar, Toolbar, CssBaseline, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

import useStyles from './styles';

function Navbar() {
    const classes = useStyles();
    let navigate = useNavigate();

    return (
      <AppBar position="static">
        {/* <CssBaseline /> */}
        <Toolbar>
          <Typography variant="h4" className={classes.title} onClick={() => navigate('/')}>
            Contacts Management
          </Typography>
            <div>Admin</div>
        </Toolbar>
      </AppBar>
    );
  }

export default Navbar;