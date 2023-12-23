import { useDispatch } from "react-redux";
import css from "./Contact.module.css";

import Button from "@mui/material/Button";
import { deleteContacts, editContacts } from "redux/contacts/operations";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Contact = ({ contacts }) => {
  const dispatch = useDispatch();
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState(contacts.name || "");
  const [number, setNumber] = useState(contacts.number || "");

  const handlEdit = () => {
    setIsEditMode((prev) => !prev);
  };
  const handleDelete = () => {
    dispatch(deleteContacts(contacts?.id));
    toast.success("Successfully deleted a contact!", { duration: 1500 });
  };

  useEffect(() => {
    if (!isEditMode && (name !== contacts.name || number !== contacts.number)) {
      dispatch(editContacts({ id: contacts.id, name, number }));
      toast.success("Successfully edit a contact!", { duration: 1500 });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditMode, name, number]);

  const handleInputChange = ({ target }) => {
    if (target.name === "editName") {
      setName(target.value);
    } else if (target.name === "editNumber") {
      setNumber(target.value);
    }
  };

  return (
    <li className={css.item}>
      {!isEditMode ? (
        <div className={css.nameNumber}>
          <h3 className={css.name}>{contacts.name}</h3>
          <h3 className={css.number}>{contacts.number}</h3>
        </div>
      ) : (
        <>
          <input
            onChange={handleInputChange}
            type="text"
            name="editName"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            className={css.input}
          />
          <input
            onChange={handleInputChange}
            type="tel"
            name="editNumber"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={number}
            required
            className={css.input}
          />
        </>
      )}
      <Button
        onClick={handlEdit}
        type="button"
        className={css.btnClose}
        sx={{ m: 1, width: "110px" }}
      >
        {isEditMode ? "Save" : "Edit"}
      </Button>
      <Button
        type="button"
        className={css.btnClose}
        aria-label="Close"
        onClick={handleDelete}
        sx={{ m: 1, width: "110px" }}
      >
        Delete
      </Button>
    </li>
  );
};
export default Contact;
