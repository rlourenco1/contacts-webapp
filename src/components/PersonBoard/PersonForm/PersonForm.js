import React, { useState, useEffect } from "react";
import { TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createPerson, updatePerson } from "../../../actions/persons";

const PersonForm = ({currentId, setCurrentId}) => {

    const [personData, setPersonData] = useState({
        name: ''
    });
    const person = useSelector((state) => currentId ? state.persons.find((p) => p.id == currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(person) setPersonData(person);
    }, [person]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('person: ', personData);

        if(currentId){
            dispatch(updatePerson(personData));     
        }
        else{
            dispatch(createPerson(personData));
        }

        clear();
    }

    const clear = () => {
        setCurrentId(0);
        setPersonData({name: ''})
    }

    return(
        <form id="postForm" autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            {/* <Typography variant="h6">Create Person</Typography> */}
            <TextField name="name" variant="outlined" label="Name" value={personData.name}
                onChange={(e) => setPersonData({ ...personData, name: e.target.value})}/>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="small" type="submit">Submit</Button>
            <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" onClick={clear}>Clear</Button>
        </form>
    );
}

export default PersonForm;