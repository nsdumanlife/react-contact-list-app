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
      <h3>Contact List</h3>
      <ul className='list'>
        {/* {contacts.forEach((contact) => {
          <li>{contact.fullname}</li>;
        })} */}

        {searched.map((contact, i) => (
          <li key={i}>
            <span>{contact.fullname}</span>
            <span>{contact.phone_number}</span>
          </li>
        ))}
      </ul>
      <p>Total contacts: ({searched.length})</p>
    </div>
  );
}

export default List;
