import { CREATE, GET_BY_PERSON_ID, GET_BY_TYPE_PERSON_ID, UPDATE, DELETE } from '../constants/actionTypes';

export default (contacts = [], action) => {
    switch (action.type){
        case GET_BY_PERSON_ID:
            return action.payload;
        case GET_BY_TYPE_PERSON_ID:
            return action.payload;
        case CREATE:
            return [...contacts, action.payload];
        case UPDATE:
            return contacts.map((contact) => contact.id === action.payload.id ? action.payload : contact);
        case DELETE:
            return contacts.filter((contact) => contact.id != action.payload);
        default:
            return contacts;
    }
}