import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import style from './ContactForm.module.css'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as contactOperations from '../../redux/contact-operations';

const ContactForm = ({ onAddSubmit }) => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const nameInputId = uuidv4();
    const numberInputId = uuidv4();

    
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
        onAddSubmit(name, number);
        return reset();
    };

    const reset = () => {
        setNumber("");
        setName("")
    }
    return (
        <form className={style.ContactForm} onSubmit={handleSubmit}>
            <label className={style.ContactLabel} htmlFor={nameInputId}>
                Имя
                <input
                    className={style.ContactInput}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п." required
                    // required
                    id={nameInputId}
                    value={name}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor={numberInputId} className={style.ContactLabel}>
                Номер
                <input
                    className={style.ContactInput}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    value={number}
                    onChange={handleChange}
                    id={numberInputId} />
            </label>

            <button
                className={style.ContactBtn}
                type="submit">Add contact</button>
        </form>
    );
}
    ContactForm.propTypes = {
        name: PropTypes.string,
        number: PropTypes.number,
};
    
const mapDispatchToProps = dispatch => ({
    onAddSubmit: (name, number) => dispatch(contactOperations.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(ContactForm)
//     state = {
//         number: "",
//         name: "",
//     }

//     nameInputId = uuidv4();
//     numberInputId = uuidv4();

//     handleChange = e => {
//         const { name, value } = e.currentTarget;
//         this.setState({ [name]: value });
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.onSubmit(this.state.name, this.state.number)
//         this.reset();
//     };

//     reset = () => {
//         this.setState({name: "", number: ""})
//     }
//     render() {
//         return (
//             <form className={style.ContactForm} onSubmit={this.handleSubmit}>
//                 <label className={style.ContactLabel} htmlFor={this.nameInputId}>
//                     Имя
//                     <input
//                         className={style.ContactInput}
//                         type="text"
//                         name="name"
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."required
//                         // required
//                         id={this.nameInputId}
//                         value={this.state.name}
//                         onChange={this.handleChange}
//                     />
//                 </label>
//                 <label htmlFor={this.numberInputId} className={style.ContactLabel}>
//                     Номер
//                     <input
//                         className={style.ContactInput}
//                         type="tel"
//                         name="number"
//                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//                         required
//                         value={this.state.number}
//                         onChange={this.handleChange}
//                         id={this.numberInputId}/>
//                 </label>

//                 <button 
//                     className={style.ContactBtn}
//                     type="submit">Add contact</button>
//             </form>
//         );
//     }   
// }

// export default ContactForm;