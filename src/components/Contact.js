// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./contact.css";

const Contact = (props) => {
  return (
    <div className="card">
      <div className="kanan">
        <img className="foto" src={props.foto} alt="profil" />
      </div>
      <div className="kiri">
        <p className="nama">{props.nama}</p>
        <p className="noHp">{props.noHP}</p>
        <p className="email">{props.email}</p>
      </div>
    </div>
  );
};

export default Contact;
