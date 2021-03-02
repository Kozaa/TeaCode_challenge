import { useEffect, useState } from "react";

const useData = () => {
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    fetch(
      "https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json"
    )
      .then((response) => response.json())
      .then((data) => data.sort((a, b) => (a.last_name > b.last_name ? 1 : -1)))
      .then((data) => setContacts(data))
      .catch((err) => {
        console.log(err.message);
        setContacts("Sorry, something went wrong");
      });
  }, []);

  return contacts;
};

export default useData;
