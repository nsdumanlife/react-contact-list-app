import React from "react";
import { useState } from "react";

function List({ contacts }) {
  const [searchText, setSearchText] = useState("");

  const searched = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(searchText.toLocaleLowerCase());
    });
  });
  return (
    <div>
      <input
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <ul>
        {/* {contacts.forEach((contact) => {
          <li>{contact.fullname}</li>;
        })} */}

        {searched.map((contact, i) => (
          <li key={i}>{contact.fullname}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
