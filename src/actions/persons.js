import * as api from '../api';
import * as actionType from '../constants/actionTypes';

// Action Creators
export const getPersons = () => async (dispatch) => {
    try{
        //const action = { type: 'FETCH_ALL', payload: [] };
        const { data } = await api.getAllPersons();

        console.log('dados1: ', data);

        dispatch({ type: actionType.GET_ALL, payload: data });
    }
    catch(error){
        console.log(error.message);
    }
}

export const createPerson = (person) => async (dispatch) => {
    try{
        const { data } = await api.createPerson(person);

        dispatch({ type: actionType.CREATE, payload: data });
    }
    catch(error){
        console.log(error.message);
    }
}

export const updatePerson = (person) => async (dispatch) => {
    try{
        console.log('update: ', person);
        const { data } = await api.updatePerson(person);

        dispatch({ type: actionType.UPDATE, payload: data });
    }
    catch(error){
        console.log(error.message);
    }
}

export const deletePerson = (id) => async (dispatch) => {
    try{
        await api.deletePersonById(id);

        dispatch({ type: actionType.DELETE, payload: id });
    }
    catch(error){
        console.log(error.message);
    }
}