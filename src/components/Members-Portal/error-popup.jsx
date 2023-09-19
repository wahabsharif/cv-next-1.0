import React from "react";

const ErrorPopup = ({ onClose }) => {
  return (
    <div className="mem-port-error">
      <p>
        **Error: Membership Number Field Must Not Be Left Empty or Incorrect.**
      </p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ErrorPopup;
