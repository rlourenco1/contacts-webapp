import { combineReducers } from "redux";

import persons from './persons';
import contacts from './contacts';

export default combineReducers({
    persons, contacts
});