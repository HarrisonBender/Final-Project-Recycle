import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";


    const ContactForm = () => {
      let history = useHistory();
      const [name, setName] = useState<string>("");
      const [email, setEmail] = useState<string>("");
      const [content, setContent] = useState<string>("");

      const handleSubmit = () => {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, content }),
        };

        
      };

      return (
        
        <h2>Contact form will be here</h2>
        // insert contact form here
      );
    };
export default ContactForm;
