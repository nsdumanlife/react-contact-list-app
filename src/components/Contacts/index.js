import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";

import "./styles.css";

function Contact() {
  const [contacts, setContacts] = useState([
    { fullname: "Mehmet", phone_number: "123123" },
    { fullname: "Ahmet", phone_number: "454545" },
    { fullname: "Ayse", phone_number: "989898" },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <List contacts={contacts} />
      <Form contacts={contacts} addContact={setContacts} />
    </div>
  );
}

export default Contact;
