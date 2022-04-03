import {GET_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes';

export default (persons = [], action) => {
    switch (action.type){
        case GET_ALL:
            return action.payload;
        case CREATE:
            return [...persons, action.payload];
        case UPDATE:
            return persons.map((person) => person.id === action.payload.id ? action.payload : person);
        case DELETE:
            return persons.filter((person) => person.id != action.payload);
        default:
            return persons;
    }
}