import css from "./Home.module.css";
const Contacts = () => {
  return (
    <main className={css.mainHome}>
      <section className={css.sectionContacts}>
        <div className={css.url}></div>
        <h1 className={css.h1}>Welcome to Phonebook!</h1>
        <h2 className={css.h2}>
          PhoneBook app is an easy to use contact manager app that gives you
          facility of saving and viewing your contacts, so that you never lose
          your contacts. Try it today!
        </h2>
      </section>
    </main>
  );
};
export default Contacts;
