import React, {useState, useEffect} from 'react';
import { Paper, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import ContactList from './ContactList/ContactList';
import useStyles from './styles';
import { getContactsByTypePersonId } from '../../actions/contacts';
import { ListTypes } from '../../constants/listsType';
import ContactForm from './ContactForm/ContactForm';

const ContactBoard = () => {
    const [ currentList, setCurrentList ] = useState(ListTypes.PHONE);
    const [ currentId, setCurrentId ] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        chosenList(currentList);

    }, [currentList, currentId, dispatch]);

    const chosenList = (param) => {

        console.log('param: ', param)

        switch (param){
            case ListTypes.PHONE:
                return dispatch(getContactsByTypePersonId(ListTypes.PHONE, 1));
            case ListTypes.EMAIL:
                return dispatch(getContactsByTypePersonId(ListTypes.EMAIL, 1));
            case ListTypes.WHATSAPP:
                return dispatch(getContactsByTypePersonId(ListTypes.WHATSAPP, 1));
            default:
                return dispatch(getContactsByTypePersonId(ListTypes.PHONE, 1));
        }
    }

    return(
        <div>
            <div className={classes.header}>
                <Button className={classes.btnPhone} onClick={() => setCurrentList(ListTypes.PHONE) }>Phone</Button>
                <Button className={classes.btnWhats} onClick={() => setCurrentList(ListTypes.WHATSAPP) }>Whatsapp</Button>
                <Button className={classes.btnEmail} onClick={() => setCurrentList(ListTypes.EMAIL) }>Email</Button>
            </div>
            <Paper className={classes.form}>
                <ContactForm currentList={currentList} currentId={currentId} setCurrentId={setCurrentId}/>
            </Paper>

            <Paper className={classes.list}>
                <ContactList currentList={currentList} setCurrentId={setCurrentId}/>
            </Paper>
        </div>
    );
}

export default ContactBoard;