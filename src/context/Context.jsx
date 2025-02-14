import { createContext, useState, useRef, useEffect } from "react";
import html2canvas from "html2canvas";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const initialValues = {
    tickettype: "",
    ticketqty: "1",
    fullname: "",
    email: "",
    comment: "",
    src: "",
  };
  const [formValue, setFormValue] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const sectionRef = useRef(null);

  function handleChange(e) {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    setFormErrors({ ...formErrors, [e.target.name]: "" });
  }
  const handleDownload = async () => {
    const section = sectionRef.current;
    if (!section) return;
    const canvas = await html2canvas(section, { useCORS: true });
    const imgData = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = imgData;
    link.download = "form-section.png";
    link.click();
  };

  function validate(values) {
    const errors = {};
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!values.fullname) {
      errors.fullname = "Fullame is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!values.email.match(regex)) {
      errors.email = "Invalid email format";
    }
    if (!values.ticketqty) {
      errors.ticketqty = "Enter number of tickets";
    }
    if (!values.tickettype) {
      errors.tickettype = "Ticket type is required";
    }
    return errors;
  }
  return (
    <GlobalContext.Provider
      value={{
        formValue,
        isSubmit,
        formErrors,
        setFormValue,
        setFormErrors,
        handleChange,
        validate,
        setIsSubmit,
        imageUrl,
        sectionRef,
        setImageUrl,
        handleDownload,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
