import { useNavigate } from "react-router-dom";
import { Card, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  cent: {
    width: "500px",
    marginTop: "50px",
    marginLeft: "350px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    verticalAlign: "middle",
    //boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "25px",
  },
  btn: {
    margin: "0 10px 0" 
  }
}))

function Homepage() {
    const classes = useStyles();
    let navigate = useNavigate();
  
    return (
    <div className={classes.cent}>
        <Button className={classes.btn} color="primary" variant="contained" onClick={() => navigate('/person')}>Persons</Button>
        <Button className={classes.btn} color="primary" variant="contained" onClick={() => navigate('/contact')}>Contacts</Button>
    </div>
    );
  }

export default Homepage;