import ContactForm from './ContactForm.jsx';
import SearchBox from './SearchBox.jsx';
import ContactList from './ContactList.jsx';

function App() {
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <section>
          <ContactForm />
        </section>
        <section>
          <SearchBox />
        </section>
        <section>
          <ContactList />
        </section>
      </div>
    </>
  );
}

export default App;
