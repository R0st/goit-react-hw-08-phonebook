// import React from 'react'
import style from './ContactList.module.css'
import {contactsOperations, contactsSelectors } from '../../redux/contacts';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function ContactList() {
    const dispatch = useDispatch();
    const contacts = useSelector(contactsSelectors.getFilteredContacts);
    const onDeleteContact= id => dispatch(contactsOperations.deleteContact(id));
    
    useEffect(() => {
        dispatch(contactsOperations.fetchContact());
    }, [dispatch]);

    return (
        <ul className={style.ContactListUl}>
            {contacts.map(({ id, name, number }) => (
                <li className={style.ContactListLi} key={id}>
                    <p>{name}: 
                        <span>{number}</span>
                    </p> 
                    <button
                        type="button"
                        className={style.ContactBtnDel}
                        onClick={()=>onDeleteContact(id)}>Delete</button>  
                </li>
            ))}
        </ul>
)
} 
