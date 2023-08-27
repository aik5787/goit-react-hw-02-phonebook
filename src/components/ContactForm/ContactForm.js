import PropTypes from 'prop-types';

export const ContactForm = ({ name, number, onNameChange, onNumberChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input
      type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я\-'\s]*$"
    //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      value={name}
      onChange={onNameChange}
        />
         <input
      type="tel"
            name="number"
            pattern="[0-9]*"
    //  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      value={number}
      onChange={onNumberChange}
        />
    <button type="submit">Add contact</button>
  </form>
);

ContactForm.propTypes = {
name: PropTypes.string.isRequired,
number: PropTypes.string.isRequired,
onNameChange: PropTypes.func.isRequired,
onNumberChange: PropTypes.func.isRequired,
onSubmit: PropTypes.func.isRequired,
};