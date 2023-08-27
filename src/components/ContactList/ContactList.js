import PropTypes from 'prop-types';


export const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>{contact.name}: {contact.number}</li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};