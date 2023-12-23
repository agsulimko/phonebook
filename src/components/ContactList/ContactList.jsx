import Contact from "components/Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts, selectFilter } from "redux/contacts/selectors";
// import toast from "react-hot-toast";

const ContactList = () => {
  const { contacts } = useSelector(selectContacts);
  const { filter } = useSelector(selectFilter);

  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const filteredContacts = (filter, contacts) => {
    if (!filter) return;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const visibleContacts = filteredContacts(filter, contacts);

  return (
    <ul className={css.list}>
      {(visibleContacts ?? contacts).map((contact) => (
        <Contact contacts={contact} key={contact.id} />
      ))}
    </ul>
  );
};
export default ContactList;
