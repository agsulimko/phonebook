import { useState } from "react";
import css from "./ContactForm.module.css";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";

import { selectContacts } from "redux/contacts/selectors";
import { addContacts } from "redux/contacts/operations";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const { contacts } = useSelector(selectContacts);
  const handleInputChange = ({ target: { value, name } }) => {
    if (name === "name") setName(value);
    if (name === "number") setNumber(value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataForm = { name: name, number: number };
    const existingContact = contacts.find(
      (contact) => contact.name === dataForm.name
    );
    if (existingContact) {
      return toast.error(`${dataForm.name} is already in contacts`, {
        duration: 1500,
      });
    }
    dispatch(addContacts(dataForm));
    toast.success("Successfully adding a contact!", { duration: 1500 });
    setName("");
    setNumber("");
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInputChange}
          className={css.input}
        />
      </label>
      <label className={css.label}>
        Phone
        <input
          type="tel"
          name="number"
          placeholder="Enter number XXX-XX-XX"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleInputChange}
          className={css.input}
        />
      </label>
      <Button
        className={css.btnAdd}
        type="submit"
        sx={{ m: 1, width: "400px" }}
      >
        Add contact
      </Button>
    </form>
  );
};

export default ContactForm;
