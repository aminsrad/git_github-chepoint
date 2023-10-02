import React from "react";
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
></link>;

const ContactusCard = (el) => {
  console.log(el + "data");
  return (
    <div>
      <div className="card bg-light mb-3">
        <div className="card-header">{el.Name}</div>
        <div className="card-body">
          <h5 className="card-title">{el.Email}</h5>
          <p className="card-text">{el.Message}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactusCard;
