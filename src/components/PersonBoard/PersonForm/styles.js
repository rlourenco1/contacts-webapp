import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
        },
    },
    form: {
        display: 'flex',
        //flexWrap: 'wrap',
        justifyContent: 'center',
    },
    buttonSubmit: {
        // top, righ/left, bottom
        margin: "20px 5px 20px"
    },
}));