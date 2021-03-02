import React from "react";
import Contact from "../Contact/Contact";

const ContactsDispay = ({ contacts, handleContactClick, selected }) => {
  return (
    <>
      {contacts.map((contact) => (
        <Contact
          {...contact}
          key={contact.id}
          selected={selected}
          handleContactClick={handleContactClick}
        />
      ))}
    </>
  );
};

export default ContactsDispay;
