import React, { useState, useEffect } from 'react';
import '../App.css';

const ContactsBox = ({ onContactsChange, onContactClick }) => {
  const [inputValue, setInputValue] = useState('');
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState();

  const inputOnChange = (event) => {
    if (event !== '') {
      setInputValue(event.target.value);
    }
  };

  const onInputAdd = (event) => {
    if (!inputValue) {
      setError(`Participant name is empty`);
      return;
    } else if (contacts.includes(inputValue)) {
      setError('Participant already exists');
      return;
    }
    setError();
    const contactsArray = contacts ? contacts : [];
    const newContacts = [...contactsArray, inputValue];
    setContacts(newContacts);
    onContactsChange(newContacts);
    setInputValue('');
  };

  const onDeleteContact = (item) => {
    const newContacts = contacts.filter((c) => c !== item);
    setContacts(newContacts);
    onContactsChange(newContacts);
  };

  return (
    <div>
      <div className="contacts-box-container">
        <h3>Participants</h3>
        <div className="contacts-box-input-container">
          <div className="contacts-box-input">
            <input
              placeholder="John Smith"
              type="text"
              className="contact-input"
              value={inputValue}
              onChange={inputOnChange}
              onKeyPress={(event) => {
                if (event.code === 'Enter') {
                  onInputAdd(event);
                }
              }}
            />
            <button className="contacts-add-button" onClick={onInputAdd}>
              +
            </button>
          </div>
          {error && <span className="input-error">{error}</span>}
          <div className="input-description">
            Add a contact and click on it to mention
          </div>
        </div>
        <hr />
        {contacts && contacts.length > 0 ? (
          contacts.map((contact) => (
            <div key={contact} className="contact-item">
              <button
                className="contact-item-name"
                onClick={() => onContactClick(contact)}
              >
                {contact}
              </button>
              <button
                className="contact-item-delete-button"
                onClick={() => onDeleteContact(contact)}
              >
                x
              </button>
            </div>
          ))
        ) : (
          <div className="empty-box">No participants yet</div>
        )}
      </div>
    </div>
  );
};

export default ContactsBox;
