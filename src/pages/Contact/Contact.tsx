import React from "react";
import ContactTitle from "../../sections/Contact/ContactTitle/ContactTitle";
import Informations from "../../sections/Contact/Informations/Informations";
import Form from "../../sections/Contact/Form/Form";
import style from "./Contact.module.scss";

const Contact: React.FC = () => {
  return (
    <>
      <ContactTitle />
      <div className={style.contactContainer}>
        <Informations />
        <Form />
      </div>
    </>
  );
};

export default Contact;
