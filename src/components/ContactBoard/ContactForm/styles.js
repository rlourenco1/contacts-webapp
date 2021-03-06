import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
        },
    },
    form: {
        display: 'flex',
        justifyContent: 'center',
    },
    buttonSubmit: {
        margin: "20px 5px 20px"
    },
}));