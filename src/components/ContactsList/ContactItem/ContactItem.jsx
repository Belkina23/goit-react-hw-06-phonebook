import { PropTypes } from 'prop-types';
import { ContactItem, Button } from './ContactItem.styled';
import { deleteContact } from '../../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <ContactItem>
      <p>
        {name}: {number}
      </p>

      <Button onClick={handleDelete} title="Delete contact">
        Delete
      </Button>
    </ContactItem>
  );
};

ContactListItem.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
