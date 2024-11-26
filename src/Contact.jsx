import { useDispatch } from 'react-redux';
import { deleteContact } from '../src/redux/contactsSlice';

const Contact = ({ name, number, contactId }) => {
  const dispatch = useDispatch();
  return (
    <div className='singleCard'>
      <h3>Card</h3>
      <div className='buttonBlock'>
        <span>{name}</span>
        <span>{number}</span>
        <button onClick={() => dispatch(deleteContact(contactId))}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
