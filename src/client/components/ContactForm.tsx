import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


    const ContactForm = () => {
      let history = useHistory();
      const [name, setName] = useState<string>("");
      const [content, setContent] = useState<string>("");

      const handleSubmit = () => {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, content }),
        };

        
      };

      return (
        <div>!!!CONTACT FORM SHOULD GO HERE!!!!</div>
        // insert contact form here
      );
    };
export default ContactForm;
