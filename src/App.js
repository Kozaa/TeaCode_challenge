import { useEffect, useState } from "react";
import useData from "./hooks/useData";
import "./globalStyle.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import ContactsDispay from "./components/ContactsDisplay/ContactsDisplay";

const App = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const contacts = useData();

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredContacts = () => {
    if (typeof contacts === "string") {
      return contacts;
    }

    if (contacts) {
      return contacts.filter((contact) => {
        let fullName = `${contact.first_name} ${contact.last_name}`.toLowerCase();

        return fullName.includes(search.toLowerCase());
      });
    }
  };

  const handleContactClick = (e) => {
    const id = parseInt(e.currentTarget.id);

    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <>
      <Header>Contacts</Header>
      <SearchBar search={search} handleInputChange={handleInputChange} />
      <ContactsDispay
        contacts={getFilteredContacts()}
        handleContactClick={handleContactClick}
        selected={selected}
      />
    </>
  );
};

export default App;
