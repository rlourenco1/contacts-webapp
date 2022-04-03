import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

// Person Controller
const urlPerson = `${url}/Person`;

export const getAllPersons = () => axios.get(urlPerson);
export const createPerson = (person) => axios.post(urlPerson, person);
export const updatePerson = (person) => axios.put(urlPerson, person);
export const deletePersonById = (id) => axios.delete(`${urlPerson}/${id}`);
export const getPersonById = (id) => axios.get(`${urlPerson}/${id}`);

// Contact Controller
const urlContact = `${url}/Contact`;

export const getContactById = (id) => axios.get(`${urlContact}/${id}`);
export const getContactsByPersonId = (personId) => axios.get(`${urlContact}/byPersonId/${personId}`);
export const getContactsByTypePersonId = (type, personId) => axios.get(`${urlContact}/byTypeAndPersonId`, {params: {type: type, personId: personId}});
export const createContact = (contact) => axios.post(urlContact, contact);
export const updateContact = (contact) => axios.put(urlContact, contact);
export const deleteContactById = (id) => axios.delete(`${urlContact}/${id}`);
