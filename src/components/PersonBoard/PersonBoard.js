import React, {useState, useEffect} from 'react';
import { Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPersons } from '../../actions/persons';
import PersonForm from './PersonForm/PersonForm';
import PersonList from './PersonList/PersonList';
import useStyles from './styles';

const PersonBoard = () => {
    const [ currentId, setCurrentId ] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPersons());
    }, [currentId, dispatch]);

    return(
        <div>
            <Paper className={classes.form}>
                <PersonForm currentId={currentId} setCurrentId={setCurrentId}/>
            </Paper>

            <Paper className={classes.list}>
                <PersonList setCurrentId={setCurrentId} />
            </Paper>
        </div>
    );
}

export default PersonBoard;