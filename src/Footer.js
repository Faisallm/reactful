import React from "react";

const Footer = () => {
  // a new date object
  const today = new Date();
  return (
    <footer>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
