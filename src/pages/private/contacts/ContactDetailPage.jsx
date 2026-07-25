import React from "react";
import { useParams } from "react-router-dom";
import ContactDetail  from "@/features/contacto/components/admin/ContactDetail";

const ContactDetailPage = () => {
  const { id } = useParams();

  return (
    <>
      <ContactDetail id={id} />
    </>
  );
};

export default ContactDetailPage;