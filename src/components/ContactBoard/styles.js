import { makeStyles } from '@material-ui/core/styles';
import { hover } from '@testing-library/user-event/dist/hover';

export default makeStyles((theme) => ({
    header:{
        width: "500px",
        marginTop: "10px",
        marginLeft: "350px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        verticalAlign: "middle",
        borderRadius: "25px",
    },
    btnWhats:{
        margin: "0 10px 0",
        backgroundColor: "#006400",
        color: "white",
        '&:hover': {
            backgroundColor: "#006400",
            color: "white",
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4) 0 0)"
        }
    },
    btnPhone:{
        margin: "0 10px 0",
        backgroundColor: "#808080",
        color: "white",
        '&:hover': {
            backgroundColor: "#808080",
            color: "white",
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4) 0 0)"
        }
    },
    btnEmail:{
        margin: "0 10px 0",
        backgroundColor: "#FFD700",
        color: "white",
        '&:hover': {
            backgroundColor: "#FFD700",
            color: "white",
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4) 0 0)"
        }
    },
    form: {
        margin: "10px 20px 10px"
    },
    list: {
        // top, righ/left, bottom
        margin: "10px 20px 10px"
    },
}));