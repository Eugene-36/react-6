import Contact from './Contact.jsx';
import { useSelector } from 'react-redux';
const ContactList = () => {
  const listOfContacts = useSelector((state) => state.contact.items);
  const searchValue = useSelector((state) => state.filters.status);
  const visibleTasks = listOfContacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      {visibleTasks.map(({ id, name, number }) => (
        <Contact key={id} name={name} number={number} contactId={id} />
      ))}
    </div>
  );
};

export default ContactList;
