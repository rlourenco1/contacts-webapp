import * as api from '../api';
import * as actionType from '../constants/actionTypes';

export const getContactsByPersonId = (personId) => async (dispatch) => {
    try{
        const { data } = await api.getContactsByPersonId(personId);

        console.log('dados2: ', data);

        dispatch({ type: actionType.GET_BY_PERSON_ID, payload: data });
    }
    catch(error){
        console.log(error.message);
    }
}

export const getContactsByTypePersonId = (type, personId) => async (dispatch) => {
    try{
        const { data } = await api.getContactsByTypePersonId(type, personId);

        console.log('dados3: ', data);

        dispatch({ type: actionType.GET_BY_TYPE_PERSON_ID, payload: data });
    }
    catch(error){
        console.log(error.message);
    }
}

export const createContact = (contact) => async (dispatch) => {
    try{
        const { data } = await api.createContact(contact);

        dispatch({ type: actionType.CREATE, payload: data });
    }
    catch(error){
        console.log(error.message);
    }
}

export const updateContact = (contact) => async (dispatch) => {
    try{
        console.log('update: ', contact);
        const { data } = await api.updateContact(contact);

        dispatch({ type: actionType.UPDATE, payload: data });
    }
    catch(error){
        console.log(error.message);
    }
}

export const deleteContact = (id) => async (dispatch) => {
    try{
        await api.deleteContactById(id);

        dispatch({ type: actionType.DELETE, payload: id });
    }
    catch(error){
        console.log(error.message);
    }
}