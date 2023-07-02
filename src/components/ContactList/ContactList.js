import PropTypes from 'prop-types';

import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ filterContacts, onDelete }) => {
  return (
    <>
      {filterContacts.map(({ name, number, id }) => (
        <ContactItem
          key={id}
          name={name}
          id={id}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};

ContactList.propTypes = {
  filterContacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
