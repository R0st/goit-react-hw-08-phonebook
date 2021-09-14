import { createSelector } from 'reselect';

const getFilter = state => state.contacts.filter;
const getError = state => state.contacts.error;
const getAllContacts = state => state.contacts.items;

const getFilteredContacts = createSelector(
    [getAllContacts, getFilter], (contacts,filter) => {
        const normalizedFilter = filter.toLowerCase();
        
        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(normalizedFilter),
    );
})

const contactsSelectors = {
    getFilter,
    getAllContacts,
    getFilteredContacts,
    getError,
}

export default contactsSelectors;