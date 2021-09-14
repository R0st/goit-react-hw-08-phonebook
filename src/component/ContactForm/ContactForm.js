import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './ContactForm.module.css';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';

export default  function ContactForm () {
    const dispatch = useDispatch();
    const contacts = useSelector(contactsSelectors.getAllContacts);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const handleChange = event => {
        const { name, value } = event.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };
    
    const handleSubmit = e => {
        e.preventDefault();

        if (contacts.map(contact => contact.name).includes(name)) {
            return alert(`${name} is already in contacs.`)
        }

        dispatch(contactsOperations.addContact({ name, number }));
        setName('');
        setNumber('');
    }
    
    return (
        <form className={style.ContactForm} onSubmit={handleSubmit}>
            <label className={style.ContactLabel}>
                Name
                <input
                    className={style.ContactInput}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п." required
                    // required
                    value={name}
                    onChange={handleChange}
                />
            </label>
            <label  className={style.ContactLabel}>
                Number
                <input
                    className={style.ContactInput}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    value={number}
                    onChange={handleChange} />
            </label>

            <button
                className={style.ContactBtn}
                type="submit">Add contact</button>
        </form>
    );
}


// import React, { useState } from 'react'
// import { v4 as uuidv4 } from 'uuid';
// import style from './ContactForm.module.css'
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { contactsOperations } from '../../redux/contacts';

// const ContactForm = ({ onAddSubmit }) => {

//     const [name, setName] = useState('');
//     const [number, setNumber] = useState('');
    
//     const nameInputId = uuidv4();
//     const numberInputId = uuidv4();

    
//     const handleChange = event => {
//         const { name, value } = event.currentTarget;

//         switch (name) {
//             case 'name':
//                 setName(value);
//                 break;
//             case 'number':
//                 setNumber(value);
//                 break;
//             default:
//                 return;
//         }
//     };
    

//     const handleSubmit = e => {
//         e.preventDefault();
//         onAddSubmit(name, number);
//         return reset();
//     };

//     const reset = () => {
//         setNumber("");
//         setName("")
//     }
//     return (
//         <form className={style.ContactForm} onSubmit={handleSubmit}>
//             <label className={style.ContactLabel} htmlFor={nameInputId}>
//                 Имя
//                 <input
//                     className={style.ContactInput}
//                     type="text"
//                     name="name"
//                     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                     title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п." required
//                     // required
//                     id={nameInputId}
//                     value={name}
//                     onChange={handleChange}
//                 />
//             </label>
//             <label htmlFor={numberInputId} className={style.ContactLabel}>
//                 Номер
//                 <input
//                     className={style.ContactInput}
//                     type="tel"
//                     name="number"
//                     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                     title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//                     required
//                     value={number}
//                     onChange={handleChange}
//                     id={numberInputId} />
//             </label>

//             <button
//                 className={style.ContactBtn}
//                 type="submit">Add contact</button>
//         </form>
//     );
// }
//     ContactForm.propTypes = {
//         name: PropTypes.string,
//         number: PropTypes.number,
// };
    
// const mapDispatchToProps = dispatch => ({
//     onAddSubmit: (name, number) => dispatch(contactsOperations.addContact(name, number)),
// });

// export default connect(null, mapDispatchToProps)(ContactForm)