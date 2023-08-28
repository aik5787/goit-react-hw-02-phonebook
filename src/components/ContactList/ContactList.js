import PropTypes from 'prop-types';
import { ContactListItem } from '../ContactListItem /ContactListItem';


export const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(contact => (
      <ContactListItem key={contact.id} name={contact.name} number={contact.number} />
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