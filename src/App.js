import { useEffect, useState } from "react";
import "./globalStyle.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";

import ContactsDispay from "./components/ContactsDisplay/ContactsDisplay";

const contacts = [
  {
    id: 1,
    first_name: "Jack",
    last_name: "Wick",
    email: "jack@wick.com",
    gender: "Male",
    avatar:
      "https://www.flaticon.com/svg/vstatic/svg/622/622669.svg?token=exp=1614694504~hmac=18eb1c1a1323934f071120fe04f7e9ce",
  },
  {
    id: 2,
    first_name: "Tom",
    last_name: "Wick",
    email: "jack@wick.com",
    gender: "Male",
    avatar:
      "https://www.flaticon.com/svg/vstatic/svg/622/622669.svg?token=exp=1614694504~hmac=18eb1c1a1323934f071120fe04f7e9ce",
  },
];

const App = () => {
  const [search, setSearch] = useState("hey");
  const [selected, setSelected] = useState([]);

  useEffect(() => {});

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
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
        contacts={contacts}
        handleContactClick={handleContactClick}
        selected={selected}
      />
    </>
  );
};

export default App;
