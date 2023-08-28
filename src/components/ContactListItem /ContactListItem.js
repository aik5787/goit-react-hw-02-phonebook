import PropTypes from 'prop-types';

export const ContactListItem = ({ name, number }) => (
  <li>
    {name}: {number}
  </li>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};