import React, { useState, useEffect } from "react";
import { TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createContact, updateContact } from "../../../actions/contacts";
import { ListTypesGetDescription, ListTypes } from "../../../constants/listsType";

const ContactForm = ({currentList, currentId, setCurrentId}) => {

    const [contactData, setContactData] = useState({
        name: '' , value: '', type: currentList, personId: 1
    });
    const contact = useSelector((state) => currentId ? state.contacts.find((p) => p.id == currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    let listDescription = currentList ? ListTypesGetDescription(currentList) : "Phone";

    useEffect(() => {
        if(contact) setContactData(contact);

    }, [contact]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('contact: ', contactData);
        contactData.type = currentList;

        if(currentId){
            dispatch(updateContact(contactData));     
        }
        else{
            dispatch(createContact(contactData));
        }

        clear();
    }

    const clear = () => {
        setCurrentId(0);
        setContactData({name: '', value: '', type: currentList, personId: 1})
    }

    return(
        <form id="postForm" autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <TextField name="name" variant="outlined" label="Name" value={contactData.name}
                onChange={(e) => setContactData({ ...contactData, name: e.target.value})}/>
            <TextField name="value" variant="outlined" label={listDescription} value={contactData.value}
                type={currentList === ListTypes.EMAIL ? "text" : "number"}
                onChange={(e) => setContactData({ ...contactData, value: e.target.value})}/>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="small" type="submit">Submit</Button>
            <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" onClick={clear}>Clear</Button>
        </form>
    );
}

export default ContactForm;