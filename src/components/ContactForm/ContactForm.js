import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';


export class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

      handleNameChange = event => {
    this.setState({ name: event.target.value });
   };
  
    handleNumberChange = event => {
    this.setState({ number: event.target.value });
  };

  
   handleSubmit = event => {
    event.preventDefault();
    

       const { name, number } = this.state;
       const { onAddContact } = this.props;
    if (name.trim() === '' || number.trim() === '') return;

       const newContact = { id: nanoid(), name, number };
       onAddContact(newContact);
       this.setState({
      name: '',
      number: '',
    });
   };
    render() {
        const { name, number } = this.state;
        return (<form onSubmit={this.handleSubmit}>
    <input
      type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я\-'\s]*$"
    //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      value={name}
      onChange={this.handleNameChange}
        />
         <input
      type="tel"
            name="number"
            pattern="[0-9]*"
    //  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      value={number}
      onChange={this.handleNumberChange}
        />
    <button type="submit">Add contact</button>
  </form>)
    }
}

ContactForm.propTypes = {
    onAddContact: PropTypes.func.isRequired
};



// export const ContactForm = ({ name, number, onNameChange, onNumberChange, onSubmit }) => (
//   <form onSubmit={onSubmit}>
//     <input
//       type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я\-'\s]*$"
//     //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//       required
//       value={name}
//       onChange={onNameChange}
//         />
//          <input
//       type="tel"
//             name="number"
//             pattern="[0-9]*"
//     //  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//       required
//       value={number}
//       onChange={onNumberChange}
//         />
//     <button type="submit">Add contact</button>
//   </form>
// );

// ContactForm.propTypes = {
// name: PropTypes.string.isRequired,
// number: PropTypes.string.isRequired,
// onNameChange: PropTypes.func.isRequired,
// onNumberChange: PropTypes.func.isRequired,
// onSubmit: PropTypes.func.isRequired,
// };